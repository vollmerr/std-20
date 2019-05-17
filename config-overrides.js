// These are overrides for create-react-app, that react-app-rewired overrides
/* eslint-disable no-param-reassign */

module.exports = {
  webpack: (config, env) => {
    const isEnvProduction = env === 'production';

    // single non-nested file output
    config.output.filename = 'bundle.js';

    // no code splitting
    config.optimization.splitChunks = false;
    config.optimization.runtimeChunk = false;

    // removing the hashing and unnest files
    const oneOfRules = config.module.rules[2].oneOf;
    // fix image files
    oneOfRules[0].options.name = '[name].[ext]';
    // fix other files
    oneOfRules[7].options.name = '[name].[ext]';
    // fix css files
    if (isEnvProduction) {
      config.plugins[5].options.filename = '[name].css';
    }

    return config;
  },
};
