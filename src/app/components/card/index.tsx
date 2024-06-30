import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Card } from "antd";

export const StyledCard = styled(Card)<PropsTheme>`
  &&.ant-card {
    padding: 16px 16px 24px 16px !important;
    background: unset;
    border: 1.3px solid transparent;
    border-radius: 16px !important;
    box-shadow: unset;
    opacity: 0.95;
  }

  &&.ant-card:hover {
    background: unset;
    border: 1.3px solid ${(props) => props.theme.card.border} !important;
    opacity: 1;
  }

  &&.ant-card .ant-card-body {
    padding: 0px;
  }
`;
