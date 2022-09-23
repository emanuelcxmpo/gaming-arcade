import { useState, useEffect, React } from 'react'
import { Typography, Box } from '@mui/material';
import MainCard from '../components/MainCard'

export default function HomePage() {

  const [gamesData, setGamesData] = useState([])

  useEffect(() => {
    getVideogames()
  }, [])

  const getVideogames = async () => {
    try {

      const response = await fetch('https://api.rawg.io/api/games?key=4712efe7c1d44d03a1e0460eabdd0c93')
      const data = await response.json();
      setGamesData(data.results)
      //console.log('Games data from API... ', gamesData)

    } catch (err) {

      console.log(err)

    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#151515', justifyContent: 'center' }}>
      <Typography
        variant='h1'
        align='center'
        sx={{
          fontFamily: 'Bungee Outline',
          fontSize: '60px',
          fontWeight: 'bold',
          color: 'purple',
          display: 'flex',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        Gaming Arcade
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {gamesData.map((elemento) => {
          return <MainCard name={elemento.name} image={elemento.background_image} released={elemento.released}
            rating={elemento.rating} />
        })}
      </Box>
    </div >
  )
}
