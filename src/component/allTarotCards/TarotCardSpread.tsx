import SingleTarotCard from "../singleTarotCard/SingleTarotCard";
import { TarotDeckData } from "../../types/TarotDeckData";
import { Box } from "@mui/material";

interface TarotCardSpreadProps {
  data: TarotDeckData[];
}

const TarotCardSpread = ({ data }: TarotCardSpreadProps) => {
  return (
    <Box>
      {data.map((item: TarotDeckData) => (
        <SingleTarotCard
          key={item.id}
          image={item.image_link}
          cardName={item.card_name}
          width="50px"
          sx={{ padding: 1 }}
        />
      ))}
    </Box>
  );
};
export default TarotCardSpread;
