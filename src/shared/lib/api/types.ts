import { ValueOf } from "next/dist/shared/lib/constants";
import { methods } from "./constants";

export type MessageApiResponse =
  | string
  | { property: string; message: string }[];

export type SuccessApiResponse<T> = {
  ok: true;
  status: string | number;
  result: T;
  response: Response;
};

export type ErrorApiResponse = {
  ok: false;
  status: string | number;
  message: MessageApiResponse;
  error: any;
};

export type ApiResponse<T> = SuccessApiResponse<T> | ErrorApiResponse;

export type Methods = ValueOf<typeof methods>;

export type NullablePartial<T> = {
  [P in keyof T]: T[P] | null;
};
