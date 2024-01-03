import { ThemeOptions, createTheme } from "@mui/material";

const baseOptions: ThemeOptions = {
  spacing: 4,
};

export const defaultTheme = createTheme({ ...baseOptions });
