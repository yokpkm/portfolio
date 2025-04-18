import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Modal } from "antd";

export const StyledModal = styled(Modal)<PropsTheme>`
  &&.ant-modal {
    top: 40px;
    padding: 0;
    margin: 0;
    width: 100% !important;
    max-width: 100%;
  }

  .ant-modal-close {
    position: fixed;
    top: 4px;
    inset-inline-end: 4px;
  }

  .ant-modal-close-x {
    opacity: 0.8;
  }

  .ant-modal-close-x:hover {
    opacity: 1;
  }

  .ant-modal-content {
    position: fixed;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: ${(props) => props.theme.layout.background};
    border-radius: 24px 24px 0px 0px;
  }
`;
