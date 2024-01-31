import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { extendTheme } from "@chakra-ui/react";
const rootElement = document.getElementById("root");
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";
const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config, styles });

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
export default theme;
