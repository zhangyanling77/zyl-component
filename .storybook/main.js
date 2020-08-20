module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    { name: "@storybook/addon-docs", options: { configureJSX: true } },
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "@storybook/addon-controls"
  ],
  "webpackFinal": async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader")
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes("node_modules");
              }
              return true;
            }
          }
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx", '.d.ts');
    return config;
  }
}