import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import { Grid, Row, Col } from "antd";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/button";
import { DividerSection } from "@/app/components/divider";
import { TextHeadline, TextBody, TextCaption } from "@/app/components/text";

const AboutSection: React.FC = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md } = useBreakpoint();

  return (
    <>
      <section id="about">
        <Row
          justify="start"
          style={
            (xs || sm) && !md
              ? { marginTop: 0, marginBottom: 32 }
              : { marginTop: 0, marginBottom: 40 }
          }
        >
          <DividerSection orientation="left">
            <TextHeadline>ABOUT</TextHeadline>
          </DividerSection>
          <TextCaption>
            Yok Premkamon, a UX/UI Creative Design Specialist ✨
          </TextCaption>
        </Row>

        <Row justify="start">
          <TextBody>
            I work as a UX/UI designer with experience in UI development for
          </TextBody>
        </Row>
        <Row
          justify="start"
          style={xs || !sm ? { marginTop: 16 } : { marginTop: 6 }}
        >
          <TextBody>
            mobile application and responsive website, I'd like to enhance
          </TextBody>
        </Row>
        <Row
          justify="start"
          style={xs || !sm ? { marginTop: 16 } : { marginTop: 6 }}
        >
          <TextBody>my skills to design outstanding user experiences.</TextBody>
        </Row>

        {xs || !sm ? (
          <>
            <Row justify="start" gutter={[16, 8]} style={{ marginTop: 32 }}>
              <Col xs={12}>
                <TextCaption>
                  <li>Figma</li>
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <li>UI Design</li>
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <li>Design System</li>
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <li>UX Research</li>
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <li>UX Writing</li>
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <li>React Typescript</li>
                </TextCaption>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row justify="start" gutter={16} style={{ marginTop: 40 }}>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <li>Figma</li>
                </TextCaption>
              </Col>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <li>UI Design</li>
                </TextCaption>
              </Col>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <li>Design System</li>
                </TextCaption>
              </Col>
            </Row>
            <Row justify="start" gutter={16} style={{ marginTop: 8 }}>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <li>UX Research</li>
                </TextCaption>
              </Col>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <li>UX Writing</li>
                </TextCaption>
              </Col>
              <Col sm={8} md={8} lg={6} xl={5} xxl={4}>
                <TextCaption>
                  <li>React Typescript</li>
                </TextCaption>
              </Col>
            </Row>
          </>
        )}

        <Row
          gutter={[16, 16]}
          justify="start"
          style={(xs || sm) && !md ? { marginTop: 40 } : { marginTop: 48 }}
        >
          <Col>
            <a href="/premkamon-resume.pdf" target="_blank">
              <ButtonPrimary>View my resume</ButtonPrimary>
            </a>
          </Col>
          <Col>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={() => animateScroll.scrollToBottom}
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
