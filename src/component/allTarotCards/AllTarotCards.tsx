import { useQuery } from "react-query";
import supabase from "../../supabaseClient";
import SingleTarotCard from "../singleTarotCard/SingleTarotCard";
import { TarotDeckData } from "../../types/TarotDeckData";
import { useTarotCardHook } from "../../hooks/useTarotCardHook";
import { Box, Button } from "@mui/material";

const fetchTarotDeckData = async () => {
  const { data, error } = await supabase
    .from("tarotCardInformation")
    .select("id, card_name, key_words, image_link, description, card_suit");

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const AllTarotCards = () => {
  const { data } = useQuery<TarotDeckData[]>("tarotDeck", fetchTarotDeckData);

  const { modifiedData, displaySomeCards } = useTarotCardHook(data || []);
  console.log("data", data);
  console.log("data from hook", modifiedData);

  return (
    <Box>
      <Box>Number of Tarot Cards: {modifiedData?.length}</Box>
      {modifiedData?.map((item: TarotDeckData) => (
        <SingleTarotCard
          key={item.id}
          image={item.image_link}
          cardName={item.card_name}
          width="50px"
          sx={{ padding: 1 }}
        />
      ))}
      <Button onClick={() => displaySomeCards(1)}> Display One Card</Button>
      <Button onClick={() => displaySomeCards(5)}> Display Five Cards</Button>
      <Button onClick={() => displaySomeCards(10)}> Display Ten Cards</Button>
    </Box>
  );
};
export default AllTarotCards;
