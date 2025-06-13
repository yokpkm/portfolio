import React, { useState } from "react";
import styled from "styled-components";
import { PropsTheme } from "@/app/theme";
import { ThemeType } from "@/app/constants";
import { Image } from "@heroui/react";
import { Link } from "react-scroll";
import { Row, Col, Button } from "antd";
import { ButtonIcon } from "../../../Button";
import { DividerMenu } from "../../../divider";
import { StyledDrawer } from "../../../drawer";
import { StyledSwitch } from "../../../Switch";
import { TextMenu } from "../../../Text";
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
        <Row justify="end" align="middle">
          <Col style={{ paddingRight: 8, paddingLeft: 40 }}>
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
                    src="/icon/ic-menu-lightTheme.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="/icon/ic-menu-darkTheme.svg"
                    alt=""
                    width={24}
                    height={24}
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
        height="auto"
      >
        <Row justify="center">
          <Link
            to="about"
            smooth={true}
            duration={1500}
            offset={-144}
            onClick={() => setOpenMenu(false)}
          >
            <TextMenu>ABOUT</TextMenu>
          </Link>
        </Row>
        <Row justify="center" style={{ marginTop: 40 }}>
          <Link
            to="portfolio"
            smooth={true}
            duration={1500}
            offset={-112}
            onClick={() => setOpenMenu(false)}
          >
            <TextMenu>PORTFOLIO</TextMenu>
          </Link>
        </Row>
        <Row justify="center" style={{ marginTop: 40 }}>
          <Link
            to="contact"
            smooth={true}
            duration={1500}
            offset={0}
            onClick={() => setOpenMenu(false)}
          >
            <TextMenu>CONTACT</TextMenu>
          </Link>
        </Row>
        <Row justify="center" style={{ marginTop: 40 }}>
          <a href="/Resume-Premkamon-UXUI.pdf" target="_blank" rel="noreferrer">
            <TextMenu>RESUME</TextMenu>
          </a>
        </Row>
        <DividerMenu />
        <Row
          justify="center"
          align="middle"
          gutter={[16, 16]}
          style={{ marginTop: 8 }}
        >
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
  padding: 0px 24px;
  height: 56px;
  align-content: center;
  background: ${(props: PropsTheme) => props.theme.layout.filter};
  backdrop-filter: blur(12px);
`;
