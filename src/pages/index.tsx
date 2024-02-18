import React from "react";

type lazyReType = React.LazyExoticComponent<React.FC<{}>>;

export interface RouterItem {
  name: string;
  routeProps: { path: string; element: React.ReactElement };
}

const Home: React.FC = React.lazy(() => import("./home"));

const Login: React.FC = React.lazy(() => import("./login"));

const Users: React.FC = React.lazy(() => import("./users"));

const routerList: RouterItem[] = [
  {
    name: "home",
    routeProps: {
      path: "/home",
      element: <Home />,
    },
  },
  {
    name: "user",
    routeProps: {
      path: "/home/user",
      element: <Users />,
    },
  },
  {
    name: "login",
    routeProps: {
      path: "/login",
      element: <Login />,
    },
  },
];

export default routerList;
