import { postsSelectors } from "./posts"; // Adjust the import path accordingly
import { defaultData, UsePostsStoreProps } from "../store/posts"; // Adjust the import path

describe("postsSelectors", () => {
  const mockState: UsePostsStoreProps = {
    loading: "init",
    setLoading: jest.fn(),
    params: defaultData.params,
    setParams: jest.fn(),
    posts: [],
    setPosts: jest.fn(),
    mutatePosts: jest.fn(),
    loadMorePosts: jest.fn(),
    getPosts: jest.fn(),
    meta: defaultData.meta,
    reset: jest.fn(),
  };

  it("selects loading correctly", () => {
    const loading = postsSelectors.selectLoading(mockState);
    expect(loading).toBe(mockState.loading);
  });

  it("selects setLoading correctly", () => {
    const setLoading = postsSelectors.selectSetLoading(mockState);
    expect(setLoading).toBe(mockState.setLoading);
  });

  it("selects params correctly", () => {
    const params = postsSelectors.selectParams(mockState);
    expect(params).toEqual(mockState.params);
  });

  it("selects setParams correctly", () => {
    const setParams = postsSelectors.selectSetParams(mockState);
    expect(setParams).toBe(mockState.setParams);
  });

  it("selects posts correctly", () => {
    const posts = postsSelectors.selectPosts(mockState);
    expect(posts).toEqual(mockState.posts);
  });

  it("selects setPosts correctly", () => {
    const setPosts = postsSelectors.selectSetPosts(mockState);
    expect(setPosts).toBe(mockState.setPosts);
  });

  it("selects mutatePosts correctly", () => {
    const mutatePosts = postsSelectors.selectMutatePosts(mockState);
    expect(mutatePosts).toBe(mockState.mutatePosts);
  });

  it("selects loadMorePosts correctly", () => {
    const loadMorePosts = postsSelectors.selectLoadMorePosts(mockState);
    expect(loadMorePosts).toBe(mockState.loadMorePosts);
  });

  it("selects getPosts correctly", () => {
    const getPosts = postsSelectors.selectGetPosts(mockState);
    expect(getPosts).toBe(mockState.getPosts);
  });

  it("selects meta correctly", () => {
    const meta = postsSelectors.selectMeta(mockState);
    expect(meta).toEqual(mockState.meta);
  });

  it("selects reset correctly", () => {
    const reset = postsSelectors.selectReset(mockState);
    expect(reset).toBe(mockState.reset);
  });
});
