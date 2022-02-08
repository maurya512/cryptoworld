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
  // * define a state to get access to all the coins
  const { data, isFetching } = useGetCryptosQuery();

  // * assign the stats received from api to a variable
  const globalStats = data?.data?.stats;
  // console.log(data);
  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/* * will take 12 spaces out of 24 spaces, so will fill up half the screen */}
        <Col span={12}>
          {/* * eventually will display real data from the api */}
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
          <Statistic
            title="Total 24h Vol."
            value={millify(globalStats.total24hVolume)}
          />
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
