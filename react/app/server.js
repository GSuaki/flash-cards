import path from "path";
import express, { Router } from "express";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import Helmet from "react-helmet";

import routes from "../app/routes";
import createStore from "../app/store";

import Layout from "../app/components/Layout/Layout";

const router = Router();

router.use( express.static( path.resolve( __dirname, "../dist" ) ) );

router.get( "/*", ( req, res ) => {    
    const context = { };
    const store = createStore( );

    const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) ) // filter matching paths
            .map( route => route.component ) // map to components
            .filter( comp => comp.serverFetch ) // check if components have data requirement
            .map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement

    Promise.all( dataRequirements ).then( ( ) => {
        const jsx = (
            <ReduxProvider store={ store }>
                <StaticRouter context={ context } location={ req.url }>
                    <Layout />
                </StaticRouter>
            </ReduxProvider>
        );

        const reactDom = renderToString( jsx );
        const reduxState = store.getState( );
        const helmetData = Helmet.renderStatic( );

        res.writeHead( 200, { "Content-Type": "text/html" } );
        res.end( htmlTemplate( reactDom, reduxState, helmetData ) );
    } );
} );

function htmlTemplate( reactDom, reduxState, helmetData ) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                ${ helmetData.title.toString( ) }
                ${ helmetData.meta.toString( ) }
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <meta name="description" content="A simple React SSR Starter Kit">
                <meta name="author" content="Gabriel Suaki">
                <link rel="stylesheet" type="text/css" href="style.css">
            </head>
            
            <body>
                <div id="app">${ reactDom }</div>
                <script>
                    window.__PRELOADED_STATE__ = ${ JSON.stringify( reduxState ) }
                    window.process = {
                        env: {
                            NODE_ENV: ${ JSON.stringify(process.env.NODE_ENV) }
                        }
                    }
                </script>
                <script src="./app.bundle.js"></script>
            </body>
        </html>
    `;
}

export default router