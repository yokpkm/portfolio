import { Image } from "@heroui/react";
import { Row, Col } from "antd";
import { ModalDetail01 } from "../01-web-app-design/components/modal";
import { StyledCard } from "@/app/components/card";
import { TextCardTitle, TextCardContent } from "@/app/components/text";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const AppDesign: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <>
      <ModalDetail01 open={open} setOpen={setOpen} />
      <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <StyledCard
          cover={
            <Image
              src="/image/card/imgCard03.jpg"
              alt="false"
              width="100%"
              style={{ borderRadius: 16 }}
            />
          }
          hoverable
          onClick={() => setOpen(true)}
        >
          <Row gutter={[0, 4]} style={{ marginTop: 8 }}>
            <Col span={24}>
              <TextCardTitle>Progress Tracking</TextCardTitle>
            </Col>
            <Col span={24}>
              <TextCardContent>
                UI Design | Design System | UX Research
              </TextCardContent>
            </Col>
          </Row>
        </StyledCard>
      </Col>
    </>
  );
};
