import { Card, CardBody } from "@heroui/react";
import { Image } from "@heroui/react";
import { Col, Row } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonCard } from "../../../../components/button";
import { StyledTagCoding, StyledTagDesign } from "../../../../components/tag";
import { TextHeading, TextTitle } from "../../../../components/text";
import { ProductPageModal } from "./components/ProductPageModal";
import { DarkTheme, LightTheme } from "@/app/theme";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const ProductPage: React.FC<Props> = ({ visible, setVisible }) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <ProductPageModal visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
        <Card
        // variant="flat"
        // css={{
        //   background: themeContext.backgroundColors.card,
        //   shadow: themeContext.cardShadow.default,
        //   borderRadius: 16,
        // }}
        >
          <Image src="/image/card/imgCard08.jpg" />
          <CardBody>
            <Row>
              <TextTitle>Product Page</TextTitle>
            </Row>
            <Row style={{ marginTop: 2 }}>
              <TextHeading>Features of inventory management.</TextHeading>
            </Row>
            <Row gutter={[8, 16]} align="middle" style={{ marginTop: 32 }}>
              <Col>
                <StyledTagDesign>UI Design</StyledTagDesign>
              </Col>
              <Col flex="auto">
                <StyledTagCoding>Coding</StyledTagCoding>
              </Col>
              <Col>
                <ButtonCard onClick={() => setVisible(true)}>
                  Read more
                </ButtonCard>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
