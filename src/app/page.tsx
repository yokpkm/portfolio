"use client";

// import "antd/dist/antd.css";
import { ConfigProvider, Grid } from "antd";
import { useContext, useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { ThemeContext, ThemeProvider } from "styled-components";

import { DarkTheme, LightTheme, darkTheme, lightTheme } from "../theme";
import { ThemeType } from "../utils/constants";
import { MainLayout } from "./components/Layout";
import { NavbarDesktop } from "./components/Layout/components/desktop/Navbar";
import { NavbarMobile } from "./components/Layout/components/mobile/Navbar";
import { GlobalStyle } from "./global-style";
import AboutSection from "./pages/about/page";
import ProjectSection from "./pages/design/page";
import ContactSection from "./pages/contact/page";

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
      <ConfigProvider>
        <ThemeProvider
          theme={theme === ThemeType.LIGHT ? lightTheme : darkTheme}
        >
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

          <GlobalStyle theme={themeContext} />
          <>
            {(xs || sm || md) && !lg ? (
              <NavbarMobile themeToggle={() => themeToggle()} theme={theme} />
            ) : (
              <NavbarDesktop themeToggle={() => themeToggle()} theme={theme} />
            )}
            <MainLayout>
              <AboutSection />
              <ProjectSection />
              <ContactSection />
            </MainLayout>
          </>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default AppPage;
