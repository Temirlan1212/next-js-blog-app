export const getSkeletons = (count: number, skeleton: React.ReactNode) =>
  new Array(count).fill(0).map((item, index) => skeleton);
