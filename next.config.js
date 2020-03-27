const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
// module.exports = withLess({
//
// });

module.exports = withLess(
    withCSS({
        lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@text-color': '#34303E',
                '@primary-color': '#2BD1D1',
                '@base-color': '#2BD1D1',
                '@text-color': '#34303E',
                '@font-family-base': 'Poppins, sans-serif',
                '@headings-font-family': 'Noto Serif',
                '@headings-font-weight': 800,
                '@font-size-base': '18px',
                '@font-size-large': '20px',
                '@font-size-small': '16px'
            } // make your antd custom effective
        },
        webpack(config) {
            config.module.rules.push({
                test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        publicPath: './',
                        outputPath: 'static/',
                        name: '[name].[ext]'
                    }
                }
            });

            return config;
        }
    })
);
