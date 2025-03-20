import React from "react";

import useAxios from "./hooks/useAxios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [APIdata, isLoading, error, getAPIData] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );

  const handleClick = () => {
    getAPIData(); // Trigger new card draw
  };

  let content;

  // Check for loading state
  if (isLoading) {
    content = <p>Loading...</p>;
  } 
  // Check for error state
  else if (error) {
    content = <p>Error: {error.message}</p>;
  } 
  // Default case: when data is available
  else {
    content = APIdata.map((cardData) => (
      <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
    ));
  }

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleClick}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {content}
      </div>
    </div>
  );
}


CardTable.defaultProps = {};

export default CardTable;
