// ! starting point of any react application 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

// * hooks the app component onto the div root
ReactDOM.render(
    <Router>
        <Provider store={store}>
            {/* ! makes sure all the components inside of the app component has access to the store */}
            <App />
        </Provider>
    </Router>, document.getElementById('root'));
