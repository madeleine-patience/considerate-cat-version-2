import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import SingleTarotCard from "../component/singleTarotCard/SingleTarotCard";

type TarotDeckData = {
  id: number;
  card_name: string;
  key_words: string;
  image_link: string;
  description: string;
  card_suit: string;
};

const Home = () => {
  const [data, setData] = useState<TarotDeckData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: fetchedData, error } = await supabase
          .from("tarotCardInformation")
          .select(
            "id, card_name, key_words, image_link, description, card_suit"
          );

        if (error) throw error;
        setData(fetchedData);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    fetchData();
  }, []);

  const allTarotCards = data.map((item) => (
    <SingleTarotCard
      key={item.id}
      image={item.image_link}
      cardName={item.card_name}
      width="50px"
      sx={{ padding: 1 }}
    />
  ));

  return <Box p={10}>{allTarotCards}</Box>;
};

export default Home;
