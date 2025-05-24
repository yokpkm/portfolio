import { useState } from "react";
import { Grid, Row } from "antd";
import { TextHeadline, TextCaption, TextNumber } from "../../components/text";
import { CardThesis } from "./card-items/thesis";
import { CardERP } from "./card-items/erp";

const DesignSection: React.FC = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  const [openCrypto, setOpenCrypto] = useState(false);
  const [openERP, setOpenERP] = useState(false);
  const [openThesis, setOpenThesis] = useState(false);
  const [openPerfume, setOpenPerfume] = useState(false);

  return (
    <>
      <section id="design">
        <Row
          justify="center"
          align="middle"
          style={
            (xs || sm || md) && !lg ? { marginTop: 120 } : { marginTop: 160 }
          }
        >
          <TextNumber>02.</TextNumber>
          <TextHeadline>DESIGN</TextHeadline>
        </Row>
        <Row justify="center" style={{ marginTop: 4 }}>
          <TextCaption>Explore some projects I’ve worked on</TextCaption>
        </Row>

        <Row
          justify={xs && !sm ? "center" : "start"}
          gutter={(xs || sm || md) && !lg ? [24, 48] : [32, 64]}
          style={
            (xs || sm || md) && !lg ? { marginTop: 40 } : { marginTop: 64 }
          }
        >
          <CardERP open={openERP} setOpen={setOpenERP} />
          <CardThesis open={openThesis} setOpen={setOpenThesis} />
        </Row>
      </section>
    </>
  );
};

export default DesignSection;
