import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles/createPalette";
// {
//   interface TypeBackground {
//     default: string;
//     header: string;
//     paper: string;
//   }

//   interface PaletteOptions {
//     others: {
//       border: string;
//       borderDark: string;
//     };
//   }
// }

export const palette: PaletteOptions = {
  mode: "light",
  common: {
    black: "black",
    white: "white",
  },
  primary: {
    main: "#f598c5",
    light: "#f5c4dc",
    dark: "#c284a2 ",
  },
};
