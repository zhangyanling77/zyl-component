import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import { Modal, ModalProps } from "../index";

const ModalTester = (props: ModalProps) => {
  const defaultVisible = props?.visible || false
  const [visible, setVisible] = useState(defaultVisible); 
  return (
    <Modal
      {...props}
      parentSetState={setVisible}
      visible={visible}
    />
  )
}

describe("test Modal component", () => {
  it('render correctly', () => {
    const wrapper = render(
      <ModalTester parentSetState={() => {}} visible />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('onCancel should be called', () => {
    const onCancel = jest.fn();
    const wrapper = render(
      <ModalTester
        parentSetState={() => {}}
        visible
        onCancel={onCancel}
        cancelText="Cancel"
      />
    );
    const ele = wrapper.getByText("Cancel");

    fireEvent.click(ele);
    expect(onCancel).toHaveBeenCalled();
  });

  it('onOk should be called', () => {
    const onOk = jest.fn();
    const wrapper = render(
      <ModalTester
        parentSetState={() => {}}
        visible
        onOk={onOk}
        okText="Cancel"
      />
    );
    const ele = wrapper.getByText("Cancel");

    fireEvent.click(ele);
    expect(onOk).toHaveBeenCalled();
  });
})