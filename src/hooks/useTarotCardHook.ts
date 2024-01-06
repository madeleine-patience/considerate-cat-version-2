import { TarotDeckData } from "../types/TarotDeckData";

export const useTarotCardHook = () => {
  const countLengthOfDeck = (cardData: TarotDeckData[]) => {
    console.log(cardData);
  };

  return {
    countLengthOfDeck,
  };
};
