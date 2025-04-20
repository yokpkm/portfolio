import React from "react";
import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { ThemeType } from "@/app/constants";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import { Image } from "@heroui/react";
import { Row, Col, Button } from "antd";
import { StyledSwitch } from "../../../switch";
import { TextMenuName, TextMenuNumber } from "../../../text";
import { MoonFilled } from "@ant-design/icons";

interface Props {
  theme: ThemeType;
  themeToggle: () => void;
}

export const NavbarDesktop: React.FC<Props> = ({ theme, themeToggle }) => {
  return (
    <WrapperNavbar>
      <StyledNavbar>
        <Row justify="center" align="middle">
          <Col flex="auto">
            <Button
              icon={
                theme === ThemeType.LIGHT ? (
                  <Image
                    width={44}
                    height={44}
                    src="/logo/logo-lightTheme.svg"
                    alt="false"
                  />
                ) : (
                  <Image
                    width={44}
                    height={44}
                    src="/logo/logo-darkTheme.svg"
                    alt="false"
                  />
                )
              }
              type="link"
              style={{ height: 44 }}
              onClick={() => animateScroll.scrollToTop()}
            />
          </Col>
          <Col>
            <Row gutter={[40, 0]} align="middle">
              <Col>
                <Link to="about" smooth={true} duration={1500} offset={-160}>
                  <Row>
                    <Col>
                      <TextMenuNumber>01.</TextMenuNumber>
                    </Col>
                    <Col>
                      <TextMenuName>ABOUT</TextMenuName>
                    </Col>
                  </Row>
                </Link>
              </Col>
              <Col>
                <Link to="design" smooth={true} duration={1500} offset={-120}>
                  <Row>
                    <Col>
                      <TextMenuNumber>02.</TextMenuNumber>
                    </Col>
                    <Col>
                      <TextMenuName>DESIGN</TextMenuName>
                    </Col>
                  </Row>
                </Link>
              </Col>
              <Col>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1500}
                  onClick={() => animateScroll.scrollToBottom}
                >
                  <Row>
                    <Col>
                      <TextMenuNumber>03.</TextMenuNumber>
                    </Col>
                    <Col>
                      <TextMenuName>CONTACT</TextMenuName>
                    </Col>
                  </Row>
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
  background-color: ${(props: PropsTheme) => props.theme.layout.background};
  border-bottom: 0.5px solid
    ${(props: PropsTheme) => props.theme.layout.divider};
`;

const StyledNavbar = styled.div`
  margin: 0 auto;
  width: 920px;
`;
