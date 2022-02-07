// ! import dependencies
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

// ! import components 
import { Navbar } from './components'


const App = () => {
    return <div className='App'>
        {/* * navbar div */}
        <div className='navbar'>
            <Navbar />
        </div>
        {/* * main content div */}
        <div className='main'>

        </div>
        {/* * footer div */}
    </div>;
};

export default App;
