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
  TextModalLink,
} from "@/app/components/text";
import { ExportOutlined } from "@ant-design/icons";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalCrypto: React.FC<Props> = ({ open, setOpen }) => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

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
        // closeIcon={
        //   showCloseIcon && (
        //     <Image
        //       src="/icon/ic-close-default.svg"
        //       alt=""
        //       quality={100}
        //       priority
        //       width={20}
        //       height={20}
        //       style={{ display: "flex", cursor: "pointer" }}
        //     />
        //   )
        // }
        closeIcon={
          showCloseIcon && (
            <img
              src="/icon/ic-close-default.svg"
              alt=""
              width={20}
              height={20}
              style={{ display: "flex", cursor: "pointer" }}
            />
          )
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
                  <TextHeadline>Cryptocurrency Application</TextHeadline>
                </Col>
                <Col xs={24} sm={11} md={11} lg={9} xl={9} xxl={9}>
                  <TextModalSubtitle>Project Info</TextModalSubtitle>
                  <TextCaption style={{ marginTop: 4 }}>
                    Finance – Cryptocurrency | 2025
                  </TextCaption>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <TextModalSubtitle>Skills & Tools</TextModalSubtitle>
                  <Row gutter={[6, 6]} style={{ marginTop: 4 }}>
                    <Col>
                      <StyledTag>UI Design</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>Design System</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>UX Writing</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>User Research</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>UX Research</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>Figma</StyledTag>
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
                        src="/image/card/crypto.png"
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
                    As part of a cryptocurrency trading platform, I was
                    responsible for designing key new features to improve user
                    experience in security, market monitoring, and portfolio
                    tracking. Due to the project being under an NDA
                    (Non-Disclosure Agreement), some visual assets and specific
                    data are kept confidential.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>UX RESEARCH</TextLabel>
                  <TextModalTitle>Understanding the Users</TextModalTitle>
                  <TextModalContent style={{ marginTop: 8 }}>
                    I analyzed internal research, market behavior, and
                    collaborated closely with the product team. Key insights
                    revealed that users worry about asset safety, missing price
                    changes, and difficulty understanding their trading
                    outcomes.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextModalTitle>User Personas</TextModalTitle>
                  <TextModalContent style={{ marginTop: 8 }}>
                    User personas were developed based on research insights to
                    reflect user goals, pain points, and behaviors that informed
                    key design decisions.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <Row justify="center">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.66795367",
                      }}
                    >
                      <Image
                        src="/image/modal/crypto/persona.png"
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
                  <TextLabel style={{ marginTop: 24 }}>PROJECT SCOPE</TextLabel>
                  <TextModalTitle>Problem Statement</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    Cryptocurrency traders often face challenges in managing
                    their portfolios. They worry about wallet security, miss
                    price movements without real-time alerts, and lack clear
                    insights into profit and loss. Most platforms offer limited
                    personalized, intuitive tools for quick decision making in a
                    volatile market.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextModalTitle>Goal</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    To design and implement key features that improve user
                    experience in 3 areas:
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
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Wallet Lock{" "}
                        </b>
                        – enhance security and peace of mind
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
                          Price Alert{" "}
                        </b>
                        – help users react to market changes in real time
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
                          Profit & Loss (P&L){" "}
                        </b>
                        – give users clarity and confidence in tracking their
                        trading performance
                      </TextModalContent>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>UI DESIGN</TextLabel>
                  <TextModalTitle>High-Fidelity Mockups</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    High-fidelity mockups consistent with the existing UI to
                    support user scenarios. Focus on a simple and intuitive
                    experience for users. These are examples of UI that have
                    already been launched:
                  </TextModalContent>
                </Col>

                {/* wallet lock feature */}
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
                        src="/image/modal/crypto/wallet-lock.png"
                        alt=""
                        quality={100}
                        priority
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <a
                      href="https://www.orbixtrade.com/en/blog/article/what-is-wallet-lock-orbix"
                      target="_blank"
                    >
                      <TextModalLink style={{ marginTop: 20 }}>
                        🔒{" "}
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Wallet Lock
                        </b>{" "}
                        – Secure your assets with a simple lock
                        <ExportOutlined style={{ marginLeft: 6 }} />
                      </TextModalLink>
                    </a>
                  </Row>
                </Col>

                {/* price alert feature */}
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
                        src="/image/modal/crypto/price-alert.png"
                        alt=""
                        quality={100}
                        priority
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <a
                      href="https://www.orbixtrade.com/en/blog/article/get-to-know-orbix-price-alert"
                      target="_blank"
                    >
                      <TextModalLink style={{ marginTop: 20 }}>
                        🔔{" "}
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Price Alert
                        </b>{" "}
                        – Get notified of price changes in real-time
                        <ExportOutlined style={{ marginLeft: 6 }} />
                      </TextModalLink>
                    </a>
                  </Row>
                </Col>

                {/* p&l feature */}
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 636,
                        margin: "0 auto",
                        aspectRatio: "1.63076923",
                      }}
                    >
                      <Image
                        src="/image/modal/crypto/p&l.png"
                        alt=""
                        quality={100}
                        priority
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <a
                      href="https://www.orbixtrade.com/en/blog/article/what-is-orbix-balance"
                      target="_blank"
                    >
                      <TextModalLink style={{ marginTop: 20 }}>
                        💰{" "}
                        <b
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          Profit & Loss
                        </b>{" "}
                        – Track your trading performance with clarity
                        <ExportOutlined style={{ marginLeft: 6 }} />
                      </TextModalLink>
                    </a>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>
                    WHAT I LEARNED
                  </TextLabel>
                  <TextModalTitle>UI Consistency</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    Working on new features showed how UI consistency enhances
                    usability and trust, especially in crypto trading platforms.
                    Ensuring consistency{" "}
                    <b
                      style={{
                        fontWeight: 500,
                      }}
                    >
                      requires alignment across UI design, design system, and UX
                      writing
                    </b>
                    , which creates a consistent experience that simplifies
                    complex tasks for users.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextModalTitle>
                    Cross-Functional Collaboration
                  </TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    I learned how effective collaboration with product owners,
                    business analysts, developers, and QA engineers leads to
                    better issue resolution and smoother handoffs. The
                    communication and open discussion helped{" "}
                    <b
                      style={{
                        fontWeight: 500,
                      }}
                    >
                      align goals and reduce rework
                    </b>
                    .
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>CONCLUSION</TextLabel>
                  <TextModalTitle>What&apos;s Next</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    Usability testing was conducted internally with stakeholders
                    to validate the concept and clarity. The following are
                    planned for the next phase:
                  </TextModalContent>
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
                      Conduct usability testing with different users, from
                      beginner to professional traders
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
                      Enable sharing options for alerts and trading summaries
                      within the community
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
                      Implement personalization options to customize alerts and
                      portfolio tracking
                    </TextModalContent>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextModalContent
                    style={{ marginTop: 24, fontStyle: "italic" }}
                  >
                    This project is under NDA, so I cannot disclose further
                    details. However, feel free to contact me if you are
                    interested in exploring more about my work.
                  </TextModalContent>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </StyledModal>
    </>
  );
};
