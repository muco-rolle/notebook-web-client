const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

/* eslint-disable */
const withLess = require("@zeit/next-less");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
    fs.readFileSync(
        path.resolve(__dirname, "./public/assets/antd-custom.less"),
        "utf8"
    )
);

const nextConfig = withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...config.externals];
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === "function") {
                        origExternals[0](context, request, callback);
                    } else {
                        callback();
                    }
                },
                ...(typeof origExternals[0] === "function"
                    ? []
                    : origExternals),
            ];

            config.module.rules.unshift({
                test: antStyles,
                use: "null-loader",
            });
        }
        return config;
    },
});

module.exports = withBundleAnalyzer(nextConfig);
