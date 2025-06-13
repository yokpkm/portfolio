import React from "react";
import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Row, Col } from "antd";
import { TextCaption } from "../../../Text";

export const FooterMobile: React.FC = () => {
  return (
    <WrapperFooter>
      <Row justify="center" align="middle">
        <Col>
          <TextCaption>
            Made with Next.js + Figma. © 2025 Yok Premkamon
          </TextCaption>
        </Col>
      </Row>
    </WrapperFooter>
  );
};

const WrapperFooter = styled.div<PropsTheme>`
  right: 0;
  left: 0;
  bottom: 0;
  padding: 0px 24px;
  height: 64px;
  align-content: center;
  background: ${(props: PropsTheme) => props.theme.layout.filter};
  backdrop-filter: blur(12px);
`;
