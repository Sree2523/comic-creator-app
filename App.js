import React, { useState } from 'react';
import ComicPanelForm from './components/ComicPanelForm';
import ComicDisplay from './components/ComicDisplay';
import { generateComicImage } from './services/apiService';

const App = () => {
  const [comicImages, setComicImages] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleComicGeneration = async (text) => {
    try {
      setIsLoading(true);
      const image = await generateComicImage(text);
      setComicImages([...comicImages, image]);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to generate comic image.');
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ComicPanelForm onSubmit={handleComicGeneration} />
      {isLoading ? <p>Loading...</p> : <ComicDisplay images={comicImages} />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
