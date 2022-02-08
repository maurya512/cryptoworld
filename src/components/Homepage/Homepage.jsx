// ! import dependencies
import React from "react";
// * package that helps with large numbers
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../../services/cryptoApi";

// * destructuring Title from Typography instead of Typography.Title
const { Title } = Typography;
const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery();

  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/* * will take 12 spaces out of 24 spaces, so will fill up half the screen */}
        <Col span={12}>
          {/* * eventually will display real data from the api */}
          <Statistic title="Total Cryptocurrencies" value="5" />
          <Statistic title="Total Market Cap" value="5" />
          <Statistic title="Total Markets" value="5" />
          <Statistic title="Total Exchanges" value="5" />
          <Statistic title="Total 24h Vol" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
