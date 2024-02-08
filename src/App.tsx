import React, { Suspense, FC } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routerList from "./pages";
export interface ModuleProps {
  name: string;
  routeProps: { path: string; element: React.ReactElement };
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routerList.map((m: ModuleProps) => {
          return (
            <Route
              path={m.routeProps.path}
              element={m.routeProps.element}
              key={m.name}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {routerList.map((m: ModuleProps) => {
//           return (
//             <Route
//               path={m.routeProps.path}
//               element={m.routeProps.element}
//               key={m.name}
//             />
//           );
//         })}
//       </Routes>
//     </BrowserRouter>
//   );
// };
export default App;
