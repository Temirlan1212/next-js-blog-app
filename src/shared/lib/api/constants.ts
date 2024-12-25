import { ErrorApiResponse, SuccessApiResponse } from "./types";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function apiSuccessResponse<T>({
  status,
  result,
  response,
}: Partial<SuccessApiResponse<T>>): SuccessApiResponse<T> {
  return {
    ok: true,
    status: status || 200,
    result: result || ([] as any),
    response: response || (null as any),
  };
}

export function apiErrorResponse({
  status,
  message,
  error,
}: Partial<ErrorApiResponse>): ErrorApiResponse {
  return {
    ok: false,
    status: status || error?.status || 500,
    message: message || error?.message || "An unknown error occurred",
    error: error || "uknown error",
  };
}

export const methods = {
  post: "POST",
  delete: "DELETE",
  update: "UPDATE",
  put: "PUT",
  patch: "PATCH",
  options: "OPTIONS",
  get: "GET",
} as const;
