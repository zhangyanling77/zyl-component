import React from "react";
import { GlobalStyle } from "../src/components/shared/global";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addParameters({
  options: {
    showRoots: true,
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
});

addDecorator(withA11y);

// 自定义目录顺序
const loaderFn = () => {
  return [
    // 目录顺序
    // require("../src/stories/Color.stories.mdx"),
    // require("../src/stories/Typography.stories.mdx"),
  ];
};
configure(loaderFn, module);

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));