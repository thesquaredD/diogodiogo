import { createTheme, PaletteColorOptions, responsiveFontSizes, Shadows } from "@mui/material/styles";
import { borderRadius, palette } from "@mui/system";

declare module '@mui/material/styles' {
  interface CustomPalette {
    toxicGreen: PaletteColorOptions;
    socialBlue: PaletteColorOptions;
    screamPink: PaletteColorOptions;


  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    toxicGreen: true;
    socialBlue: true;
    screamPink: true;
  }
}

let theme = createTheme({
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    mode: "dark",
    toxicGreen: {
      main: "#32ff17"
    },
    socialBlue:{
      main:  "#4d8bff"
    },
    screamPink :{
      main: "#ff17b2",
    },
    primary: {
      main: "#fff",
      dark: "#F0F0F0",
    },
    secondary: {
      main: "#32ff17",
    },
    background: {
      default: "#2e2e2e",
    },

  },
  typography: {
    fontFamily: "IBM Plex Sans Devanagari",
    h1: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 300,
    },
    body1: {
      fontFamily: "Open Sans",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          fontFamily: "IBM Plex Sans Devanagari",
          boxShadow: "none",

        },
        list: {
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "#fff",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          boxShadow: "none",

          fontFamily: "IBM Plex Sans Devanagari",
          fontWeight: 200,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: ({ ownerState }) => ({
          ...(ownerState.color === "secondary" && {
            color: "#143DA6",
            fontFamily: "IBM Plex Sans Devanagari",
          }),
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "IBM Plex Sans Devanagari",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "info" && {
            color: "#143DA6",
            fontFamily: "IBM Plex Sans Devanagari",
          }),
        }),
        focused: ({ ownerState }) => ({
          ...(ownerState.color === "info" && {}),
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "IBM Plex Sans Devanagari",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "IBM Plex Sans Devanagari",
          borderRadius: "10rem",
        },
        contained: ({ ownerState }) => ({
          ...(ownerState.color === "info" && {
            color: "#2e2e2e",
            "&:hover": {
                backgroundColor: "white",
            },
          }),
          ...(ownerState.color === "secondary" && {
            color: "#2e2e2e",
            "&:hover": {
              backgroundColor: "white",
            },
          }),
        }),
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
