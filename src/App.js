import "./App.css";
import { useState, useEffect } from "react";
import api from "./api/axiosConfig";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
  const [games, setGames] = useState();
  const [game, setGame] = useState();
  const [reviews, setReviews] = useState();

  const getGames = async () => {
    try {
      const response = await api.get("api/v1/games");

      console.log(response.data);

      setGames(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getGameData = async (steamId) => {
    try {
      const response = await api.get(`/api/v1/games/${steamId}`);

      const singleGame = response.data;

      setGame(singleGame);

      setReviews(singleGame.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home games={games} />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
          <Route
            path="/Reviews/:steamId"
            element={
              <Reviews
                getGameData={getGameData}
                game={game}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
