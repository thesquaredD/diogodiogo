import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import { createContext, Suspense, useState } from "react";
import Header from "../components/Header";
import { appWithTranslation } from "next-i18next";
import nextI18nextConfig from "../next-i18next.config";
import Layout from "../components/Layout";

export const languages = ["en", "pt"];

const clientSideEmotionCache = createEmotionCache();

export const LanguageContext = createContext("ENG");

type MyAppProps = {
  emotionCache?: EmotionCache;
} & AppProps;

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
