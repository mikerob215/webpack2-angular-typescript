'use strict';

const webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    }
};