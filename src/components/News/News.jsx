import React from "react";
// ! import from ant design
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

// ! importing the query to search and display news from the api
import { useGetCryptoNewsQuery } from "../../services/newsApi";

import { Text, Title } from "antd";
// import { Option } from Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });

  console.log(cryptoNews);
  return <div></div>;
};

export default News;
