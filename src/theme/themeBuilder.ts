import { ThemeOptions, createTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";
const baseOptions: ThemeOptions = {
  typography,
  palette,
  spacing: 4,
};

export const defaultTheme = createTheme({ ...baseOptions });
