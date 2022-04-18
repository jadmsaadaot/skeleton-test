import { createTheme } from "@mui/system";

const Colors = {
  primary: "",
  secondary: "",
  success: "",
  info: "",
  danger: "",
  warning: "",
  dark: "",
  light: "",
  muted: "",
  border: "",
  inverse: "",
  shaft: "",
  dove_gray: "",
  body_bg: "",
  white: "",
  black: "",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
