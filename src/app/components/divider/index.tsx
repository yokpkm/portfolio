import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Divider } from "antd";

export const DividerSection = styled(Divider)<PropsTheme>`
  &&.ant-divider-horizontal.ant-divider-with-text {
    border: ${(props) => props.theme.layout.divider};
    margin: 6px 0px;
  }
`;

export const DividerMenu = styled(Divider)<PropsTheme>`
  &&.ant-divider {
    border-top: 1px solid ${(props) => props.theme.layout.divider};
    margin: 32px 0px !important;
  }
`;
