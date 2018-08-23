import React from "react";
import createHistory from 'history/createBrowserHistory';

import { hydrate } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import createStore from "../store";
import Layout from "../components/Layout/Layout";

import { AUTHENTICATED } from '../store/actions'
import { AUTH_TOKEN } from '../store/user/actions'

import '../styles/index.scss';

const store = window.store || createStore();
const browserHistory = window.browserHistory || createHistory();

const token = localStorage.getItem(AUTH_TOKEN);

if ( token ) {
  store.dispatch({ type: AUTHENTICATED });
}

hydrate(
    <ReduxProvider store={ store }>
        <Router>
            <Layout />
        </Router>
    </ReduxProvider>, 
    document.getElementById( "app" ) 
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.store || !window.browserHistory) {
        window.browserHistory = browserHistory;
        window.store = store;
    }
}