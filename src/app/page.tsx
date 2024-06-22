"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import { ConfigProvider, Grid } from "antd";
import { GlobalStyle } from "./global-style";
import { ThemeType } from "./constants";
import { LightTheme, DarkTheme, lightTheme, darkTheme } from "./theme";
import customTheme from "./configs/theme-config";
import { animateScroll } from "react-scroll";
import { MainLayout } from "./components/layout";
import { NavbarDesktop } from "./components/layout/components/desktop/navbar";
import { NavbarMobile } from "./components/layout/components/mobile/navbar";
import AboutSection from "./pages/about/page";
import ContactSection from "./pages/contact/page";
import DesignSection from "./pages/design/page";

const AppPage = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  const [theme, setTheme] = useState(ThemeType.LIGHT);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      animateScroll.scrollToTop();
    }, 4000);
  }, []);

  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;
  const themeToggle = () => {
    theme === ThemeType.LIGHT
      ? setTheme(ThemeType.DARK)
      : setTheme(ThemeType.LIGHT);
  };

  return (
    <>
      <ThemeProvider theme={theme === ThemeType.LIGHT ? lightTheme : darkTheme}>
        {/* <GlobalStyle theme={themeContext} />
          {loading ? (
            "loader"
          ) : (
            <>
              {(xs || sm || md) && !lg ? (
                <NavbarMobile themeToggle={() => themeToggle()} theme={theme} />
              ) : (
                <NavbarDesktop
                  themeToggle={() => themeToggle()}
                  theme={theme}
                />
              )}
              <MainLayout>test</MainLayout>
            </>
          )} */}

        <ConfigProvider theme={customTheme}>
          <GlobalStyle theme={themeContext} />
          <>
            {(xs || sm || md) && !lg ? (
              <NavbarMobile themeToggle={() => themeToggle()} theme={theme} />
            ) : (
              <NavbarDesktop themeToggle={() => themeToggle()} theme={theme} />
            )}

            <MainLayout>
              <AboutSection />
              <DesignSection />
              <ContactSection />
            </MainLayout>
          </>
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
};

export default AppPage;
