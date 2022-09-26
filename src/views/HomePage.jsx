import { React } from 'react'
import { Box } from '@mui/material';
import Title from '../components/Title';
import MainCard from '../components/MainCard';
import Footer from '../components/Footer';
import Loading from '../components/Load';
import GamesContainer from '../components/GamesContainer';
import useVideogames from '../hooks/useVideogames';

export default function HomePage() {

  const { gamesData, getVideogames, isLoading } = useVideogames();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#151515', justifyContent: 'center' }}>
      <Title />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <GamesContainer gamesData={gamesData.results} />

          <Footer
            previous={gamesData.previous}
            next={gamesData.next}
            updateGames={getVideogames} />
        </>
      )}
    </div>
  )
}
