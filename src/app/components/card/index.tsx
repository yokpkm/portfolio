import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Card } from "antd";

export const StyledCard = styled(Card)<PropsTheme>`
  &&.ant-card {
    background: unset;
    border: 1px solid transparent;
    border-radius: 16px !important;
    box-shadow: unset;
  }

  &&.ant-card:hover {
    img {
      opacity: 0.8;
    }
  }

  &&.ant-card .ant-card-body {
    // padding: 0 4px;
  }
`;
