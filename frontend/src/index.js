import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import FavIcon from 'react-favicon';
import store from './store';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

ReactDOM.render(
    <Provider store={store}>
        <FavIcon url="https://raw.githubusercontent.com/sompodsign/vocup-vocabolary-booster/main/frontend/public/favicon.png" />
        <App/>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
