import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Tag } from "antd";

export const StyledTag = styled(Tag)<PropsTheme>`
  background: ${(props) => props.theme.tag.background};
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${(props) => props.theme.tag.foreground};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.03em;
  margin-right: 0;
`;
