import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCards } from '../services/mtgService';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const result = await getCards();
      setCards(result.data.cards);
    };

    fetchCards();
  }, []);

  return (
    <div>
      <h2>MTG Cards</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Link to={`/card/${card.id}`}>{card.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
