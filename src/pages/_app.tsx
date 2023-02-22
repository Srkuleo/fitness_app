import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
