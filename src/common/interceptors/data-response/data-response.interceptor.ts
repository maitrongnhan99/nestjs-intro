import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';
import { DataResponse } from '../interfaces/data-response.interface';

@Injectable()
export class DataResponseInterceptor<T = unknown>
  implements NestInterceptor<T, DataResponse<T>>
{
  constructor(private readonly configService: ConfigService) {}
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    return next.handle().pipe(
      map((data: T) => {
        return {
          data,
          apiVersion: this.configService.get<string>('app.apiVersion'),
        };
      }),
    );
  }
}
