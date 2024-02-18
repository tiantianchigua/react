import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routerList from "./pages";
import { Layout } from "antd";
import SideBar from "./component/common/sideBar";

export interface ModuleProps {
  name: string;
  routeProps: { path: string; element: React.ReactElement };
}

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="20%" style={siderStyle}>
        <SideBar />
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <BrowserRouter>
            <Suspense>
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
            </Suspense>
          </BrowserRouter>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
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
