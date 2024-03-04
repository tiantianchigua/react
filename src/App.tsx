import React from "react";
import "./App.css";
import RouterList from "./views";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <RouterList></RouterList>
      </Router>
    </div>
  );
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#4096ff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#fff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#0958d9",
  // backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#1677ff",
  backgroundColor: "#fff",
  // backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#fff",
  // backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
  height: "100vh",
};

export default App;
