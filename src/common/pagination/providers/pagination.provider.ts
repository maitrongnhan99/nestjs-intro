import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { ObjectLiteral, Repository } from 'typeorm';
import { PaginationQueryDto } from '../dots/pagination-query.dot';
import { Paginated } from '../interfaces/paginated.interface';

@Injectable()
export class PaginationProvider {
  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
  ) {}
  public async paginateQuery<T extends ObjectLiteral>(
    paginationQueryDto: PaginationQueryDto,
    repository: Repository<T>,
  ): Promise<Paginated<T>> {
    try {
      const { page = 1, limit = 10 } = paginationQueryDto;

      const data = await repository.find({
        skip: (page - 1) * limit,
        take: limit,
      });

      const baseUrl =
        this.request.protocol + '://' + this.request.get('host') + '/';

      const url = new URL(this.request.url, baseUrl);

      const totalItems = await repository.count();
      const totalPages = Math.ceil(totalItems / limit);
      const nextPage = page === totalPages ? null : page + 1;
      const previousPage = page === 1 ? null : page - 1;

      return {
        data,
        meta: {
          itemsPerPage: limit,
          totalItems,
          totalPages,
          currentPage: page,
        },
        links: {
          first: `${url.origin}${url.pathname}?page=1&limit=${limit}`,
          previous: previousPage
            ? `${url.origin}${url.pathname}?page=${previousPage}&limit=${limit}`
            : null,
          next: nextPage
            ? `${url.origin}${url.pathname}?page=${nextPage}&limit=${limit}`
            : null,
          last: `${url.origin}${url.pathname}?page=${totalPages}&limit=${limit}`,
          current: `${url.origin}${url.pathname}?page=${page}&limit=${limit}`,
        },
      };
    } catch {
      throw new Error('Failed to paginate query');
    }
  }
}
