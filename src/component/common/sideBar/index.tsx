import "./index.less";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import type { GetProp, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = GetProp<MenuProps, "items">[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Login", "/login", <MailOutlined />),
  getItem("Home", "/home", <CalendarOutlined />),
  getItem("About", "sub1", <AppstoreOutlined />, [
    getItem("Submenu", "sub1-2", null, [
      getItem("About", "/about", null),
      getItem("Option 6", "6"),
    ]),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    "link",
    <LinkOutlined />
  ),
];

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.keyPath[0]);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default SideBar;
