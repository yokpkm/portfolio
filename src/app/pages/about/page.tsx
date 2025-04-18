import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import { Grid, Row, Col } from "antd";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/button";
import { DividerSection } from "@/app/components/divider";
import { TextHeadline, TextBody, TextCaption } from "@/app/components/text";

const AboutSection: React.FC = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm } = useBreakpoint();

  return (
    <>
      <section id="about">
        <Row justify="start">
          <DividerSection orientation="left">
            <TextHeadline>ABOUT ✨</TextHeadline>
          </DividerSection>
          <TextCaption>
            Yok Premkamon, a UX/UI Creative Design Specialist
          </TextCaption>
        </Row>

        {xs || !sm ? (
          <>
            <Row justify="start" style={{ marginTop: 32 }}>
              <TextBody>
                UX/UI Designer with 4+ years of experience in visual design for
                mobile applications and responsive websites.
              </TextBody>
            </Row>
            <Row justify="start" style={{ marginTop: 16 }}>
              <TextBody>
                I turn complexity into clarity — through user-centered
                solutions: simple, intuitive and meaningful.
              </TextBody>
            </Row>
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
                  <li>UX Writing</li>
                </TextCaption>
              </Col>
              <Col xs={12}>
                <TextCaption>
                  <li>UX Research</li>
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
            <Row justify="start" style={{ marginTop: 40 }}>
              <TextBody>
                UX/UI Designer with 4+ years of experience in visual design
              </TextBody>
            </Row>
            <Row justify="start">
              <TextBody>
                for mobile applications and responsive websites.
              </TextBody>
            </Row>
            <Row justify="start" style={{ marginTop: 16 }}>
              <TextBody>
                I turn complexity into clarity — through user-centered
                solutions:
              </TextBody>
            </Row>
            <Row justify="start">
              <TextBody>simple, intuitive and meaningful.</TextBody>
            </Row>
            <Row justify="start" gutter={[16, 16]} style={{ marginTop: 40 }}>
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
            <Row justify="start" gutter={[16, 16]} style={{ marginTop: 8 }}>
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
          style={xs || !sm ? { marginTop: 40 } : { marginTop: 48 }}
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
