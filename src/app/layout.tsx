import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <title>Portfolio</title>
    <body className={inter.className}>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
