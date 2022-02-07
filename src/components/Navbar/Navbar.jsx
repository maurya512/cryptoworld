// ! import dependencies
import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BuldOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

// ! images
import icon from "../../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto World</Link>
        </Typography.Title>
        {/* <Button className='menu-control-container'>

          </Button> */}
        <Menu theme="dark">
          <Menu.Item icon={<homeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<fundOutlined />}>
            <Link to="/cryptocurrencies">Crypto Currencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<bulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
