import { ThemeOptions, createTheme } from "@mui/material";
import { palette } from "./palette";
const baseOptions: ThemeOptions = {
  palette,
  spacing: 4,
};

export const defaultTheme = createTheme({ ...baseOptions });
