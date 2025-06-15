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

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalThesis: React.FC<Props> = ({ open, setOpen }) => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg, xl, xxl } = useBreakpoint();

  const [showCloseIcon, setShowCloseIcon] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShowCloseIcon(true);
      }, 800);
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
          <Image
            src="/icon/ic-close-default.svg"
            alt=""
            quality={100}
            priority
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />
        }
        styles={{ mask: { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}
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
                  <TextHeadline>Tracking Progress Web Application</TextHeadline>
                </Col>
                <Col xs={24} sm={11} md={11} lg={9} xl={9} xxl={9}>
                  <TextModalSubtitle>Project Info</TextModalSubtitle>
                  <TextCaption style={{ marginTop: 4 }}>
                    Education – Thesis | 2019
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
                      <StyledTag>UX Research</StyledTag>
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
                        src="/image/card/thesis.png"
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
                  <TextLabel style={{ marginTop: 24 }}>BACKGROUND</TextLabel>
                  <TextModalTitle>Overview</TextModalTitle>
                  <TextModalContent style={{ marginTop: 8 }}>
                    This thesis is a web application developed to assist
                    teachers and students in the Applied Computer
                    Science-Multimedia field create a tracking progress system,
                    communicate in real time, and manage related documents in a
                    shared system. The goal is to ensure all users can
                    effectively organize and easily access project information.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextModalTitle>Project Process</TextModalTitle>
                  <TextModalContent style={{ marginTop: 8 }}>
                    I applied the Design Thinking process to design the web
                    application using Adobe XD for wireframes and prototypes,
                    collaborating closely with users to define the design and
                    ensure it met their expectations.
                  </TextModalContent>
                </Col>

                {/* design thinking process */}
                {(md || lg || xl || xxl) && (
                  <Col span={24}>
                    <Row justify="center">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          maxWidth: 800,
                          margin: "0 auto",
                          aspectRatio: "25",
                        }}
                      >
                        <Image
                          src="/image/modal/thesis/process.png"
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
                    <Row justify="center">
                      <Col span={24} style={{ maxWidth: 800 }}>
                        <Row justify="center" gutter={[10, 0]}>
                          <Col flex={"20%"}>
                            <TextCaption style={{ marginTop: 12 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              Interview
                            </TextCaption>
                            <TextCaption style={{ marginTop: 4 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              Pain Points
                            </TextCaption>
                          </Col>
                          <Col flex={"20%"}>
                            <TextCaption style={{ marginTop: 12 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              Problem Statement
                            </TextCaption>
                            <TextCaption style={{ marginTop: 4 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              Goal
                            </TextCaption>
                          </Col>
                          <Col flex={"20%"}>
                            <TextCaption style={{ marginTop: 12 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              Key Features
                            </TextCaption>
                            <TextCaption style={{ marginTop: 4 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              Website Structure
                            </TextCaption>
                          </Col>
                          <Col flex={"20%"}>
                            <TextCaption style={{ marginTop: 12 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              UI Mockups
                            </TextCaption>
                            <TextCaption style={{ marginTop: 4 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              Prototype
                            </TextCaption>
                          </Col>
                          <Col flex={"20%"}>
                            <TextCaption style={{ marginTop: 12 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              Demo Testing
                            </TextCaption>
                            <TextCaption style={{ marginTop: 4 }}>
                              <b
                                style={{
                                  fontWeight: 700,
                                  marginRight: 4,
                                  marginLeft: 2,
                                }}
                              >
                                •
                              </b>
                              Feedback Form
                            </TextCaption>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                )}
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>USER RESEARCH</TextLabel>
                  <TextModalTitle>Interview</TextModalTitle>
                  <TextModalContent style={{ marginTop: 8 }}>
                    I conducted semi-structured, open-ended interviews with 6
                    teachers from Applied Computer Science-Multimedia field to
                    understand their pain points when advising student projects.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextModalTitle>Pain Points</TextModalTitle>
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
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Tracking Progress{" "}
                        </b>
                        – Difficulty in tracking ongoing student progress
                        manually
                      </TextModalContent>
                    </Col>
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
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Document Management{" "}
                      </b>
                      – No shared system for storing project files, leading to
                      disorganization
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
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Communication{" "}
                      </b>
                      – Lack of real-time updates, causing delays in feedback
                    </TextModalContent>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>PROJECT SCOPE</TextLabel>
                  <TextModalTitle>Problem Statement</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    Teachers and students have difficulty tracking project
                    progress, managing documents efficiently without a shared
                    system, and lacking real-time communication. These
                    challenges lead to disorganization and make project
                    information harder to access.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextModalTitle>Goal</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    To develop a shared system that assists teachers and
                    students to track project progress, manage documents and
                    communicate in real-time, ensuring they can effectively
                    organize, and easily access project information.
                  </TextModalContent>
                </Col>

                {/* key features */}
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>STRUCTURE</TextLabel>
                  <TextModalTitle>Key Features</TextModalTitle>
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
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Project{" "}
                        </b>
                        – View a quick overview and navigate easily to the main
                        project sections
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
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          News{" "}
                        </b>
                        – Stay informed with updates, announcements, and
                        important project news
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
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Document{" "}
                        </b>
                        – Access all documents in one organized place
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
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Group{" "}
                        </b>
                        – Manage group members and upload progress files from
                        students
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
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Progress{" "}
                        </b>
                        – Schedule meetings and update progress based on
                        appointments
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
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Login System{" "}
                        </b>
                        – Secure login for teachers and students using their
                        university email
                      </TextModalContent>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextModalTitle>Website Structure</TextModalTitle>
                  <TextModalContent style={{ marginTop: 8 }}>
                    This web application follows a hierarchical structure, where
                    each project branches into key sections like news, document,
                    group, and progress. This ensures clear and organized
                    navigation.
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
                        aspectRatio: "1.25",
                      }}
                    >
                      <Image
                        src="/image/modal/thesis/web-structure.png"
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
                  <TextLabel style={{ marginTop: 24 }}>UI DESIGN</TextLabel>
                  <TextModalTitle>Style Guide</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    The style guide for this project ensures consistency in
                    colors, typography, and UI elements across the web
                    application.
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
                        aspectRatio: "0.91559371",
                      }}
                    >
                      <Image
                        src="/image/modal/thesis/style-guide.png"
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

                {/* high-fidelity mockups */}
                <Col span={24}>
                  <TextModalTitle>High-Fidelity Mockups</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    High-fidelity mockup examples showcasing key features for
                    teachers:
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.77777778",
                      }}
                    >
                      <Image
                        src="/image/modal/thesis/01-project.png"
                        alt=""
                        quality={100}
                        priority
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <TextCaption style={{ marginTop: 20 }}>
                      🗂️{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Project
                      </b>{" "}
                      – Get an overview and access key project sections
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.77777778",
                      }}
                    >
                      <Image
                        src="/image/modal/thesis/02-news.png"
                        alt=""
                        quality={100}
                        priority
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <TextCaption style={{ marginTop: 20 }}>
                      📰{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        News
                      </b>{" "}
                      – Share and announce important project updates
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.77777778",
                      }}
                    >
                      <Image
                        src="/image/modal/thesis/03-form.png"
                        alt=""
                        quality={100}
                        priority
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <TextCaption style={{ marginTop: 20 }}>
                      📝{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Form
                      </b>{" "}
                      – Manage and view all response forms submitted
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.77777778",
                      }}
                    >
                      <Image
                        src="/image/modal/thesis/04-folder.png"
                        alt=""
                        quality={100}
                        priority
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <TextCaption style={{ marginTop: 20 }}>
                      📁{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Folder
                      </b>{" "}
                      – View progress documents and media files
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.77777778",
                      }}
                    >
                      <Image
                        src="/image/modal/thesis/05-progress.png"
                        alt=""
                        quality={100}
                        priority
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <TextCaption style={{ marginTop: 20 }}>
                      🗓️{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Progress
                      </b>{" "}
                      – Schedule appointments and review project progress
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>OUTCOME</TextLabel>
                  <TextModalTitle>Feedback</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    Feedback is gathered from teachers and students through demo
                    testing and Google Form evaluation. The summary of user
                    satisfaction is as follows:
                  </TextModalContent>
                </Col>

                {(md || lg || xl || xxl) && (
                  <Col span={24}>
                    <Row justify="center">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          maxWidth: 800,
                          margin: "0 auto",
                          aspectRatio: "5.26315789",
                        }}
                      >
                        <Image
                          src="/image/modal/thesis/feedback.png"
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
                )}

                {/* satisfaction */}
                <Col span={24}>
                  <Row align="middle">
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
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Expectation{" "}
                      </b>
                      – Quick, accurate data verification, and dependable data
                      collection
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
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Functionality{" "}
                      </b>
                      – Intuitive system with sufficient and reliable features
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
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Security{" "}
                      </b>
                      – Trusted login via university email with proper access
                      control
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
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Compatibility{" "}
                      </b>
                      – Responsive layout across screen sizes and operating
                      systems
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
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Benefits{" "}
                      </b>
                      – Improved project management and reduced resource usage
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
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Usability{" "}
                      </b>
                      – Clear layout, accessible typography, and consistent
                      elements
                    </TextModalContent>
                  </Row>
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
                      Apply file size limits for uploads
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
                      Add web notification for progress updates between teachers
                      and students
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
                      Optimize data display for high user volumes by limiting
                      visible comments
                    </TextModalContent>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </StyledModal>
    </>
  );
};
