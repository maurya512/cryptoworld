import React from "react";
// ! import from ant design
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

// import { Text, Title } from Typography
// ! importing the query to search and display news from the api
import { useGetCryptoNewsQuery } from "../../services/newsApi";

import demoImage from "../../images/cryptocurrency.png";

// import { Option } from Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  });

  // * looping over the news
  if (!cryptoNews?.value) return "Loading....";
  return (
    <div>
      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Typography.Title className="news-title" level={4}>
                    {news.name}
                  </Typography.Title>
                  {/* * image for news */}
                  {/* * display the news' image or a dummy image from folder */}
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
