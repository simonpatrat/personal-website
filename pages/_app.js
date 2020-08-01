import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "components/GlobalStyle";

const theme = {
  colors: {
    primary: "#000",
    secondary: "#ffba76",
    accent: "#FFF576",
    text: "#000",
    link: "#000",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
