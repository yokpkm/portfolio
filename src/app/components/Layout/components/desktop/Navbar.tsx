import React from "react";
import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { ThemeType } from "@/app/constants";
import { animateScroll } from "react-scroll";
import { Image } from "@heroui/react";
import { Row, Col, Button } from "antd";
import { StyledSwitch } from "../../../switch";
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
        <Row justify="space-between" align="middle">
          <Col>
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
            <Row gutter={[64, 0]} align="middle">
              <Col>
                <TextMenu
                  to="about"
                  smooth={true}
                  duration={1500}
                  offset={-160}
                >
                  ABOUT
                </TextMenu>
              </Col>

              <Col>
                <TextMenu
                  to="design"
                  smooth={true}
                  duration={1500}
                  offset={-120}
                >
                  DESIGN
                </TextMenu>
              </Col>
              <Col>
                <TextMenu
                  to="contact"
                  smooth={true}
                  duration={1500}
                  onClick={() => animateScroll.scrollToBottom()}
                >
                  CONTACT
                </TextMenu>
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
  background: ${(props: PropsTheme) => props.theme.layout.filter};
  backdrop-filter: blur(12px);
`;

const StyledNavbar = styled.div`
  margin: 0 auto;
  width: 944px;
`;
