import Image from "next/image";
import { Row, Col } from "antd";
import { ModalERP } from "./components/modal";
import { StyledCard } from "@/app/components/card";
import { TextCardTitle, TextCardContent } from "@/app/components/text";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CardERP: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <>
      <ModalERP open={open} setOpen={setOpen} />
      <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <StyledCard
          cover={
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
          }
          hoverable
          onClick={() => setOpen(true)}
        >
          <Row style={{ marginTop: 20 }}>
            <Col span={24}>
              <TextCardTitle>Order Management Website</TextCardTitle>
            </Col>
            <Col span={24}>
              <TextCardContent>E-commerce – ERP</TextCardContent>
            </Col>
          </Row>
        </StyledCard>
      </Col>
    </>
  );
};
