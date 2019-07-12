import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
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