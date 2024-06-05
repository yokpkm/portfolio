import styled from "styled-components";
import { PropsTheme } from "../../../theme";
import { Drawer } from "antd";

export const StyledDrawer = styled(Drawer)<PropsTheme>`
  background-color: ${(props) =>
    props.theme.backgroundColors.default} !important;
`;
