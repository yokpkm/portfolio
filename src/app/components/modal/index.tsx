import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Modal } from "antd";

export const StyledModal = styled(Modal)<PropsTheme>`
  &&.ant-modal {
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100vw !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-modal-close {
    position: relative;
    top: 4px;

    // inset-inline-end: 4px;
  }

  .ant-modal-close-x {
    opacity: 0.8;
  }

  .ant-modal-close-x:hover {
    opacity: 1;
  }

  .ant-modal-content {
    position: relative;
    overflow-y: auto;
    padding: 0 24px;
    width: 100vw !important;
    height: 100%;
    max-height: 100vh;
    background-color: ${(props) => props.theme.layout.background};
    border-radius: 24px 24px 0px 0px;
  }
`;
