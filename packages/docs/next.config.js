const compose = require("compose-function");
const { withDokz } = require("dokz/dist/plugin");
const withImages = require("next-images");

const composed = compose(withDokz);

module.exports = composed({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  basePath: "/docs",
  poweredByHeader: false,
  trailingSlash: true,

  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/testing": { page: "/testing" },
    };
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    return config;
  },
});
