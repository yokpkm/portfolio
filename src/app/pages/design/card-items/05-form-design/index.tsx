import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Col, Row } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonMore } from "../../../../components/button";
import { StyledTagDesign } from "../../../../components/tag";
import { TextContent, TextTitle } from "../../../../components/text";

import { FormDesignModal } from "./components/FormDesignModal";
import { DarkTheme, LightTheme } from "@/theme";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const FormDesign: React.FC<Props> = ({ visible, setVisible }) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <FormDesignModal visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
        <Card
        // variant="flat"
        // css={{
        //   background: themeContext.backgroundColors.card,
        //   shadow: themeContext.cardShadow.default,
        //   borderRadius: 16,
        // }}
        >
          {/* <Card.Body css={{ p: "28px 24px" }}> */}
          <CardBody>
            <Image src="/image/card/imgCard05.jpg" />
            <Row>
              <TextTitle>Login / Registration Form</TextTitle>
            </Row>
            <Row style={{ marginTop: 2 }}>
              <TextContent>
                Travel website's login and registration form.
              </TextContent>
            </Row>
            <Row gutter={[8, 16]} align="middle" style={{ marginTop: 32 }}>
              <Col flex="auto">
                <StyledTagDesign>UI Design</StyledTagDesign>
              </Col>
              <Col>
                <ButtonMore onClick={() => setVisible(true)}>
                  Read more
                </ButtonMore>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
