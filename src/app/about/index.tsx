import { Grid, Row, Col } from "antd";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import { TextHeadline, TextBody, TextCaption } from "../components/Typography";

const About = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm } = useBreakpoint();

  return (
    <>
      <section id="about">
        <Row align="middle">
          <TextHeadline>ABOUT</TextHeadline>
        </Row>
        <Row style={{ marginTop: 4 }}>
          <TextCaption>
            Hello, I&apos;m <b style={{ fontWeight: 600 }}>Yok Premkamon</b> –
            UX/UI Designer
          </TextCaption>
        </Row>

        {xs || !sm ? (
          <>
            <Row style={{ marginTop: 24 }}>
              <Col span={24}>
                <TextBody>
                  UX/UI Designer with 4+ years of experience in visual design
                  for mobile applications and responsive websites.
                </TextBody>
              </Col>
              <Col span={24} style={{ marginTop: 12 }}>
                <TextBody>
                  I turn complexity into clarity through human-centered
                  solutions with empathy, intuition, and simple design.
                </TextBody>
              </Col>
            </Row>

            {/* skills */}
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
                  Design Thinking
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
                  TypeScript
                </TextCaption>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row style={{ marginTop: 32 }}>
              <Col span={24}>
                <TextBody>
                  UX/UI Designer with 4+ years of experience in visual design
                </TextBody>
              </Col>
              <Col span={24}>
                <TextBody>
                  for mobile applications and responsive websites.
                </TextBody>
              </Col>
              <Col span={24}>
                <TextBody style={{ marginTop: 12 }}>
                  I turn complexity into clarity through human-centered
                  solutions
                </TextBody>
              </Col>
              <Col span={24}>
                <TextBody>with empathy, intuition, and simple design.</TextBody>
              </Col>
            </Row>

            {/* skills */}
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
                  Design Thinking
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
                  TypeScript
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
            <a
              href="/Resume-Premkamon-UXUI.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonPrimary>View my resume</ButtonPrimary>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"mailto:premkamon.work@gmail.com"}
              rel="noreferrer"
            >
              <ButtonSecondary>Get in touch</ButtonSecondary>
            </a>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default About;
