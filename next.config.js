module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|md)$/,
      use: "raw-loader",
    });
    return config;
  },
};
