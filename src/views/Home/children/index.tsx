import React from "react";
import { lazyElement } from "../../../utils/reactDom";
import type { RouterItem } from "../../../types/router";

const Page1: React.FC = React.lazy(() => import("./page_1"));
const Page2: React.FC = React.lazy(() => import("./page_2"));

const homeRouterList: RouterItem[] = [
  {
    name: "page1",
    routeProps: {
      path: "/page1",
      element: lazyElement(<Page1 />),
    },
  },
  {
    name: "page2",
    routeProps: {
      path: "/page2",
      element: lazyElement(<Page2 />),
    },
  },
  {
    name: "default",
    routeProps: {
      path: "/*",
      element: lazyElement(<Page1 />),
    },
  },
];

export default homeRouterList;
