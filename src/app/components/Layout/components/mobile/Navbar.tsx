import React, { useState } from "react";
import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { ThemeType } from "@/app/constants";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import { Image } from "@nextui-org/image";
import { Row, Col, Button } from "antd";
import { ButtonIcon } from "../../../button";
import { DividerMenu } from "../../../divider";
import { StyledDrawer } from "../../../drawer";
import { StyledSwitch } from "../../../switch";
import { TextMenu } from "../../../text";
import {
  MoonFilled,
  MailFilled,
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
} from "@ant-design/icons";

interface Props {
  theme: ThemeType;
  themeToggle: () => void;
}

export const NavbarMobile: React.FC<Props> = ({ theme, themeToggle }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
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
          <Col style={{ paddingRight: 8, paddingLeft: 8 }}>
            <StyledSwitch
              onClick={() => themeToggle()}
              checkedChildren={<MoonFilled />}
              unCheckedChildren={<MoonFilled />}
            />
          </Col>
          <Col>
            <Button
              icon={
                theme === ThemeType.LIGHT ? (
                  <Image
                    width={24}
                    height={24}
                    src="/icon/ic-menu-lightTheme.svg"
                  />
                ) : (
                  <Image
                    width={24}
                    height={24}
                    src="/icon/ic-menu-darkTheme.svg"
                  />
                )
              }
              type="text"
              onClick={() => setOpenMenu(true)}
            />
          </Col>
        </Row>
      </WrapperNavbar>
      <StyledDrawer
        placement="top"
        open={openMenu}
        closable={false}
        onClose={() => setOpenMenu(false)}
        style={{ height: "auto" }}
      >
        <Row justify="center" style={{ marginBottom: 32 }}>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            offset={-120}
            onClick={() => setOpenMenu(false)}
          >
            <TextMenu>ABOUT</TextMenu>
          </Link>
        </Row>
        <Row justify="center" style={{ marginBottom: 32 }}>
          <Link
            to="design"
            smooth={true}
            duration={1000}
            offset={-120}
            onClick={() => setOpenMenu(false)}
          >
            <TextMenu>DESIGN</TextMenu>
          </Link>
        </Row>
        <Row justify="center">
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={0}
            onClick={() => setOpenMenu(false)}
          >
            <TextMenu>CONTACT</TextMenu>
          </Link>
        </Row>
        <DividerMenu />
        <Row justify="center" gutter={16} align="middle">
          <Col>
            <a
              target={"_blank"}
              href={"mailto:premkamon.work@gmail.com"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <MailFilled />
              </ButtonIcon>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"https://www.linkedin.com/in/yokpkm"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <LinkedinFilled />
              </ButtonIcon>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"https://github.com/yokpkm"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <GithubFilled />
              </ButtonIcon>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"https://www.instagram.com/yokxpkm"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <InstagramFilled />
              </ButtonIcon>
            </a>
          </Col>
        </Row>
      </StyledDrawer>
    </>
  );
};

const WrapperNavbar = styled.div<PropsTheme>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  padding: 8px 16px 8px 16px;
  background-color: ${(props: PropsTheme) => props.theme.layout.background};
  backdrop-filter: blur(6px);
`;
