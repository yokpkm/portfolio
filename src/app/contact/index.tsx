"use client";

import { Grid, Row, Col } from "antd";
import { ButtonIcon } from "../components/button";
import { TextHeadline, TextBody, TextCaption } from "../components/text";
import {
  MailFilled,
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Contact = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <>
      <section id="contact">
        <Row
          justify="end"
          align="middle"
          style={
            (xs || sm || md) && !lg ? { marginTop: 128 } : { marginTop: 192 }
          }
        >
          <TextHeadline>CONTACT</TextHeadline>
        </Row>
        <Row justify="end" style={{ marginTop: 4 }}>
          <TextCaption>
            My inbox is always open, feel free to reach out
          </TextCaption>
        </Row>

        <Row
          justify="end"
          style={
            (xs || sm || md) && !lg ? { marginTop: 32 } : { marginTop: 40 }
          }
        >
          <TextBody>Find me on</TextBody>
        </Row>
        <Row
          justify="end"
          gutter={[16, 16]}
          align="middle"
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
      </section>
    </>
  );
};

export default Contact;
