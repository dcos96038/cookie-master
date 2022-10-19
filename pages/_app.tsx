import "../styles/globals.css";
import type {AppProps} from "next/app";

import {CssBaseline, Theme, ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

import {customTheme, darkTheme, lightTheme} from "../themes";

function MyApp({Component, pageProps}: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";

    const selectedTheme: Theme =
      cookieTheme === "light" ? lightTheme : cookieTheme === "dark" ? darkTheme : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
