import { Col, Row } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonMore } from "../../../../components/button";
import { StyledTagDesign } from "../../../../components/tag";
import { TextContent, TextTitle } from "../../../../components/text";

import { WebAppDesignModal } from "./components/WebAppDesignModal";
import { DarkTheme, LightTheme } from "@/theme";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const WebAppDesign: React.FC<Props> = ({ visible, setVisible }) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <WebAppDesignModal visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
        <Card
        // variant="flat"
        // css={{
        //   background: themeContext.backgroundColors.card,
        //   shadow: themeContext.cardShadow.default,
        //   borderRadius: 16,
        // }}
        >
          {/* <CardBody css={{ p: "28px 24px" }}> */}
          <CardBody>
            <Image src="/image/card/imgCard01.jpg" />
            <Row>
              <TextTitle>Progress Tracking Web App</TextTitle>
            </Row>
            <Row style={{ marginTop: 2 }}>
              <TextContent>
                Web app for tracking progress of project.
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
