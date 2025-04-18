import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Divider } from "antd";

export const DividerSection = styled(Divider)<PropsTheme>`
  &&.ant-divider-horizontal.ant-divider-with-text {
    margin: 0px 0px 4px 0;
  }

  &&.ant-divider-horizontal.ant-divider-with-text::before,
  &&.ant-divider-horizontal.ant-divider-with-text::after {
    border-top: 0.5px solid ${(props) => props.theme.layout.divider} !important;
  }
`;

export const DividerMenu = styled(Divider)<PropsTheme>`
  &&.ant-divider {
    border-top: 0.5px solid ${(props) => props.theme.layout.divider};
    margin: 32px 0px !important;
  }
`;
