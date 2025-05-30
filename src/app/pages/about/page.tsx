import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import { Grid, Row, Col } from "antd";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/button";
import {
  TextHeadline,
  TextBody,
  TextCaption,
  TextNumber,
} from "@/app/components/text";

const AboutSection: React.FC = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <>
      <section id="about">
        <Row align="middle">
          <TextNumber>01.</TextNumber>
          <TextHeadline>ABOUT</TextHeadline>
        </Row>
        <Row style={{ marginTop: 4 }}>
          <TextCaption>Yok Premkamon, UX/UI Designer</TextCaption>
        </Row>

        {xs || !sm ? (
          <>
            <Row style={{ marginTop: 24 }}>
              <Col span={24}>
                <TextBody>
                  UX/UI Designer with 5 years of experience in visual design for
                  mobile applications and responsive websites.
                </TextBody>
              </Col>
              <Col span={24} style={{ marginTop: 12 }}>
                <TextBody>
                  I turn complexity into clarity through user-centered
                  solutions: simple, intuitive and empathy-driven.
                </TextBody>
              </Col>
            </Row>

            <Row gutter={[16, 8]} style={{ marginTop: 32 }}>
              <Col xs={12}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  Figma
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  UI Design
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  Design System
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  UX Writing
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  UX Research
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  React Typescript
                </TextCaption>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row style={{ marginTop: 32 }}>
              <Col span={24}>
                <TextBody>
                  UX/UI Designer with 5 years of experience in visual design
                </TextBody>
              </Col>
              <Col span={24}>
                <TextBody>
                  for mobile applications and responsive websites.
                </TextBody>
              </Col>
              <Col span={24}>
                <TextBody style={{ marginTop: 12 }}>
                  I turn complexity into clarity through user-centered
                  solutions:
                </TextBody>
              </Col>
              <Col span={24}>
                <TextBody>simple, intuitive and empathy-driven.</TextBody>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: 40 }}>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  Figma
                </TextCaption>
              </Col>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  UI Design
                </TextCaption>
              </Col>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  Design System
                </TextCaption>
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 8 }}>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  UX Research
                </TextCaption>
              </Col>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  UX Writing
                </TextCaption>
              </Col>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <b
                    style={{
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    •
                  </b>
                  React Typescript
                </TextCaption>
              </Col>
            </Row>
          </>
        )}
        <Row
          gutter={[16, 16]}
          style={xs || !sm ? { marginTop: 40 } : { marginTop: 48 }}
        >
          <Col>
            <a href="/Resume-Premkamon-UXUI.pdf" target="_blank">
              <ButtonPrimary>View my resume</ButtonPrimary>
            </a>
          </Col>
          <Col>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={() => animateScroll.scrollToBottom()}
            >
              <ButtonSecondary>Get in touch</ButtonSecondary>
            </Link>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AboutSection;
