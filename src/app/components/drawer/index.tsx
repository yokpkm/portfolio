import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Drawer } from "antd";

export const StyledDrawer = styled(Drawer)<PropsTheme>`
  padding: 8px 0px !important;
  background-color: ${(props) => props.theme.layout.background} !important;
`;
