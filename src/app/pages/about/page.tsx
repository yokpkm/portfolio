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
  const { xs, sm } = useBreakpoint();

  return (
    <>
      <section id="about">
        <Row align="middle">
          <TextNumber>01.</TextNumber>
          <TextHeadline>ABOUT</TextHeadline>
        </Row>
        <Row style={{ marginTop: 2 }}>
          <TextCaption>
            Yok Premkamon, a UX/UI Creative Design Specialist
          </TextCaption>
        </Row>

        {xs || !sm ? (
          <>
            <Row style={{ marginTop: 32 }}>
              <Col span={24}>
                <TextBody>
                  UX/UI Designer with 5+ years of experience in visual design
                  for mobile applications and responsive websites.
                </TextBody>
              </Col>
              <Col span={24} style={{ marginTop: 16 }}>
                <TextBody>
                  I turn complexity into clarity — through user-centered
                  solutions: simple, intuitive and meaningful.
                </TextBody>
              </Col>
            </Row>

            <Row gutter={[16, 8]} style={{ marginTop: 32 }}>
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
            <Row style={{ marginTop: 40 }}>
              <Col span={24}>
                <TextBody>
                  UX/UI Designer with 5+ years of experience in visual design
                </TextBody>
              </Col>
              <Col span={24}>
                <TextBody>
                  for mobile applications and responsive websites.
                </TextBody>
              </Col>
              <Col span={24}>
                <TextBody>
                  I turn complexity into clarity — through user-centered
                  solutions:
                </TextBody>
              </Col>
              <Col span={24}>
                <TextBody>simple, intuitive and meaningful.</TextBody>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: 40 }}>
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
            <Row gutter={[16, 16]} style={{ marginTop: 8 }}>
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
          style={xs || !sm ? { marginTop: 40 } : { marginTop: 48 }}
        >
          <Col>
            <a href="/Premkamon-UXUI-resume.pdf" target="_blank">
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
