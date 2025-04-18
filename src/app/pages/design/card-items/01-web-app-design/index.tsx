import { Image } from "@heroui/react";
import { Row, Col } from "antd";
import { ModalDetail01 } from "./components/modal";
import { StyledCard } from "@/app/components/card";
import { StyledTag } from "../../../../components/tag";
import { TextCardTitle, TextCardContent } from "@/app/components/text";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const WebAppDesign: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <>
      <ModalDetail01 open={open} setOpen={setOpen} />
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
        <StyledCard
          cover={
            <Image
              src="/image/card/imgCard01.jpg"
              alt="false"
              width="100%"
              style={{ borderRadius: 16 }}
            />
          }
          hoverable
          onClick={() => setOpen(true)}
        >
          <Row style={{ marginTop: 12 }}>
            <Col span={24}>
              <TextCardTitle>PROGRESS TRACKING</TextCardTitle>
            </Col>
            <Col span={24}>
              <TextCardContent>
                Web application for progress updating of project
              </TextCardContent>
            </Col>
          </Row>
          <Row gutter={[8, 8]} style={{ marginTop: 16 }}>
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
