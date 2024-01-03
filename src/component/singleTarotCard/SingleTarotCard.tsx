import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

type SingleTarotCardProps = {
  image: string;
  cardName: string;
  width: string;
  sx?: SxProps<Theme>;
};

const SingleTarotCard = ({
  image,
  cardName,
  width,
  sx,
}: SingleTarotCardProps) => {
  return (
    <Box
      borderRadius={2}
      component="img"
      src={image}
      alt={cardName}
      width={width}
      sx={sx}
    />
  );
};

export default SingleTarotCard;
