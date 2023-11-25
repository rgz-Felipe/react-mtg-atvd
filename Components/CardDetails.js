import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCardById } from '../services/mtgService';

const CardDetail = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      const result = await getCardById(id);
      setCard(result.data.card);
    };

    fetchCard();
  }, [id]);

  return (
    <div>
      {card ? (
        <div>
          <h2>{card.name}</h2>
          <img src={card.imageUrl} alt={card.name} />
          <p>{card.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardDetail;
