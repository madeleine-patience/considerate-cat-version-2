import { useEffect, useState } from "react";
import { TarotDeckData } from "../types/TarotDeckData";

export const useTarotCardHook = (cardData: TarotDeckData[]) => {
  const [modifiedData, setModifiedData] = useState<TarotDeckData[]>([]);

  useEffect(() => {
    if (cardData && cardData.length > 0) {
      setModifiedData(cardData);
    }
  }, [cardData]);

  const displaySomeCards = (amountOfCardsToDisplay: number) => {
    setModifiedData(
      cardData.length >= amountOfCardsToDisplay
        ? cardData.slice(0, amountOfCardsToDisplay)
        : cardData
    );
  };

  const removeOneCard = () => {
    const dataMinusOneCard = cardData.slice(10);
    console.log(dataMinusOneCard);
    return dataMinusOneCard;
  };

  return {
    modifiedData,
    removeOneCard,
    displaySomeCards,
  };
};
