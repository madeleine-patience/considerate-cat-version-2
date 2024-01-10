import { Box, Typography, useTheme } from "@mui/material";

interface GenericButtonAction {
  onClick: () => void;
}

interface GenericButtonProps extends GenericButtonAction {
  width?: number;
  buttonLabel: string;
}

const GenericButton = ({ buttonLabel, onClick, width }: GenericButtonProps) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        borderRadius: 2,
        backgroundColor: palette.primary.main,
        cursor: "pointer",
        textAlign: "center",
        width: width ? `${width}px` : "fit-Content",

        "&:hover": {
          backgroundColor: palette.primary.light,
        },
        "&:active": {
          backgroundColor: palette.primary.dark,
        },
      }}
      onClick={onClick}
    >
      <Typography variant="button"> {buttonLabel}</Typography>
    </Box>
  );
};
export default GenericButton;
