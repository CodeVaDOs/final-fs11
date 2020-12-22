// const path = require("path");
// const { override, addLessLoader, addWebpackAlias } = require("customize-cra");
//
// module.exports = (config, env) => {
//   config.module.rules.push({
//     exclude: /node_modules/,
//     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//     use: [
//       {
//         loader: "babel-loader",
//       },
//       {
//         loader: "@svgr/webpack",
//         options: {
//           babel: false,
//           icon: true,
//         },
//       },
//     ],
//   });
//
//   return override(
//     addWebpackAlias({
//       "@": path.resolve(__dirname, "./src"),
//       "@components": path.resolve(__dirname, "./src/components"),
//       "@pages": path.resolve(__dirname, "./src/pages"),
//       "@utils": path.resolve(__dirname, "./src/utils"),
//       "@hooks": path.resolve(__dirname, "./src/hooks"),
//       "@containers": path.resolve(__dirname, "./src/containers"),
//       "@redux": path.resolve(__dirname, "./src/redux"),
//       "@layout": path.resolve(__dirname, "./src/layout"),
//       "@assert": path.resolve(__dirname, "./src/assert"),
//     }),
//     addLessLoader({
//       lessOptions: {
//         modules: true,
//         javascriptEnabled: true,
//       },
//     })
//   )(config, env);
// };
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@components': 'src/components',
    '@redux': 'src/redux',
    '@assert': 'src/assert',
    '@containers': 'src/containers',
    '@layout': 'src/layout',
    '@hooks': 'src/hooks',
    '@pages': 'src/pages',
    '@services': 'src/services',
    '@utils': 'src/utils',
  })(config);

  return config;
};