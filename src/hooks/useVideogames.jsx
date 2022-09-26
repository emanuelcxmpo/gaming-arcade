import { useState, useEffect } from 'react';

const useVideogames = () => {
  const [gamesData, setGamesData] = useState({
    previous: null,
    next: '',
    results: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getVideogames()
  }, [])

  const getVideogames = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.rawg.io/api/games?key=8b62a0df7e0743d6b07b615a7814857a')
      const data = await response.json();
      setGamesData({
        previous: data.previous,
        next: data.next,
        results: data.results,
      });
      setIsLoading(false);
      // console.log('Games data from API... ', gamesData)

    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return { gamesData, getVideogames, isLoading };

};

export default useVideogames;