import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SGallery from "./style";

export default function Gallery() {
  const [cards, setCards] = useState([]);

  const fetchCards = () => {
    axios.get("https://api.magicthegathering.io/v1/cards").then(({ data }) => {
      setCards(data.cards);
    });
  };

  useEffect(fetchCards, []);

  return (
    <SGallery>
      {/* <button onClick={fetchCards}>Refresh</button> */}
      {cards.map((card) => {
        return (
          <p key={card.id}>
            <Link to={`/cards/${card.id}`}>{card.name}</Link>
          </p>
        );
      })}
    </SGallery>
  );
}
