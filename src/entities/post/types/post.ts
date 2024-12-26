export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostComment extends Omit<Post, "title"> {
  postId: number;
  name: string;
}
