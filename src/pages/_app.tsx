import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import { useState } from "react";
import "../styles/global.css";
import { IdContext } from "../utils/idContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [id, setId] = useState(4);
  
  return (
    <IdContext.Provider value={{ id, setId }}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </IdContext.Provider>
  );
};

export default MyApp;
