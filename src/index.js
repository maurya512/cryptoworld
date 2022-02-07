// ! starting point of any react application 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';

// * hooks the app component onto the div root
ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
