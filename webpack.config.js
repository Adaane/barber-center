const path = require('path'); //module qui permet de ne pas ecrire le path en entier

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "js/site.js",
        path: path.resolve( __dirname ,'public')
    },
    mode: "development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }

}