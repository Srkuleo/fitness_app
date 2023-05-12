import { type AppType } from "next/dist/shared/lib/utils";
import { useState } from "react";
import { IdContext } from "../utils/idContext";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";

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
