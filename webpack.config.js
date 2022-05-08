// Translates moder code to code that any browser can understand
const { VueLoaderPlugin } = require('vue-loader')

module.exports = { // Translate code so VueJs is understood bye server
    entry: './src/app/index.js', // Input file to read
    output: {
        path: __dirname + '/src/views/js/',
        filename: 'bundle.js' // Place here the output
    },
    // Archivos a traducir (de VueJs, de JS)
    module: {
        rules: [
            {
                test: /\.js$/, // Lee todos los archivos que terminen con .js
                exclude: /node_modules/, // Ignora los archivos de esta carpeta
                use: {
                    loader: 'babel-loader' // Los traduce con este loader
                    // options: {
                    //     presets: [
                    //       ['@babel/preset-env', { targets: "defaults" }]
                    //     ]
                    //   }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin() // Required for vue-loader
    ]
}