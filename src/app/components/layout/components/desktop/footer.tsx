import React from "react";
import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { Row, Col } from "antd";
import { TextCaption } from "../../../typography";

export const FooterDesktop: React.FC = () => {
  return (
    <WrapperFooter>
      <StyledFooter>
        <Row justify="center" align="middle">
          <Col>
            <TextCaption>
              Made with Next.js + Figma. © 2025 Yok Premkamon
            </TextCaption>
          </Col>
        </Row>
      </StyledFooter>
    </WrapperFooter>
  );
};

const WrapperFooter = styled.div<PropsTheme>`
  right: 0;
  left: 0;
  bottom: 0;
  padding: 0 24px;
  height: 80px;
  align-content: center;
  background: ${(props: PropsTheme) => props.theme.layout.filter};
  backdrop-filter: blur(12px);
`;

const StyledFooter = styled.div`
  margin: 0 auto;
  width: 864px;
`;
