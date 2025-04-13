import React from "react";
import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { ThemeType } from "@/app/constants";
import { Link } from "react-scroll";
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
      <Row justify="center" align="middle">
        <Col flex="auto">
          <Button
            icon={
              theme === ThemeType.LIGHT ? (
                <Image
                  width={42}
                  height={42}
                  src="/logo/logo-lightTheme.svg"
                  alt="false"
                />
              ) : (
                <Image
                  width={42}
                  height={42}
                  src="/logo/logo-darkTheme.svg"
                  alt="false"
                />
              )
            }
            type="link"
            style={{ height: 42 }}
            onClick={() => animateScroll.scrollToTop()}
          />
        </Col>
        <Col>
          <Row gutter={[40, 0]} align="middle">
            <Col>
              <Link to="about" smooth={true} duration={1000} offset={-160}>
                <TextMenu>ABOUT</TextMenu>
              </Link>
            </Col>
            <Col>
              <Link to="design" smooth={true} duration={1000} offset={-160}>
                <TextMenu>DESIGN</TextMenu>
              </Link>
            </Col>
            <Col>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                onClick={() => animateScroll.scrollToBottom}
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
        </Col>
      </Row>
    </WrapperNavbar>
  );
};

const WrapperNavbar = styled.div<PropsTheme>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  padding: 8px 96px;
  background-color: ${(props: PropsTheme) => props.theme.layout.background};
  opacity: 0.95;
`;
