import { useState } from "react";
import { Grid, Row } from "antd";
import { DividerSection } from "../../components/divider";
import { TextHeadline, TextCaption } from "../../components/text";

import { WebAppDesign } from "./card-items/01-web-app-design";
import { AppDesign } from "./card-items/02-app-design";
import { SaleOrderPage } from "./card-items/03-sale-order-page";
import { ProductionOrderPage } from "./card-items/04-production-order-page";
import { FormDesign } from "./card-items/05-form-design";
import { LandingPage } from "./card-items/06-landing-page";
import { OrderPage } from "./card-items/07-order-page";
import { ProductPage } from "./card-items/08-product-page";
import { LogoDesign } from "./card-items/09-logo-design";
import { BagDesign } from "./card-items/10-bag-design";

const DesignSection: React.FC = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  const [open01Modal, setOpen01Modal] = useState(false);
  const [visibleModal02, setVisibleModal02] = useState(false);
  const [visibleModal03, setVisibleModal03] = useState(false);
  const [visibleModal04, setVisibleModal04] = useState(false);
  const [visibleModal05, setVisibleModal05] = useState(false);
  const [visibleModal06, setVisibleModal06] = useState(false);
  const [visibleModal07, setVisibleModal07] = useState(false);
  const [visibleModal08, setVisibleModal08] = useState(false);
  const [visibleModal09, setVisibleModal09] = useState(false);
  const [visibleModal10, setVisibleModal10] = useState(false);

  return (
    <>
      <section id="design">
        <Row
          justify="center"
          style={
            (xs || sm || md) && !lg
              ? { marginTop: 120, marginBottom: 56 }
              : { marginTop: 160, marginBottom: 64 }
          }
        >
          <DividerSection>
            <TextHeadline>DESIGN</TextHeadline>
          </DividerSection>
          <TextCaption>Some projects that created by me 🎨</TextCaption>
        </Row>
        <Row
          justify="start"
          gutter={(xs || sm || md) && !lg ? [32, 32] : [16, 32]}
        >
          <WebAppDesign open={open01Modal} setOpen={setOpen01Modal} />

          {/* <AppDesign visible={visibleModal02} setVisible={setVisibleModal02} />
          <SaleOrderPage
            visible={visibleModal03}
            setVisible={setVisibleModal03}
          />
          <ProductionOrderPage
            visible={visibleModal04}
            setVisible={setVisibleModal04}
          />
          <FormDesign visible={visibleModal05} setVisible={setVisibleModal05} />
          <LandingPage
            visible={visibleModal06}
            setVisible={setVisibleModal06}
          />
          <OrderPage visible={visibleModal07} setVisible={setVisibleModal07} />
          <ProductPage
            visible={visibleModal08}
            setVisible={setVisibleModal08}
          />
          <LogoDesign visible={visibleModal09} setVisible={setVisibleModal09} />
          <BagDesign visible={visibleModal10} setVisible={setVisibleModal10} /> */}
        </Row>
      </section>
    </>
  );
};

export default DesignSection;
