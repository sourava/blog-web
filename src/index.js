import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './App.css';

import 'react-quill/dist/quill.snow.css';
import 'antd/es/input/style/css';
import 'antd/es/button/style/css';
import 'antd/es/upload/style/css';
import 'antd/es/select/style/css';
import 'antd/es/icon/style/css';
import 'antd/es/popover/style/css';

import 'shared/assets/css/bootstrap.css';
import 'shared/assets/css/color-default.css';
import 'shared/assets/css/fontello.css';
import 'shared/assets/css/owl.carousel.min.css';
import 'shared/assets/css/owl.theme.default.min.css';
import 'shared/assets/css/responsive.css';
import 'shared/assets/css/style.css';
import 'shared/assets/css/widgets.css';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

module.hot.accept();