// import { Image } from "@heroui/react";
import Image from "next/image";
import { Row, Col } from "antd";
import { ModalCrypto } from "./components/modal";
import { StyledCard } from "@/app/components/card";
import { TextCardTitle, TextCardContent } from "@/app/components/text";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CardCrypto: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <>
      <ModalCrypto open={open} setOpen={setOpen} />
      <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <StyledCard
          // cover={
          //   // <Image
          //   //   src="/image/card/crypto.svg"
          //   //   alt=""
          //   //   width="100%"
          //   //   style={{ borderRadius: 16 }}
          //   // />
          // }
          hoverable
          onClick={() => setOpen(true)}
        >
          <Row gutter={[0, 4]} style={{ marginTop: 12 }}>
            <Col span={24}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  marginBottom: 32,
                }}
              >
                <Image
                  src="/image/card/crypto.svg"
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
            </Col>
            <Col span={24}>
              <TextCardTitle>Cryptocurrecy Application</TextCardTitle>
            </Col>
            <Col span={24}>
              <TextCardContent>Finance – Cryptocurrency</TextCardContent>
            </Col>
          </Row>
        </StyledCard>
      </Col>
    </>
  );
};
