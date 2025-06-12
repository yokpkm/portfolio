import React from "react";
import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { ThemeType } from "@/app/constants";
import { animateScroll } from "react-scroll";
import { Link } from "react-scroll";
import { Row, Col } from "antd";
import { StyledSwitch } from "@/app/components/switch";
import { TextMenu } from "../../../text";
import { MoonFilled } from "@ant-design/icons";

interface Props {
  theme: ThemeType;
  themeToggle: () => void;
}

export const NavbarDesktop: React.FC<Props> = ({ theme, themeToggle }) => {
  return (
    <WrapperNavbar>
      <StyledNavbar>
        <Row justify="end" align="middle" gutter={[48, 0]}>
          <Col>
            <Link to="about" smooth={true} duration={1500} offset={-208}>
              <TextMenu>ABOUT</TextMenu>
            </Link>
          </Col>
          <Col>
            <Link to="portfolio" smooth={true} duration={1500} offset={-144}>
              <TextMenu>PORTFOLIO</TextMenu>
            </Link>
          </Col>
          <Col>
            <Link
              to="contact"
              smooth={true}
              duration={1500}
              onClick={() => animateScroll.scrollToBottom()}
            >
              <TextMenu>CONTACT</TextMenu>
            </Link>
          </Col>
          <Col>
            <StyledSwitch
              onClick={() => themeToggle()}
              checkedChildren={<MoonFilled />}
              unCheckedChildren={<MoonFilled />}
            />
          </Col>
        </Row>
      </StyledNavbar>
    </WrapperNavbar>
  );
};

const WrapperNavbar = styled.div<PropsTheme>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  padding: 0 24px;
  height: 64px;
  align-content: center;
  background: ${(props: PropsTheme) => props.theme.layout.filter};
  backdrop-filter: blur(12px);
`;

const StyledNavbar = styled.div`
  margin: 0 auto;
  width: 864px;
`;
