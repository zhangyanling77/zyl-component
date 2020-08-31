import React from "react";
import { render } from "@testing-library/react";
import { Upload } from "../index";

describe("test Upload component", () => {
  it('render correctly', () => {
    const wrapper = render(
      <Upload />
    );
    expect(wrapper).toMatchSnapshot();
  });
})