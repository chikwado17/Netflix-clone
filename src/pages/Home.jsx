import React from 'react'
import Header from '../components/Header'
import MoviesList from '../components/MoviesList'
import requests from '../utils/Requests'

const Home = () => {
  return (
    <>
        <Header />
        <MoviesList RowID='1' title="UpComing" fetchURL={requests.requestUpcoming} />
        <MoviesList RowID='2' title="Popular" fetchURL={requests.requestPopular} />
        <MoviesList RowID='3' title="Treading" fetchURL={requests.requestTrending} />
        <MoviesList RowID='4' title="Top Rated" fetchURL={requests.requestTopRated} />
        <MoviesList RowID='5' title="Horror" fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home