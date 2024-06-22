import React from "react";
import { Grid } from "antd";
import { ContainerDesktop } from "./components/desktop/container";
import { ContainerMobile } from "./components/mobile/container";

interface Props {
  children: any;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <>
      {(xs || sm || md) && !lg ? (
        <ContainerMobile>{children}</ContainerMobile>
      ) : (
        <ContainerDesktop>{children}</ContainerDesktop>
      )}
    </>
  );
};
