import styled from "styled-components";
import { PropsTheme } from "@/theme";
import { Card } from "antd";

export const StyledCard = styled(Card)<PropsTheme>`
  &&.ant-card {
    background: ${(props) => props.theme.backgroundColors.card};
    border-radius: 16px !important;
    box-shadow: ${(props) => props.theme.cardShadow.default};
  }

  &&.ant-card-bordered {
    border: 0px solid ${(props) => props.theme.backgroundColors.card};
  }

  &&.ant-card-body {
    padding: 32px 24px 24px 24px;
  }
`;
