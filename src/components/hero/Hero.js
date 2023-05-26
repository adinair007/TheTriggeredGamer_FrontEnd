import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button'

const Hero = ({ games }) => {
  const navigate = useNavigate();

  function reviews(steamId) {
    navigate(`/Reviews/${steamId}`);
  }

  return (
    <div>
      <Carousel>
        {games?.map((game) => {
          return (
            <Paper key={game.steamId}>
              <div className="game-card-container">
                <div
                  className="game-card"
                  style={{ "--img": `url(${game.backdrops[0]})` }}
                >
                  <div className="game-detail">
                    <div className="game-poster">
                      <img src={game.poster}></img>
                    </div>
                    <div className="game-title">
                      <h4>{game.title}</h4>
                    </div>
                    <div className="game-buttons-container">
                      <Link
                        to={`/Trailer/${game.trailerLink.substring(
                          game.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon"
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>

                      <div className="game-review-button-container">
                        <Button
                          variant="outline-info"
                          onClick={() => reviews(game.steamId)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
