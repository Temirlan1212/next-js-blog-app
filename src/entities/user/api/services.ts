import { api } from "@/shared/lib/api";
import { API_END_POINTS } from "@/shared/lib/end-points";
import { userMappers } from "../lib/mappers";
import { GetUserParams } from "@/shared/lib/end-points/user";
import { User } from "../types";

export type GetPostReturnType = {
  user: User;
  error: Error | null;
};

async function getUser(params: GetUserParams): Promise<GetPostReturnType> {
  const res = await api.json<User>(API_END_POINTS.user.getUser(params));

  if (res.ok) {
    const user = res.result;
    return { user: userMappers.mapUser(user), error: null };
  } else return { user: userMappers.mapUser({}), error: res.error };
}

const userServices = { getUser };

export { userServices };
