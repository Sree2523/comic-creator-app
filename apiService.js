import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; 

export const generateComicImage = async (text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate-image`, { text });
    return response.data; 
  } catch (error) {
    console.error('Error in generateComicImage:', error);
    throw error;
  }
};
