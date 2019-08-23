import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './App.css';

import 'react-quill/dist/quill.snow.css';
import 'antd/es/popover/style/css';
import 'antd/es/tabs/style/css';
import 'antd/es/table/style/css';
import 'antd/es/modal/style/css';
import 'antd/es/message/style/css';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}