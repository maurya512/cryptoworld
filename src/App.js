// ! import dependencies
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, Menu } from 'antd';

// ! import components from another file
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'

// ! import style files 
import './App.css';

const App = () => {
    return <div className='app'>
        {/* * navbar div */}
        <div className='navbar'>
            <Navbar />
        </div>
        {/* * main content div */}
        <div className='main'>
            <Layout>
                <div className="routes">
                    {/* * routes component looks through all of the child routes and displays the first one whose path matches exactly with url passed */}
                    <Routes>
                        <Route exact path="/" element={< Homepage />} />
                        <Route exact path="/exchanges" element={<Exchanges />} />
                        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route exact path="/crypto/:id" element={< CryptoDetails />} />
                        <Route exact path="/news" element={< News />} />
                    </Routes>
                </div>
            </Layout>
            {/* * footer div */}
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                    CryptoWorld <br />
                    All rights reserved
                </Typography.Title>
                <Space >
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        </div>
    </div>;
};

export default App;
