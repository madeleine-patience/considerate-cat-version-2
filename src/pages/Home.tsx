import { useQuery } from "react-query";
import supabase from "../supabaseClient";
import { TarotDeckData } from "../types/TarotDeckData";
import { useTarotCardHook } from "../hooks/useTarotCardHook";
import { Box, Typography } from "@mui/material";
import TarotCardSpread from "../component/allTarotCards/TarotCardSpread";
import GenericButton from "../component/genericButton/GenericButton";

const fetchTarotDeckData = async () => {
  const { data, error } = await supabase
    .from("tarotCardInformation")
    .select("id, card_name, key_words, image_link, description, card_suit");

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const Home = () => {
  const { data } = useQuery<TarotDeckData[]>("tarotDeck", fetchTarotDeckData);
  const { modifiedData, displaySomeCards } = useTarotCardHook(data || []);

  return (
    <Box p={10}>
      <Typography variant="h5"> Considerate Cat Tarot</Typography>
      <Box display="flex" gap={2}>
        <GenericButton
          buttonLabel="Display One Card"
          onClick={() => displaySomeCards(1)}
        />

        <GenericButton
          buttonLabel="Display Five Cards"
          onClick={() => displaySomeCards(5)}
        />

        <GenericButton
          buttonLabel="Display Ten Cards"
          onClick={() => displaySomeCards(10)}
        />
      </Box>
      <TarotCardSpread data={modifiedData} />
    </Box>
  );
};

export default Home;
