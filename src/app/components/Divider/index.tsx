import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Divider } from "antd";

export const DividerMenu = styled(Divider)<PropsTheme>`
  &&.ant-divider {
    margin: 40px 0px !important;
    border-top: 0.5px solid ${(props) => props.theme.layout.divider};
  }
`;
