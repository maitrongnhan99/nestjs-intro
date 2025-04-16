export interface Paginated<T> {
  data: T[];
  meta: {
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string | null;
    previous: string | null;
    next: string | null;
    last: string | null;
    current: string | null;
  };
}
