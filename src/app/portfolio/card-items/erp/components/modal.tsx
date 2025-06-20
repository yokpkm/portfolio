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

export const ModalERP: React.FC<Props> = ({ open, setOpen }) => {
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
        closeIcon={
          showCloseIcon && (
            <Image
              src="/icon/ic-close-default.svg"
              alt=""
              quality={100}
              priority
              width={20}
              height={20}
              style={{ display: "flex", cursor: "pointer" }}
            />
          )
        }
        styles={{ mask: { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}
        forceRender
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
                  <TextHeadline>Order Management Website</TextHeadline>
                </Col>
                <Col xs={24} sm={11} md={11} lg={9} xl={9} xxl={9}>
                  <TextModalSubtitle>Project Info</TextModalSubtitle>
                  <TextCaption style={{ marginTop: 4 }}>
                    E-commerce – ERP | 2022
                  </TextCaption>
                </Col>
                <Col xs={24} sm={12} md={12} lg={11} xl={11} xxl={11}>
                  <TextModalSubtitle>Skills & Tools</TextModalSubtitle>
                  <Row gutter={[6, 6]} style={{ marginTop: 4 }}>
                    <Col>
                      <StyledTag>UI Design</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>Design System</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>User Research</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>UX Research</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>TypeScript</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>Figma</StyledTag>
                    </Col>
                    <Col>
                      <StyledTag>Visual Studio Code</StyledTag>
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
                        src="/image/card/erp.png"
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
                    This ERP system supports e-commerce operations by managing
                    products, orders, and sales processes through 3 key
                    features:
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
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Product Feature{" "}
                      </b>
                      – Manages product data such as name, pricing, and
                      inventory, allowing users to add or edit items to keep
                      product information consistent and up-to-date across the
                      platform.
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
                        Order Feature{" "}
                      </b>
                      – Handles orders by creating, tracking, and updating order
                      statuses to support smoother workflows and improve team
                      collaboration.
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
                        Sale Order Feature{" "}
                      </b>
                      – Gathers sales inquiries and customer contact information
                      before purchases to help the team track leads and follow
                      up with personalized interactions.
                    </TextModalContent>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextModalTitle>Project Process</TextModalTitle>
                  <TextModalContent style={{ marginTop: 8 }}>
                    Requirements are gathered directly from real users and
                    on-site observations help clarify the actual delivery
                    workflow. These insights are used to design the UI and
                    create a prototype for usability testing before development.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>USER RESEARCH</TextLabel>
                  <TextModalTitle>Interview</TextModalTitle>
                  <TextModalContent style={{ marginTop: 8 }}>
                    As part of the UX research, I conducted contextual inquiry
                    interviews through on-site observations and conversations
                    with sales, warehouse, and business teams to understand
                    their workflows related to order management.
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
                          Order Visibility{" "}
                        </b>
                        – Lack of real-time order status visibility across teams
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
                        Order Prioritization{" "}
                      </b>
                      – No prioritization system for urgent or high-value orders
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
                        Automated Updates{" "}
                      </b>
                      – No automated updates for order status or inventory
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
                        Data Entry{" "}
                      </b>
                      – Manual data entry causing delays in reporting and
                      decision-making
                    </TextModalContent>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>PROJECT SCOPE</TextLabel>
                  <TextModalTitle>Problem Statement</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    The order management process lacks real-time visibility,
                    making tracking difficult. There is no system to prioritize
                    urgent orders or automate status and inventory updates.
                    Additionally, manual data entry slows reporting and delays
                    decisions.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextModalTitle>Goal</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    To develop the order management website that delivers
                    real-time order status visibility, prioritizes urgent
                    orders, automates status updates, and reduces manual data
                    entry for efficient order management.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>UI DESIGN</TextLabel>
                  <TextModalTitle>Visual Design</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    The design applies primary and neutral colors for a clean
                    look, while semantic colors clearly communicate statuses and
                    Noto Sans is used as the primary typeface to ensure
                    readability for content.
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
                        aspectRatio: "1.30612245",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/style-guide.png"
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
                  <TextModalContent style={{ marginTop: 4 }}>
                    The layout follows an{" "}
                    <b
                      style={{
                        fontWeight: 500,
                      }}
                    >
                      8pt grid system
                    </b>{" "}
                    to ensure consistent spacing and alignment, fully{" "}
                    <b
                      style={{
                        fontWeight: 500,
                      }}
                    >
                      responsive
                    </b>{" "}
                    and adapting smoothly to various screen sizes and devices.
                  </TextModalContent>
                </Col>

                {/* product feature */}
                <Col span={24}>
                  <TextModalTitle>Product Feature</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    Users can add new product items and sync product data from
                    marketplaces such as Shopee and Lazada, ensuring consistent
                    details and inventory across platforms.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "0.98405467",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/product/01-list.png"
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
                      📋{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Product List
                      </b>{" "}
                      – View an overview and manage all product items
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.06403941",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/product/02-details.png"
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
                      🔍{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Product Details
                      </b>{" "}
                      – Access full product information and sync with
                      marketplace
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "0.50174216",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/product/03-form.png"
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
                        Product Form
                      </b>{" "}
                      – Add or update product information
                    </TextCaption>
                  </Row>
                </Col>

                {/* order feature */}
                <Col span={24}>
                  <TextModalTitle>Order Feature</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    Users can create, view, and update order information in
                    real-time from marketplaces. They can also track order
                    status and resolve order issues efficiently, ensuring smooth
                    workflows and improved team collaboration.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.10485934",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/order/01-list.png"
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
                      📋{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Order List
                      </b>{" "}
                      – Stay on top of incoming and processed orders from
                      marketplaces
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "0.82758621",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/order/02-details.png"
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
                      🔍{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Order Details
                      </b>{" "}
                      - Review order information, tracking status, and any
                      related issues
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "0.82758621",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/order/03-form.png"
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
                        Order Form
                      </b>{" "}
                      – Create or edit order information
                    </TextCaption>
                  </Row>
                </Col>

                {/* sale order feature */}
                <Col span={24}>
                  <TextModalTitle>Sale Order Feature</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    Users can efficiently track leads from sales inquiries by
                    customer ID through sales channels and gather customer
                    contact information for personalized follow-up before
                    purchases.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.04096386",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/sale-order/01-list.png"
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
                      📋{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Sale Order List
                      </b>{" "}
                      – Get an overview of leads tracking
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.04",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/sale-order/02-form.png"
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
                        Sale Order Form
                      </b>{" "}
                      - Create sale order details
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>
                    WHAT I LEARNED
                  </TextLabel>
                  <TextModalTitle>Design & Coding</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    This project{" "}
                    <b
                      style={{
                        fontWeight: 500,
                      }}
                    >
                      enhanced my skills in design thinking and UI design
                    </b>
                    , with a focus on creating intuitive and responsive
                    interfaces across platforms. I had the opportunity to{" "}
                    <b
                      style={{
                        fontWeight: 500,
                      }}
                    >
                      implement responsive layouts and develop reusable
                      components
                    </b>{" "}
                    using TypeScript, React, Next.js, and Styled Components.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 800,
                        margin: "0 auto",
                        aspectRatio: "1.5625",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/mobile-responsive.png"
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
                      📱{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Responsive
                      </b>{" "}
                      – Mobile-responsive example for a product feature
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextModalTitle>Database</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    I also{" "}
                    <b
                      style={{
                        fontWeight: 500,
                      }}
                    >
                      designed database diagrams
                    </b>{" "}
                    to support API development, which deepened my understanding
                    of how design decisions connect to back-end logic.
                  </TextModalContent>
                </Col>
                <Col span={24}>
                  <Row justify={xs && !sm ? "start" : "center"}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 640,
                        margin: "0 auto",
                        aspectRatio: "0.83116883",
                      }}
                    >
                      <Image
                        src="/image/modal/erp/database.png"
                        alt=""
                        quality={100}
                        priority
                        fill
                        style={{
                          borderRadius: 16,
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <TextCaption style={{ marginTop: 20 }}>
                      🗄️{" "}
                      <b
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        Database
                      </b>{" "}
                      – Database diagram example for a sale order feature
                    </TextCaption>
                  </Row>
                </Col>
                <Col span={24}>
                  <TextLabel style={{ marginTop: 24 }}>CONCLUSION</TextLabel>
                  <TextModalTitle>What&apos;s Next</TextModalTitle>
                  <TextModalContent style={{ marginTop: 4 }}>
                    Following the demo testing, I gathered user feedback to
                    identify areas for improvement. The following features are
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
                      Summarize product sales by category to support better
                      business insights
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
                      Track production stages to improve planning and ensure
                      product availability
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
                      Develop a workspace system to define user roles and
                      responsibilities
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
