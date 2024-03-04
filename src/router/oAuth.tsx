import { Navigate } from "react-router-dom";

let RoterFilter: any = (children: any) => {
  if (window.localStorage.getItem("token")) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default RoterFilter;
