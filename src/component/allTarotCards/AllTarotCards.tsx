import { useQuery } from "react-query";
import supabase from "../../supabaseClient";
import SingleTarotCard from "../singleTarotCard/SingleTarotCard";
import { TarotDeckData } from "../../types/TarotDeckData";
import { useTarotCardHook } from "../../hooks/useTarotCardHook";

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
  const { countLengthOfDeck } = useTarotCardHook();
  const { data, isLoading, isError, error } = useQuery(
    "tarotDeck",
    fetchTarotDeckData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error("Error fetching data: ", error);
    return <div>Error loading data</div>;
  }

  const dataLength = countLengthOfDeck(data);
  console.log(dataLength);
  return (
    <div>
      {data?.map((item: TarotDeckData) => (
        <SingleTarotCard
          key={item.id}
          image={item.image_link}
          cardName={item.card_name}
          width="50px"
          sx={{ padding: 1 }}
        />
      ))}
    </div>
  );
};

export default AllTarotCards;
