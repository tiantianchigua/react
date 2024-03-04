import { Suspense } from "react";

const lazyElement = (value: JSX.Element) => (
  <Suspense fallback={<div>loading...</div>}>{value}</Suspense>
);

export { lazyElement };
