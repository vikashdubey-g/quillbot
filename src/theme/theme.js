import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { colors } from "./colors";

const font = "Open Sans";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: font,

    heading: {
      fontFamily: font,
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "40px",
      color: colors.body1,
    },

    label: {
      fontFamily: font,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "31px",
      color: colors.body1,
    },

    caption: {
      color: colors.body1,
      fontWeight: 500,
      fontSize: "14px",
    },
    body2: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "27px",
      color: colors.body1,
    },
    body1: {
      fontFamily: font,
      fontWeight: 600,
      fontSize: "15px",
      lineHeight: "37px",
      color: colors.body1,
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "48px 15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "10px",
          borderRadius: "12px",
          backgroundColor: colors.cardBg,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid #9CA3AF",
          borderRadius: "8px",
          background: "#1A2536",
          width: "567px",
          height: "55px",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "17px",
          color: "#fff",
          "&.Mui-focused": {
            border: "none",
          },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: colors.sidebar,
        },
        paper: {
          backgroundColor: colors.sidebar,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: colors.divider,
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "36px",
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: font,
          fontWeight: 700,
          textTransform: "none",
          fontSize: "16px",
          lineHeight: "26px",
          padding: "6px 40px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "&:disabled": {
            pointerEvents: "none",
            cursor: "default",
          },
        },
        containedPrimary: {
          color: colors.black,
          backgroundColor: colors.blue,
          "&:hover": {
            backgroundColor: colors.blue,
          },
        },
        outlinedPrimary: {
          borderColor: colors.blue,
          color: colors.blue,
          "&:hover": {
            borderColor: colors.blue,
          },
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: "4px" },
        determinate: {
          backgroundColor: "#283647",
        },

        barColorPrimary: {
          backgroundColor: colors.blue,
          borderRadius: "4px",
        },
      },
    },
  },
});
