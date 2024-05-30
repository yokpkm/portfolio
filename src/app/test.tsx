// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }

"use client";

import React, { useContext, useState } from "react";
import { ConfigProvider, Grid } from "antd";
import { ThemeContext, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global-style";
import { ThemeType } from "@/utils/constants";
import { LightTheme, DarkTheme, lightTheme, darkTheme } from "@/theme";
import { NavbarDesktop } from "@/components/layout/desktop/navbar";
import { NavbarMobile } from "@/components/layout/mobile/navbar";
import { MainLayout } from "@/components/layout";
import MainPage from "./pages/pages";

const AppPage = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;
  const [theme, setTheme] = useState(ThemeType.LIGHT);
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
          <GlobalStyle theme={themeContext} />
          {(xs || sm || md) && !lg ? (
            <NavbarMobile themeToggle={() => themeToggle()} theme={theme} />
          ) : (
            <NavbarDesktop themeToggle={() => themeToggle()} theme={theme} />
          )}
          <MainLayout>
            <MainPage />
          </MainLayout>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default AppPage;
