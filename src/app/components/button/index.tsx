import styled from "styled-components";
import { PropsTheme } from "../../../theme";
import { Button } from "antd";

export const ButtonPrimary = styled(Button)<PropsTheme>`
  padding: 0px 24px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.buttonColors.background} !important;
  border: 0px solid ${(props) => props.theme.fontColor.link};
  border-radius: 360px;
  box-shadow: unset;
  font-size: ${(props) => props.theme.fontSize.body};
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.buttonColors.font} !important;

  &&.ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    background: ${(props) => props.theme.fontColor.link} !important;
    border: 0px solid ${(props) => props.theme.fontColor.link};
    color: ${(props) => props.theme.buttonColors.font} !important;
  }
`;

export const ButtonSecondary = styled(Button)<PropsTheme>`
  padding: 0px 24px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.backgroundColors.default} !important;
  border: 2px solid ${(props) => props.theme.fontColor.default};
  border-radius: 360px;
  box-shadow: unset;
  color: ${(props) => props.theme.fontColor.default} !important;
  font-size: ${(props) => props.theme.fontSize.body};
  font-weight: 600;
  letter-spacing: 0.08em;

  &&.ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    border: 2px solid ${(props) => props.theme.fontColor.link};
    background: ${(props) => props.theme.backgroundColors.default} !important;
    color: ${(props) => props.theme.fontColor.link} !important;
  }
`;

export const ButtonIcon = styled(Button)<PropsTheme>`
  padding: 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: auto;
    height: 24px;
    border-radius: 6px;
    color: ${(props) => props.theme.fontColor.default};
  }

  :hover,
  :active,
  :focus {
    color: ${(props) => props.theme.fontColor.link} !important;
  }
`;

export const ButtonMore = styled(Button)`
  padding: 0px 20px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.buttonColors.background} !important;
  border: 0px solid ${(props) => props.theme.fontColor.link};
  border-radius: 360px;
  box-shadow: unset;
  font-size: ${(props) => props.theme.fontSize.description};
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.buttonColors.font} !important;

  &&.ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    background: ${(props) => props.theme.fontColor.link} !important;
    border: 0px solid ${(props) => props.theme.fontColor.link};
    color: ${(props) => props.theme.buttonColors.font} !important;
  }
`;
