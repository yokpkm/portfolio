import { Image } from "@heroui/react";
import { Row, Col } from "antd";
import { ModalPerfume } from "./components/modal";
import { StyledCard } from "@/app/components/Card";
import { TextCardTitle, TextCardContent } from "@/app/components/Typography";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CardPerfume: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <>
      <ModalPerfume open={open} setOpen={setOpen} />
      <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <StyledCard
          cover={
            <Image
              src="/image/card/perfume.svg"
              alt=""
              width="100%"
              style={{ borderRadius: 16 }}
            />
          }
          hoverable
          onClick={() => setOpen(true)}
        >
          <Row gutter={[0, 4]} style={{ marginTop: 12 }}>
            <Col span={24}>
              <TextCardTitle>Perfume Application</TextCardTitle>
            </Col>
            <Col span={24}>
              <TextCardContent>Lifestyle – Individual</TextCardContent>
            </Col>
          </Row>
        </StyledCard>
      </Col>
    </>
  );
};
