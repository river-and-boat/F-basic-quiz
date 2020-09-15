import { getUserInfo } from "../js/userInfo";
import { getEducationInfo } from "../js/educationInfo";

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ data: "success" }),
  })
);

const userId = 1;

describe("request to backpoint", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("test get userInfo to be successful", async () => {
    const result = getUserInfo(userId);
    expect(fetch).toBeCalledTimes(1);
    await expect(result).resolves.toEqual({ data: "success" });
  });

  test("test get education info to be successful", async () => {
    const result = getEducationInfo(userId);
    expect(fetch).toBeCalledTimes(1);
    await expect(result).resolves.toEqual({ data: "success" });
  });
});
