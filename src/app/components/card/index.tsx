import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Card } from "antd";

export const StyledCard = styled(Card)<PropsTheme>`
  &&.ant-card {
    padding: 12px 12px 24px 12px !important;
    background: unset;
    border: 2px solid transparent;
    border-radius: 24px !important;
    box-shadow: unset;
    opacity: 1;
  }

  &&.ant-card:hover {
    background: unset;
    border: 2px solid ${(props) => props.theme.tag.background} !important;
    opacity: 1;
  }

  &&.ant-card .ant-card-body {
    padding: 0 4px;
  }
`;
