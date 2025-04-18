import { Grid, Row, Col } from "antd";
import {
  MailFilled,
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { ButtonIcon } from "@/app/components/button";
import { DividerSection } from "@/app/components/divider";
import { TextHeadline, TextBody, TextCaption } from "@/app/components/text";

const ContactSection: React.FC = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <>
      <section id="contact">
        <Row justify="center">
          <Col span={24}>
            <Row
              justify="end"
              style={
                (xs || sm || md) && !lg
                  ? { marginTop: 96, marginBottom: 32 }
                  : { marginTop: 160, marginBottom: 40 }
              }
            >
              <DividerSection orientation="right">
                <TextHeadline>CONTACT 💬</TextHeadline>
              </DividerSection>
              <TextCaption>
                My inbox is always open, feel free to reach out
              </TextCaption>
            </Row>
            <Row justify="end" style={{ marginBottom: 8 }}>
              <TextBody>Find me on</TextBody>
            </Row>
            <Row justify="end" gutter={[16, 16]} align="middle">
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
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ContactSection;
