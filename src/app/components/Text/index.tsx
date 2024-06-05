import styled from "styled-components";
import { PropsTheme } from "@/theme";
import { Typography } from "antd";

export const TextHeader = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.fontSize.header};
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.fontColor.default};
  margin-bottom: 0;
`;

export const TextTitle = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.fontSize.title};
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.fontColor.default};
  margin-bottom: 0;
`;

export const TextMenu = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.fontSize.menu};
  font-weight: 400;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.fontColor.default};
  margin-bottom: 0;

  &&.ant-typography:hover,
  .ant-typography:active,
  .ant-typography:focus {
    color: ${(props) => props.theme.fontColor.link};
    cursor: pointer;
  }
`;

export const TextLink = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.fontSize.body};
  font-weight: 400;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.fontColor.medium};
  margin-bottom: 0;

  &&.ant-typography:hover,
  .ant-typography:active,
  .ant-typography:focus {
    color: ${(props) => props.theme.fontColor.link};
    cursor: pointer;
  }
`;

export const TextBody = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.fontSize.body};
  font-weight: 400;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.fontColor.medium};
  margin-bottom: 0;
`;

export const TextContent = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.fontSize.content};
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 22px;
  color: ${(props) => props.theme.fontColor.medium};
  margin-bottom: 0;
`;

export const TextDescription = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.fontSize.description};
  font-weight: 400;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.fontColor.medium};
  margin-bottom: 0;
`;

export const TextModal = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.fontSize.menu};
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 26px;
  color: ${(props) => props.theme.fontColor.medium};
  margin-bottom: 0;
`;
