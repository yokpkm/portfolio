import { Image } from "@heroui/react";
import { Row, Col } from "antd";
import { ModalDetail01 } from "./components/modal";
import { StyledCard } from "@/app/components/card";
import { StyledTag } from "../../../../components/tag";
import { TextCard, TextHeading } from "../../../../components/text";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const WebAppDesign: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <>
      <ModalDetail01 open={open} setOpen={setOpen} />
      <Col xs={22} sm={12} md={12} lg={12} xl={8} xxl={8}>
        <StyledCard
          cover={
            <Image
              src="/image/card/imgCard01.jpg"
              alt="false"
              width="100%"
              style={{ borderRadius: 8 }}
            />
          }
          bordered
          hoverable
          onClick={() => setOpen(true)}
        >
          <Row style={{ marginTop: 12 }}>
            <Col span={24}>
              <TextHeading>PROGRESS TRACKING</TextHeading>
            </Col>
            <Col span={24}>
              <TextCard>
                Web application for progress updating of project
              </TextCard>
            </Col>
          </Row>
          <Row gutter={[6, 6]} style={{ marginTop: 16 }}>
            <Col>
              <StyledTag>UI Design</StyledTag>
            </Col>
            <Col>
              <StyledTag>Coding</StyledTag>
            </Col>
          </Row>
        </StyledCard>
      </Col>
    </>
  );
};
