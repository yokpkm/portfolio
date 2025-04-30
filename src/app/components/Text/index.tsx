import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Typography } from "antd";

//  default of headline
export const TextHeadline = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.headline};
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.textColor.primary};
  margin-bottom: 0;
`;

// default of body
export const TextBody = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.body};
  font-weight: 300;
  letter-spacing: 0.035em;
  line-height: 26px;
  color: ${(props) => props.theme.textColor.secondary};
  margin-bottom: 0;
`;

// default of caption
export const TextCaption = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.caption};
  font-weight: 300;
  letter-spacing: 0.035em;
  color: ${(props) => props.theme.textColor.secondary};
  margin-bottom: 0;
`;

// default of label
export const TextLabel = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.label};
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.textColor.highlight};
  margin-bottom: 24px;
`;

// adjust style for menu
export const TextMenu = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.label};
  font-weight: 500;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.textColor.primary};
  margin-bottom: 0;

  &&.ant-typography:hover,
  .ant-typography:active,
  .ant-typography:focus {
    color: ${(props) => props.theme.textColor.tertiary};
    cursor: pointer;
  }
`;

//  adjust style for headline number
export const TextNumber = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.title};
  font-weight: 600;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.textColor.tertiary};
  margin-right: 12px;
  margin-bottom: 0;
`;

// adjust style for card
export const TextCardTitle = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.body};
  font-weight: 700;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.textColor.primary};
  margin-bottom: 0;
`;

export const TextCardContent = styled(Typography)<PropsTheme>`
  overflow: hidden;
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${(props) => props.theme.textSize.caption};
  font-weight: 300;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.textColor.secondary};
  margin-bottom: 0;
`;

// adjust style for modal
export const TextModalTitle = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.title};
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.textColor.primary};
  margin-bottom: 0;
`;

export const TextModalSubtitle = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.caption};
  font-weight: 700;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.textColor.primary};
  margin-bottom: 0;
`;

export const TextModalContent = styled(Typography)<PropsTheme>`
  font-size: ${(props) => props.theme.textSize.body};
  font-weight: 300;
  letter-spacing: 0.035em;
  line-height: 26px;
  color: ${(props) => props.theme.textColor.secondary};
  margin-bottom: 0;
`;
