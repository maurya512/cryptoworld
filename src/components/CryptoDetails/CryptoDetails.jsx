// ! import dependencies
import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
// * import text, title and option from typography and select

const CryptoDetails = () => {
  // * displays the currency based on the coin id using useParams
  const { coinId } = useParams();

  // * time period use state
  const [timePeriod, setTimePeriod] = useState("7d");

  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);

  console.log(data);
  return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
