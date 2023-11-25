import axios from 'axios';

const BASE_URL = 'https://api.magicthegathering.io/v1';

export const getCards = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cards`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

export const getCardById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/cards/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching card by ID:', error);
    throw error;
  }
};
