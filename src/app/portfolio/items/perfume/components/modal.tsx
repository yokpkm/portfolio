import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Grid, Row, Col } from "antd";
import { StyledModal } from "@/app/components/modal";
import { StyledTag } from "@/app/components/tag";
import {
  TextHeadline,
  TextCaption,
  TextLabel,
  TextModalTitle,
  TextModalSubtitle,
  TextModalContent,
} from "@/app/components/text";
import { CloseIcon } from "../../close-icon";

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
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setShowCloseIcon(false);
    }
  }, [open]);

  return (
    <>
      {open && (
        <>
          {showCloseIcon && <CloseIcon onClose={() => setOpen(false)} />}
          <StyledModal
            title=""
            footer=""
            open={open}
            onCancel={() => setOpen(false)}
            closable={false}
            destroyOnHidden
            styles={{ mask: { backgroundColor: "rgba(0, 0, 0, 0.85)" } }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "backIn" }}
            >
              <Row
                justify="center"
                style={
                  (xs || sm || md) && !lg
                    ? { marginTop: 32, marginBottom: 96 }
                    : { marginTop: 48, marginBottom: 128 }
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
                        Lifestyle – Individual | 2018
                      </TextCaption>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={11} xl={11} xxl={11}>
                      <TextModalSubtitle>Skills & Tools</TextModalSubtitle>
                      <Row gutter={[6, 6]} style={{ marginTop: 4 }}>
                        <Col>
                          <StyledTag>UI Design</StyledTag>
                        </Col>
                        <Col>
                          <StyledTag>User Research</StyledTag>
                        </Col>
                        <Col>
                          <StyledTag>Adobe XD</StyledTag>
                        </Col>
                      </Row>
                    </Col>

                    <Col span={24}>
                      <Row justify="center">
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: "1/1",
                          }}
                        >
                          <Image
                            src="/image/card/perfume.png"
                            alt=""
                            quality={100}
                            priority
                            fill
                            style={{
                              objectFit: "cover",
                              borderRadius: 16,
                            }}
                          />
                        </div>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <TextLabel style={{ marginTop: 24 }}>
                        BACKGROUND
                      </TextLabel>
                      <TextModalTitle>Overview</TextModalTitle>
                      <TextModalContent style={{ marginTop: 8 }}>
                        This perfume application is designed for those who value
                        elegance, self-expression, and well-curated
                        recommendations. It focuses on how a scent feels,
                        whether it is elegant, flirty, or empowering. Users can
                        explore perfumes by mood or occasion and read real user
                        reviews to make informed choices.
                      </TextModalContent>
                    </Col>
                    <Col span={24}>
                      <TextLabel style={{ marginTop: 24 }}>
                        USER RESEARCH
                      </TextLabel>
                      <TextModalTitle>
                        Understanding the User (Assumption-Based Approach)
                      </TextModalTitle>
                      <TextModalContent style={{ marginTop: 8 }}>
                        Although no direct user interviews were conducted, I
                        gathered insights through secondary sources, including:
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
                            Perfume reviews from platforms such as Perfumist,
                            Sephora, and Fragrantica
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
                            Instagram comments discussing real-life experiences
                            with luxury perfumes
                          </TextModalContent>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <TextModalTitle>User Persona</TextModalTitle>
                      <TextModalContent style={{ marginTop: 8 }}>
                        Based on the research, I developed a primary persona
                        focusing on the goals and pain points of the target
                        users.
                      </TextModalContent>
                    </Col>
                    <Col span={24}>
                      <Row justify="center">
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            maxWidth: 640,
                            margin: "0 auto",
                            aspectRatio: "1.42857143",
                          }}
                        >
                          <Image
                            src="/image/modal/perfume/persona.png"
                            alt=""
                            quality={100}
                            priority
                            fill
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <TextLabel style={{ marginTop: 24 }}>
                        PROJECT SCOPE
                      </TextLabel>
                      <TextModalTitle>Problem Statement</TextModalTitle>
                      <TextModalContent style={{ marginTop: 4 }}>
                        Many users struggle to find luxury perfumes that truly
                        match their personality due to overwhelming choices and
                        lack of trustworthy reviews. Existing platforms focus on
                        technical notes rather than emotional connection,
                        leading to uncertain, and unsatisfactory purchases.
                      </TextModalContent>
                    </Col>
                    <Col span={24}>
                      <TextModalTitle>Goal</TextModalTitle>
                      <TextModalContent style={{ marginTop: 4 }}>
                        To design a user-friendly perfume application that helps
                        users discover and choose luxury scents based on mood,
                        occasion, and personality. It will provide curated
                        recommendations and authentic user reviews to empower
                        purchasing decisions.
                      </TextModalContent>
                    </Col>
                    <Col span={24}>
                      <TextLabel style={{ marginTop: 24 }}>UI DESIGN</TextLabel>
                      <TextModalTitle>High-Fidelity Mockups</TextModalTitle>
                      <TextModalContent style={{ marginTop: 4 }}>
                        High-fidelity mockup examples showcasing key features
                        for purchase:
                      </TextModalContent>
                    </Col>
                    <Col span={24}>
                      <Row justify={xs && !sm ? "start" : "center"}>
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: "2.21538462",
                          }}
                        >
                          <Image
                            src="/image/modal/perfume/visual-design.png"
                            alt=""
                            quality={100}
                            priority
                            fill
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
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
                            to find a perfume that suits the mood for an
                            upcoming special event
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
                            to see real user reviews from others with similar
                            tastes
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
                      <TextLabel style={{ marginTop: 24 }}>
                        CONCLUSION
                      </TextLabel>
                      <TextModalTitle>Reflection</TextModalTitle>
                      <TextModalContent style={{ marginTop: 4 }}>
                        Through this project, I explored UI design to improve
                        the user experience. Even without direct user
                        interviews, analyzing insights from secondary sources
                        helped me understand user needs and behavior.
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
                          Add personalization features such as a scent quiz or
                          mood selector
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
                          Explore the potential for integrating social features
                          such as share or follow
                        </TextModalContent>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </motion.div>
          </StyledModal>
        </>
      )}
    </>
  );
};
