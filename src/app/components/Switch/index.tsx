import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Switch } from "antd";

export const StyledSwitch = styled(Switch)<PropsTheme>`
  &&.ant-switch {
    background: ${(props) => props.theme.switch.default} !important;
    border: 0px solid ${(props) => props.theme.switch.default};
  }

  &&.ant-switch:hover {
    background: rgba(0, 0, 0, 0.2) !important;
    border: 0px solid ${(props) => props.theme.switch.default};
  }

  &&.ant-switch-checked {
    background: ${(props) => props.theme.switch.default} !important;
    border: 0px solid ${(props) => props.theme.switch.default};
  }

  &&.ant-switch-checked:hover {
    background: ${(props) => props.theme.switch.default} !important;
    border: 0px solid ${(props) => props.theme.switch.default};
  }
`;
