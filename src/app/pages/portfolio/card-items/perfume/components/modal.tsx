import { useEffect, useState } from "react";
import { Image } from "@heroui/react";
import { Grid, Row, Col } from "antd";
import { StyledModal } from "../../../../../components/modal";
import {
  TextHeadline,
  TextCaption,
  TextLabel,
  TextModalTitle,
  TextModalSubtitle,
  TextModalContent,
} from "../../../../../components/text";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalPerfume: React.FC<Props> = ({ open, setOpen }) => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  const [showCloseIcon, setShowCloseIcon] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShowCloseIcon(true);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setShowCloseIcon(false);
    }
  }, [open]);

  return (
    <>
      <StyledModal
        title={null}
        footer={null}
        open={open}
        onCancel={() => setOpen(false)}
        destroyOnHidden
        closeIcon={
          showCloseIcon && (
            <Image
              width={20}
              height={20}
              src="/icon/ic-close-default.svg"
              alt="Close"
              style={{ display: "flex", cursor: "pointer" }}
            />
          )
        }
        styles={{ mask: { backgroundColor: "rgba(0, 0, 0, 0.7)" } }}
      >
        <Row
          justify="center"
          style={
            (xs || sm || md) && !lg
              ? { marginTop: 40, marginBottom: 88 }
              : { marginTop: 48, marginBottom: 112 }
          }
        >
          <Col span={24} style={{ maxWidth: 864 }}>
            <Row gutter={(xs || sm || md) && !lg ? [0, 32] : [0, 48]}>
              <Col span={24}>
                <TextHeadline>Perfume Application</TextHeadline>
              </Col>
              <Col xs={24} sm={11} md={11} lg={9} xl={9} xxl={9}>
                <TextModalSubtitle>Project Info</TextModalSubtitle>
                <TextCaption style={{ marginTop: 4 }}>
                  Lifestyle | Individual - 2018
                </TextCaption>
              </Col>
              <Col xs={24} sm={12} md={12} lg={11} xl={11} xxl={11}>
                <TextModalSubtitle>Skills & Tools</TextModalSubtitle>
                <TextCaption style={{ marginTop: 4 }}>
                  UI Design, UX Reserch, Adobe XD
                </TextCaption>
              </Col>

              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/card/perfume.svg"
                    alt="false"
                    width="100%"
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <TextLabel style={{ marginTop: 24 }}>BACKGROUND</TextLabel>
                <TextModalTitle>Overview</TextModalTitle>
                <TextModalContent style={{ marginTop: 8 }}>
                  This perfume application is designed for those who value
                  elegance, self-expression and well-curated recommendations. It
                  focuses on how a scent feels, whether it is elegant, flirty or
                  empowering. Users can explore perfumes by mood or occasion and
                  read real user reviews to make informed choices.
                </TextModalContent>
              </Col>
              <Col span={24}>
                <TextLabel style={{ marginTop: 24 }}>UX RESEARCH</TextLabel>
                <TextModalTitle>
                  Understanding the User (Assumption-Based Approach)
                </TextModalTitle>
                <TextModalContent style={{ marginTop: 8 }}>
                  Although no direct user interviews were conducted, I gathered
                  insights through secondary sources, including:
                </TextModalContent>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <Col>
                    <TextModalContent>
                      <b
                        style={{
                          fontWeight: 900,
                          marginRight: 8,
                          marginLeft: 4,
                        }}
                      >
                        •
                      </b>
                      Perfume reviews from platforms such as Perfumist, Sephora
                      and Fragrantica
                    </TextModalContent>
                  </Col>
                </Row>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <Col>
                    <TextModalContent>
                      <b
                        style={{
                          fontWeight: 900,
                          marginRight: 8,
                          marginLeft: 4,
                        }}
                      >
                        •
                      </b>
                      YouTube videos created by users within the target
                      demographic
                    </TextModalContent>
                  </Col>
                </Row>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <Col>
                    <TextModalContent>
                      <b
                        style={{
                          fontWeight: 900,
                          marginRight: 8,
                          marginLeft: 4,
                        }}
                      >
                        •
                      </b>
                      Instagram comments discussing real-life experiences with
                      luxury perfumes
                    </TextModalContent>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <TextModalTitle>User Persona</TextModalTitle>
                <TextModalContent style={{ marginTop: 8 }}>
                  Based on the research, I developed a primary persona focusing
                  on the goals and pain points of the target users.
                </TextModalContent>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/perfume/persona.svg"
                    alt="false"
                    width="100%"
                    style={{ display: "flex" }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <TextLabel style={{ marginTop: 24 }}>PROJECT SCOPE</TextLabel>
                <TextModalTitle>Problem Statement</TextModalTitle>
                <TextModalContent style={{ marginTop: 4 }}>
                  Many users struggle to find luxury perfumes that truly match
                  their personality due to overwhelming choices and lack of
                  trustworthy reviews. Existing platforms focus on technical
                  notes rather than emotional connection, leading to uncertain
                  and unsatisfactory purchases.
                </TextModalContent>
              </Col>
              <Col span={24}>
                <TextModalTitle>Goal</TextModalTitle>
                <TextModalContent style={{ marginTop: 4 }}>
                  To design a user-friendly perfume application that helps users
                  discover and choose luxury scents based on mood, occasion and
                  personality. It will provide curated recommendations and
                  authentic user reviews to empower purchasing decisions.
                </TextModalContent>
              </Col>
              <Col span={24}>
                <TextLabel style={{ marginTop: 24 }}>UI DESIGN</TextLabel>
                <TextModalTitle>High-Fidelity Mockups</TextModalTitle>
                <TextModalContent style={{ marginTop: 4 }}>
                  High-fidelity mockup examples showcasing key features for
                  purchase:
                </TextModalContent>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <Image
                    src="/image/modal/perfume/visual-design.svg"
                    alt="false"
                    width="100%"
                    style={{ display: "flex" }}
                  />
                </Row>
              </Col>

              {/* user flow */}
              <Col span={24}>
                <TextModalTitle>
                  User Flow: Discovery to Purchase
                </TextModalTitle>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <Col>
                    <TextModalContent>
                      <b
                        style={{
                          fontWeight: 500,
                          marginRight: 8,
                          marginLeft: 4,
                        }}
                      >
                        1.
                      </b>
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Open the app{" "}
                      </b>
                      to find a perfume that suits the mood for an upcoming
                      special event
                    </TextModalContent>
                  </Col>
                </Row>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <Col>
                    <TextModalContent>
                      <b
                        style={{
                          fontWeight: 500,
                          marginRight: 8,
                          marginLeft: 4,
                        }}
                      >
                        2.
                      </b>
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Browse curated suggestions{" "}
                      </b>
                      to choose a perfume that stands out
                    </TextModalContent>
                  </Col>
                </Row>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <Col>
                    <TextModalContent>
                      <b
                        style={{
                          fontWeight: 500,
                          marginRight: 8,
                          marginLeft: 4,
                        }}
                      >
                        3.
                      </b>
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Read the overview and story{" "}
                      </b>
                      to understand the scent’s character
                    </TextModalContent>
                  </Col>
                </Row>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <Col>
                    <TextModalContent>
                      <b
                        style={{
                          fontWeight: 500,
                          marginRight: 8,
                          marginLeft: 4,
                        }}
                      >
                        4.
                      </b>
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Check the “Impression” tab{" "}
                      </b>
                      to see real user reviews from others with similar tastes
                    </TextModalContent>
                  </Col>
                </Row>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <Col>
                    <TextModalContent>
                      <b
                        style={{
                          fontWeight: 500,
                          marginRight: 8,
                          marginLeft: 4,
                        }}
                      >
                        5.
                      </b>
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Proceed to purchase confidently{" "}
                      </b>
                      with the help of trustworthy insights
                    </TextModalContent>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <TextLabel style={{ marginTop: 24 }}>CONCLUSION</TextLabel>
                <TextModalTitle>Reflection</TextModalTitle>
                <TextModalContent style={{ marginTop: 4 }}>
                  Through this project, I explored UI design to improve the user
                  experience. Even without direct user interviews, analyzing
                  insights from secondary sources helped me understand user
                  needs and behavior.
                </TextModalContent>
              </Col>
              <Col span={24}>
                <TextModalTitle>Next Steps</TextModalTitle>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <TextModalContent>
                    <b
                      style={{
                        fontWeight: 900,
                        marginRight: 8,
                        marginLeft: 4,
                      }}
                    >
                      •
                    </b>
                    Conduct usability testing to validate the user flow
                  </TextModalContent>
                </Row>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <TextModalContent>
                    <b
                      style={{
                        fontWeight: 900,
                        marginRight: 8,
                        marginLeft: 4,
                      }}
                    >
                      •
                    </b>
                    Add personalization features such as a scent quiz or mood
                    selector
                  </TextModalContent>
                </Row>
                <Row align="middle" style={{ marginTop: 12 }}>
                  <TextModalContent>
                    <b
                      style={{
                        fontWeight: 900,
                        marginRight: 8,
                        marginLeft: 4,
                      }}
                    >
                      •
                    </b>
                    Explore the potential for integrating social features such
                    as share or follow
                  </TextModalContent>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
};
