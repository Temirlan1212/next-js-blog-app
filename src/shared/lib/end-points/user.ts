export interface GetUserParams {
  userId: number;
}

const userEndPoints = {
  getUser: ({ userId }: GetUserParams): string => {
    return `users/${userId}`;
  },
};

export { userEndPoints };
