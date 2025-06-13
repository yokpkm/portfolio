"use client";

import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import { FooterDesktop } from "./components/layout/components/desktop/footer";
import { FooterMobile } from "./components/layout/components/mobile/footer";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Loader from "./components/loader";

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
        <ConfigProvider theme={customTheme}>
          <GlobalStyle theme={themeContext} />

          {loading ? (
            <Loader />
          ) : (
            <>
              {(xs || sm || md) && !lg ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  <NavbarMobile
                    themeToggle={() => themeToggle()}
                    theme={theme}
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  <NavbarDesktop
                    themeToggle={() => themeToggle()}
                    theme={theme}
                  />
                </motion.div>
              )}
              <MainLayout>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: 16 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "backIn" }}
                >
                  <About />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: 16 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "backIn" }}
                >
                  <Portfolio />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: 16 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "backIn" }}
                >
                  <Contact />
                </motion.div>
              </MainLayout>
              {(xs || sm || md) && !lg ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  <FooterMobile />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  <FooterDesktop />
                </motion.div>
              )}
            </>
          )}
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
};

export default AppPage;
