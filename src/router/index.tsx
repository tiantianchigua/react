import React from "react";
import { lazyElement } from "../utils/reactDom";
import type { RouterItem } from "../types/router";

const Home: React.FC = React.lazy(() => import("../views/Home"));
const Login: React.FC = React.lazy(() => import("../views/Login"));
const Error: React.FC = React.lazy(() => import("../views/Error"));

const viewRouterList: RouterItem[] = [
  {
    name: "default",
    routeProps: {
      path: "/",
      element: lazyElement(<Home />),
    },
  },
  {
    name: "home1",
    routeProps: {
      path: "/home/*",
      element: lazyElement(<Home />),
    },
  },
  {
    name: "login",
    routeProps: {
      path: "/login",
      element: lazyElement(<Login />),
    },
  },
  {
    name: "other",
    routeProps: {
      path: "/*",
      element: lazyElement(<Error />),
    },
  },
];

export default viewRouterList;

// // 懒加载
// let Home = React.lazy(() => import("../views/Home"));
// let Login = React.lazy(() => import("../views/Login"));
// let Error = React.lazy(() => import("../views/Error"));

// export default function RouterView() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={lazyElement(<Home />)}></Route>
//         <Route path="/home/*" element={lazyElement(<Home />)}></Route>
//         <Route path="/login" element={lazyElement(<Login />)}></Route>
//         <Route path="/*" element={lazyElement(<Error />)}></Route>
//       </Routes>
//     </Router>
//   );
// }
