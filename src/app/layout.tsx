import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <title>Portfolio | Yok Premkamon</title>
    <body className={inter.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
