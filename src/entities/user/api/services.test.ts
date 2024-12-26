import { userServices } from "./services"; // Adjust the import according to your file structure
import { api } from "../../../shared/lib/api"; // Import your actual API object
import { userMappers } from "../lib/mappers";

const postMockData = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

jest.mock("../../../shared/lib/api", () => ({
  api: {
    json: jest.fn(),
  },
}));

describe("userServices", () => {
  test("getUser success", async () => {
    const apiMock = api.json as jest.Mock;
    apiMock.mockResolvedValue({
      ok: true,
      status: 200,
      result: postMockData,
      response: null,
    });

    const result = await userServices.getUser({ userId: postMockData.id });

    expect(userServices.getUser);
    expect(result.user).toEqual(postMockData);
    expect(result.error).toBeNull();
  });

  test("getUser error", async () => {
    const apiMock = api.json as jest.Mock;
    apiMock.mockResolvedValue({
      ok: false,
      error: new Error("Failed to fetch post"),
    });

    const result = await userServices.getUser({ userId: postMockData.id });

    expect(result.user).toEqual(userMappers.mapUser({}));
    expect(result.error?.message).toBe("Failed to fetch post");
  });
});
