import { useQuery } from "react-query";
import QueryProvider from "../../shared/QueryClientProvider";
import supabase from "../../supabaseClient";
import TarotCardSpread from "./TarotCardSpread";
import { Meta, StoryFn } from "@storybook/react";

const fetchTarotDeckData = async () => {
  const { data, error } = await supabase
    .from("tarotCardInformation")
    .select("id, card_name, key_words, image_link, description, card_suit");

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
const { data } = useQuery<TarotDeckData[]>("tarotDeck", fetchTarotDeckData);

export default {
  title: "Components/TarotCardSpread",
  component: TarotCardSpread,
  decorators: [
    (Story) => (
      <QueryProvider>
        <Story />
      </QueryProvider>
    ),
  ],
} as Meta<typeof TarotCardSpread>;

const Template: StoryFn<typeof TarotCardSpread> = () => (
  <TarotCardSpread data={data} />
);

export const Default = Template.bind({});
