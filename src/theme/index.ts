import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `Roboto, 'Open Sans', Arial, sans-serif`,
    body: `Roboto, 'Open Sans', Arial, sans-serif`,
  },
});

export default theme;