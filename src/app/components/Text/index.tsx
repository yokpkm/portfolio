import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Typography } from "antd";

// section name
export const TextHeadline = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.headline};
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.textColor.primary};
  margin-bottom: 0;
`;

// menu
export const TextMenu = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.caption};
  font-weight: 500;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.textColor.primary};
  margin-bottom: 0;

  &&.ant-typography:hover,
  .ant-typography:active,
  .ant-typography:focus {
    color: ${(props) => props.theme.textColor.link};
    cursor: pointer;
  }
`;

// default of body
export const TextBody = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.body};
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 22px;
  color: ${(props) => props.theme.textColor.secondary};
  margin-bottom: 0;
`;

// default of caption
export const TextCaption = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.caption};
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.textColor.secondary};
  margin-bottom: 0;
`;

// card title
export const TextHeading = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.caption};
  font-weight: 700;
  letter-spacing: 0.05em;
  /* line-height: 22px; */
  color: ${(props) => props.theme.textColor.primary};
  margin-bottom: 0;
`;

// card content
export const TextCard = styled(Typography)<PropsTheme>`
  overflow: hidden;
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${(props) => props.theme.textSize.caption};
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.textColor.secondary};
  margin-bottom: 0;
`;

// modal title
export const TextTitle = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.body};
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.textColor.primary};
  margin-bottom: 0;
`;

// modal content
export const TextModal = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.body};
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 26px;
  color: ${(props) => props.theme.textColor.secondary};
  margin-bottom: 0;
`;

// text for link (none use)
export const TextLink = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.body};
  font-weight: 400;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.textColor.link};
  margin-bottom: 0;

  &&.ant-typography:hover,
  .ant-typography:active,
  .ant-typography:focus {
    color: ${(props) => props.theme.textColor.link};
    cursor: pointer;
  }
`;
