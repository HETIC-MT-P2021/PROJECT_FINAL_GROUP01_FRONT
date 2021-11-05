import React, { Component } from "react";
import Slide from "react-reveal";

const gameAnalytics = {
  bestPlayers: [
    {
      id: "IAZ90128X",
      name: "acauchois",
      gamesCount: 124,
      lastGameDate: "yesterday",
    },
    {
      id: "JJUAZ8109E",
      name: "meriem",
      gamesCount: 87,
      lastGameDate: "today",
    },
    {
      id: "A91IS8XAZII",
      name: "gensjaak",
      gamesCount: 90,
      lastGameDate: "october, 23th 2021",
    },
  ],
  longestGame: [
    {
      id: 36,
      server: "HETIC-MT4",
      gameStartedAt: "november, 2nd 2021",
      playersCount: 4,
    },
    {
      id: 23,
      server: "DIMO-HQ",
      gameStartedAt: "november, 4th 2021",
      playersCount: 3,
    },
    {
      id: 189,
      server: "WordChainArena",
      gameStartedAt: "yesterday",
      playersCount: 5,
    },
  ],
};

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const bestPlayers = gameAnalytics.bestPlayers.map(function (player) {
      return (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <p className="info">
            {player.gamesCount} games -{" "}
            <em className="date">{player.lastGameDate}</em>
          </p>
        </div>
      );
    });

    const longestGames = gameAnalytics.longestGame.map(function (game) {
      return (
        <div key={game.id}>
          <h3>
            Game #{game.id} on {game.server} server
          </h3>
          <p className="info">
            {game.playersCount} players -{" "}
            <em className="date">{game.gameStartedAt}</em>
          </p>
        </div>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div id="bestplayers" className="row education">
            <div className="three columns header-col">
              <h1>
                <span>3 best players</span>
              </h1>
              <p>
                The best player is determined by the speed of purposing a new
                word
              </p>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{bestPlayers}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div id="longestgames" className="row work">
            <div className="three columns header-col">
              <h1>
                <span>3 longest games</span>
              </h1>
              <p>The players in theses games came up with the most words</p>
            </div>

            <div className="nine columns main-col">{longestGames}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
