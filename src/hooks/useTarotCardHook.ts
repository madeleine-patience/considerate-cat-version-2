import { useEffect, useState } from "react";
import { TarotDeckData } from "../types/TarotDeckData";

export const useTarotCardHook = (cardData: TarotDeckData[]) => {
  const [modifiedData, setModifiedData] = useState<TarotDeckData[]>([]);

  // useEffect(() => {
  //   if (cardData && cardData.length > 0) {
  //     setModifiedData(cardData);
  //   }
  // }, [cardData]);

  const displaySomeCards = (amountOfCardsToDisplay: number) => {
    let shuffledData = [...cardData];
    let currentIndex = shuffledData.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledData[currentIndex], shuffledData[randomIndex]] = [
        shuffledData[randomIndex],
        shuffledData[currentIndex],
      ];
    }
    setModifiedData(
      shuffledData.length >= amountOfCardsToDisplay
        ? shuffledData.slice(0, amountOfCardsToDisplay)
        : shuffledData
    );
  };

  const removeOneCard = () => {
    const dataMinusOneCard = cardData.slice(10);
    return dataMinusOneCard;
  };

  return {
    modifiedData,
    removeOneCard,
    displaySomeCards,
  };
};
