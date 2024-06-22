import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Divider } from "antd";

export const DividerMenu = styled(Divider)<PropsTheme>`
  margin: 32px 0px !important;

  &&.ant-divider {
    border-top: 0.5px solid ${(props) => props.theme.layout.divider};
  }
`;

export const DividerCard = styled(Divider)<PropsTheme>`
  margin: 32px 0px 24px 0px !important;

  &&.ant-divider {
    border-top: 0.5px solid ${(props) => props.theme.layout.divider};
  }
`;

export const DividerSection = styled(Divider)<PropsTheme>`
  margin: 4px 0px !important;

  &&.ant-divider-horizontal.ant-divider-with-text {
    border-top-color: ${(props) => props.theme.layout.divider};
  }
`;
