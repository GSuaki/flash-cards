require( "babel-register" )( {
    presets: [
        "env",
        'es2015',
        "stage-0",
        'react'
    ],
    ignore: ['node_modules']
} );

const express = require( 'express' );
const isMobile = require('is-mobile');

const app = express();

app.use(require( "./app/server" ).default);
app.use('/api', require( "./api/server" ).default);

app.use((req, __, next) => {
    req.isMobile = isMobile(req)
    next();
})

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at Promise', p, 'reason:', reason); // eslint-disable-line
});

module.exports = app

app.listen( 9000 );