export interface PostParams {
  page: number;
  perPage: number;
  search: {
    fields: string[];
    value: string;
  };
}
export interface GetPostsParams extends Partial<PostParams> {}

export interface GetPostParams {
  postId: number;
}

export interface GetPostCommentsParams extends GetPostParams {}

const postEndPoints = {
  getPosts: ({ perPage, page, search }: GetPostsParams): string => {
    const params = [];
    const isSearch = search && search.fields && search.value;

    if (perPage && page && !isSearch) {
      const start = (page - 1) * perPage;
      params.push(`_start=${start}`);
    }

    if (perPage && !isSearch) {
      params.push(`_limit=${perPage}`);
    }

    if (isSearch) {
      search.fields.map((field) =>
        params.push(
          `${encodeURIComponent(field)}=${encodeURIComponent(search.value)}`
        )
      );
    }

    return `posts?${params.join("&")}`;
  },

  getPost: ({ postId }: GetPostParams): string => {
    return `posts/${postId}`;
  },

  getPostComments: ({ postId }: GetPostCommentsParams): string => {
    return `posts/${postId}/comments`;
  },
};

export { postEndPoints };
