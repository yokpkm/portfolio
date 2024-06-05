import styled from "styled-components";
import { PropsTheme } from "@/theme";
import { Switch } from "antd";

export const StyledSwitch = styled(Switch)<PropsTheme>`
  &&.ant-switch {
    background: ${(props) => props.theme.switchColors.inactive} !important;
    border: 0px solid ${(props) => props.theme.fontColor.link} !important;
  }

  &&.ant-switch:hover {
    background: ${(props) => props.theme.closeColor.default} !important;
    border: 0px solid ${(props) => props.theme.fontColor.link} !important;
  }

  &&.ant-switch-checked {
    background: ${(props) => props.theme.switchColors.active} !important;
    border: 0px solid ${(props) => props.theme.fontColor.link} !important;
  }

  &&.ant-switch-checked:hover {
    background: ${(props) => props.theme.switchColors.active} !important;
    border: 0px solid ${(props) => props.theme.fontColor.link} !important;
  }
`;
