export interface GetPostsParams {
  page?: number;
  perPage?: number;
  search?: {
    field: string;
    value: string;
  };
}

const postEndPoints = {
  getPosts: ({ perPage, page, search }: GetPostsParams): string => {
    const params = [];
    const isSearch = search && search.field && search.value;

    if (perPage && page && !isSearch) {
      const start = (page - 1) * perPage;
      params.push(`_start=${start}`);
    }

    if (perPage && !isSearch) {
      params.push(`_limit=${perPage}`);
    }

    if (isSearch) {
      params.push(
        `${encodeURIComponent(search.field)}=${encodeURIComponent(
          search.value
        )}`
      );
    }

    return `posts?${params.join("&")}`;
  },
};

export { postEndPoints };
