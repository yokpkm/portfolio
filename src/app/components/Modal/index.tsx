import styled from "styled-components";
import { PropsTheme } from "@/theme";
import { Modal } from "antd";

export const StyledModal = styled(Modal)<PropsTheme>`
  &.ant-modal {
    max-width: 100%;
    margin: 0;
    padding-bottom: 0;
    top: 32px;
    position: fixed;
  }

  .ant-modal-body {
    padding: 48px 0px;
  }

  .ant-modal-close {
    /* position: fixed;
    top: auto; */

    /* top: auto; */
    position: fixed;
    background-color: unset;
    /* margin: 48px 48px; */
  }

  .ant-modal-close-x {
    font-size: 20px;
    color: ${(props) => props.theme.closeColor.default};
    /* position: absolute; */

    :hover,
    :focus,
    :active {
      color: ${(props) => props.theme.closeColor.hover};
    }
  }

  .ant-modal-content {
    position: fixed;
    height: 100%;
    overflow-y: scroll;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background-color: ${(props) => props.theme.backgroundColors.default};
  }

  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
