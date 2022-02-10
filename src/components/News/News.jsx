import React, { useState } from "react";
// ! import from ant design
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

// import { Text, Title } from Typography
// ! importing the query to search and display news from the api
import { useGetCryptoNewsQuery } from "../../services/newsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

import demoImage from "../../images/cryptocurrency.png";

// import { Option } from Select;

const News = ({ simplified }) => {
  // ! state for news category
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);

  // * looping over the news
  if (!cryptoNews?.value) return "Loading....";
  return (
    <div>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a news category"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase() >= 0)
              }
            >
              <Select.Option value="Cryptocurrency">
                Cryptocurrency
              </Select.Option>
              {data?.data?.coins.map((coin) => (
                <Select.Option value={coin.name}>{coin.name}</Select.Option>
              ))}
            </Select>
          </Col>
        )}
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
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                {/* ! displays the source of the article */}
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                    />
                    <Typography.Text className="provider-name">
                      {news.provider[0]?.name}
                    </Typography.Text>
                  </div>
                </div>
                {/* ! displays the date of news article published */}
                <Typography.Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Typography.Text>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
