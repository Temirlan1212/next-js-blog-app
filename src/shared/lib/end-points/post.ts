export interface GetPostsParams {
  page: number;
  perPage: number;
}

const postEndPoints = {
  getPosts: ({ perPage, page }: GetPostsParams): string => {
    const start = (page - 1) * perPage;
    return `posts?_start=${start}&_limit=${perPage}`;
  },
};

export { postEndPoints };
