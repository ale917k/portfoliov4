import { createGlobalStyle, css } from "styled-components";
import { isMobile } from "react-device-detect";

const customMediaQuery = (res: number, min?: boolean): string =>
  `@media (${min ? `min-width: ${res}px)` : `max-width: ${res}px)`}`;

export const theme = {
  breakpoints: {
    custom: customMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    phone: customMediaQuery(576),
  },
  palette: {
    common: {
      white: "#ffffff",
      black: "#292E38",
    },
    type: "light",
    primary: {
      light: "#5A8AF2",
      main: "#346FEF",
      dark: "#1356E7",
    },
    grey: {
      50: "#F9FAFB",
      100: "#E5E8EB",
      150: "#BAC3C9",
    },
    text: "#292E38",
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: isMobile ? 14 : 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: isMobile ? "3.2rem" : "3.625rem", // 58px
      lineHeight: 1.25,
    },
    h2: {
      fontWeight: 300,
      fontSize: "1rem", // 16px
      lineHeight: 1.5,
      letterSpacing: "0.15em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem", // 36px
      lineHeight: 1.5,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem", // 28px
      lineHeight: 1.5,
      letterSpacing: "0em",
    },
    body: {
      lg: {
        fontSize: "1rem", // 16px
        lineHeight: 1.5,
      },
      reg: {
        fontSize: "0.875rem", // 14px
        lineHeight: 1.5,
      },
      sm: {
        fontSize: "0.75rem", // 12px
        lineHeight: 1.5,
      },
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875rem", // 14px
      lineHeight: 1.75,
      textTransform: "uppercase",
    },
  },
  spacing: (x: number): string => `${x * 8}px`,
  shape: {
    borderRadius: "8px",
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
    },
  },
};

const windowSizes = css`
  width: 100%;
  height: 100%;
`;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.fontFamily};

    &:focus {
      outline: none;
    };
  };

  html {
    ${windowSizes};
    font-size: ${theme.typography.fontSize}px;
    font-weight: ${theme.typography.fontWeightLight};

    &:not(:hover) #cursorCircle {
      opacity: 0;
      width: 32px !important;
      height: 32px !important;
    }
  };

  body {
    ${windowSizes};
    overflow-x: hidden;
  };

  #root {
    ${windowSizes};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  };

  h1 {
    ${theme.typography.h1};
  };

  h2 {
    ${theme.typography.h2};
    text-transform: uppercase;
    color: ${theme.palette.grey[150]};
  };

  h3 {
    ${theme.typography.h3};
  };

  h4 {
    ${theme.typography.h4};
  };
`;

export default GlobalStyles;
