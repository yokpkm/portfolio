import { useState, useEffect } from "react";
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

export const ModalDetail01: React.FC<Props> = ({ open, setOpen }) => {
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
        destroyOnClose
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
      >
        <Row
          justify="center"
          style={
            (xs || sm || md) && !lg
              ? { marginTop: 40, marginBottom: 88 }
              : { marginTop: 48, marginBottom: 112 }
          }
        >
          <Col span={24} style={{ maxWidth: 920 }}>
            <Row gutter={(xs || sm || md) && !lg ? [0, 24] : [0, 40]}>
              <Col span={24}>
                <TextHeadline>Progress Tracking Web Application</TextHeadline>
              </Col>
              <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <TextModalSubtitle>Role</TextModalSubtitle>
                <TextCaption style={{ marginTop: 2 }}>
                  UX/UI Designer
                </TextCaption>
              </Col>
              <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <TextModalSubtitle>Project Type</TextModalSubtitle>
                <TextCaption style={{ marginTop: 2 }}>Thesis</TextCaption>
              </Col>
              <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <TextModalSubtitle>Year</TextModalSubtitle>
                <TextCaption style={{ marginTop: 2 }}>2021</TextCaption>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/card/imgCard04.jpg"
                    alt="false"
                    width="100%"
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <TextLabel style={{ marginTop: 24 }}>OVERVIEW</TextLabel>
                <TextModalTitle>Target Group</TextModalTitle>
                <TextModalContent style={{ marginTop: 4 }}>
                  Web application for progress updating, Web application for
                  progress updating updating Web application for progress
                  updating, Web application for progress updating updating
                </TextModalContent>
              </Col>
              <Col span={24}>
                <TextLabel style={{ marginTop: 24 }}>BACKGROUND</TextLabel>
                <TextModalTitle>Target Group</TextModalTitle>
                <TextModalContent style={{ marginTop: 4 }}>
                  Web application for progress updating, Web application for
                  progress updating updating Web application for progress
                  updating, Web application for progress updating updating
                </TextModalContent>
              </Col>
              <Col span={24}>
                <TextModalTitle>Target Group</TextModalTitle>
                <TextModalContent style={{ marginTop: 4 }}>
                  Web application for progress updating, Web application for
                  progress updating updating Web application for progress
                  updating, Web application for progress updating updating
                </TextModalContent>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/card/imgCard04.jpg"
                    alt="false"
                    width="200px"
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <TextLabel style={{ marginTop: 24 }}>SOLUTIONS</TextLabel>
                <TextModalTitle>Target Group</TextModalTitle>
                <TextModalContent style={{ marginTop: 4 }}>
                  Web application for progress updating, Web application for
                  progress updating updating Web application for progress
                  updating, Web application for progress updating updating
                </TextModalContent>
              </Col>
              <Col span={24}>
                <TextLabel style={{ marginTop: 24 }}>WHATS'NEXT</TextLabel>
                <TextModalTitle>Target Group</TextModalTitle>
                <TextModalContent style={{ marginTop: 4 }}>
                  Web application for progress updating, Web application for
                  progress updating updating Web application for progress
                  updating, Web application for progress updating updating
                </TextModalContent>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
};
