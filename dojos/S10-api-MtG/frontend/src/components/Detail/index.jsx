import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Illustration from "@components/Illustration";
import Meta from "@components/Meta";
import Content from "@components/Content";
import SDetail from "./style";

export default function Detail() {
  const [card, setCard] = useState({});
  const { cardId } = useParams();

  const fetchCard = () => {
    axios
      .get(`https://api.magicthegathering.io/v1/cards/${cardId}`)
      .then(({ data }) => {
        setCard(data.card);
      });
  };

  useEffect(fetchCard, []);

  return (
    <SDetail>
      {/* <button onClick={fetchCard}>Refresh</button> */}
      <p>{card.name}</p>
      <Illustration url={card.imageUrl} name={card.name} />
      <Meta set={card.setName} />
      <Content />
    </SDetail>
  );
}
