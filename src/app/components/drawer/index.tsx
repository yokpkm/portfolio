import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Drawer } from "antd";

export const StyledDrawer = styled(Drawer)<PropsTheme>`
  background-color: ${(props) =>
    props.theme.backgroundColors.default} !important;
`;
