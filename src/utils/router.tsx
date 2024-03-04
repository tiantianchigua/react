import { Routes, Route } from "react-router-dom";
import { RouterItem } from "../types/router";

import {} from "react-router-dom";

const getRouterView = (routerList: RouterItem[]): JSX.Element => {
  return (
    <Routes>
      {routerList.map((m: RouterItem) => {
        return (
          <Route
            path={m.routeProps.path}
            element={m.routeProps.element}
            key={m.name}
          />
        );
      })}
    </Routes>
  );
};

export { getRouterView };
