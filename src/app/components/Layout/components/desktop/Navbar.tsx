import React, { useState, useEffect } from "react";
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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        // scrolling down and past the navbar height
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <WrapperNavbar visible={visible}>
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
                <Link to="about" smooth={true} duration={1000} offset={-160}>
                  <TextMenu>ABOUT</TextMenu>
                </Link>
              </Col>
              <Col>
                <Link to="design" smooth={true} duration={1000} offset={-120}>
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
      </StyledNavbar>
    </WrapperNavbar>
  );
};

const WrapperNavbar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean } & PropsTheme>`
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
  transition: transform 0.1s ease-in-out;
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(-100%)"};
`;

const StyledNavbar = styled.div`
  margin: 0 auto;
  width: 920px;
`;
