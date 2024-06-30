import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Modal } from "antd";

export const StyledModal = styled(Modal)<PropsTheme>`
  &&.ant-modal {
    width: 100% !important;
    max-width: 100%;
    top: 40px;
    padding: 0;
  }

  .ant-modal-close {
    position: fixed;
    top: 4px;
    inset-inline-end: 4px;
  }

  .ant-modal-close-x {
    color: ${(props) => props.theme.closeBtn.default};
    font-size: 18px;

    :hover,
    :active,
    :focus {
      color: ${(props) => props.theme.closeBtn.hover};
    }
  }

  .ant-modal-content {
    position: fixed;
    overflow-y: scroll;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.layout.background};
    border-radius: 16px 16px 0px 0px;
  }
`;
