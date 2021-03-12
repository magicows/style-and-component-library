const withSass = require('@zeit/next-sass')
module.exports = withSass({
  // add custom webpack config
  webpack(config, options) {
    // this rule is to add support for global scss variables
    const globalSass = [
      './styles/_variables.scss',
    ];

    config.module.rules.push({
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: globalSass,
      }
    });

    return config;
  }
});