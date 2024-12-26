import { API_URL, apiErrorResponse } from "./constants";
import { apiSuccessResponse } from "./constants";
import { ApiResponse } from "./types";

async function json<T>(
  input: RequestInfo | URL,
  init?: RequestInit,
  api_url?: string,
): Promise<ApiResponse<T>> {
  if (!API_URL) throw new Error("Provide API_URL");
  let response: ApiResponse<T> | null = null;

  let url = `${API_URL}/${input}`;

  const requestInit: RequestInit = {
    ...init,
    headers: {
      ...(init?.headers || {}),
    },
  };

  try {
    const res = await fetch(api_url || url, requestInit);
    const json = await res.json();

    if (res.status === 200) {
      return apiSuccessResponse({
        ok: true,
        status: res.status,
        result: json,
        response: res,
      });
    } else {
      response = apiErrorResponse({
        error: res.status,
        status: res.status,
      });
    }
  } catch (error: any) {
    response = apiErrorResponse({
      error: error,
    });
  }
  return response as ApiResponse<T>;
}

export const api = {
  json,
};
