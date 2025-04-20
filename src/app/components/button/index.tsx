import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Button } from "antd";

export const ButtonPrimary = styled(Button)<PropsTheme>`
  padding: 0px 24px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primaryBtn.default} !important;
  border: unset;
  border-radius: 360px;
  box-shadow: unset;
  font-size: ${(props) => props.theme.textSize.body};
  font-weight: 500;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.primaryBtn.foreground} !important;

  &&.ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    background: ${(props) => props.theme.primaryBtn.hover} !important;
    border: unset;
    color: ${(props) => props.theme.primaryBtn.foreground} !important;
  }
`;

export const ButtonSecondary = styled(Button)<PropsTheme>`
  padding: 0px 24px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: unset !important;
  border: 1.5px solid ${(props) => props.theme.secondaryBtn.default};
  border-radius: 360px;
  box-shadow: unset;
  color: ${(props) => props.theme.secondaryBtn.foreground} !important;
  font-size: ${(props) => props.theme.textSize.body};
  font-weight: 500;
  letter-spacing: 0.05em;

  &&.ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    border: 1.5px solid ${(props) => props.theme.secondaryBtn.hover};
    background: unset !important;
    color: ${(props) => props.theme.secondaryBtn.foreground} !important;
  }
`;

export const ButtonIcon = styled(Button)<PropsTheme>`
  padding: 0;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: auto;
    height: 24px;
    border-radius: 6px;
    color: ${(props) => props.theme.iconBtn.default};
  }

  :hover,
  :active,
  :focus {
    color: ${(props) => props.theme.iconBtn.hover} !important;
  }
`;
