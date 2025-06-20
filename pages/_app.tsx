import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

import customTheme from "../src/app/configs/theme-config";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={customTheme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
