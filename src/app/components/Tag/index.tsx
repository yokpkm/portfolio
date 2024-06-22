import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Tag } from "antd";

export const StyledTag = styled(Tag)<PropsTheme>`
  background: transparent;
  border: 1px solid ${(props) => props.theme.secondaryBtn.default};
  border-radius: 4px;
  color: ${(props) => props.theme.textColor.primary};
  font-size: ${(props) => props.theme.textSize.caption};
  font-weight: 400;
  margin-right: 0;
`;
