import React, { Suspense } from "react";

export interface RouterItem {
  name: string;
  routeProps: { path: string; element: React.ReactElement };
}

const Home: React.FC = React.lazy(() => import("./Home"));

const Login: React.FC = React.lazy(() => import("./Login"));

const Users: React.FC = React.lazy(() => import("./Users"));

const lazyElement = (value: JSX.Element) => (
  <Suspense fallback={<div>loading...</div>}>{value}</Suspense>
);

const routerList: RouterItem[] = [
  {
    name: "home",
    routeProps: {
      path: "/home",
      element: lazyElement(<Home />),
    },
  },
  {
    name: "user",
    routeProps: {
      path: "/home/user",
      element: lazyElement(<Users />),
    },
  },
  {
    name: "login",
    routeProps: {
      path: "/login",
      element: lazyElement(<Login />),
    },
  },
];

export default routerList;
