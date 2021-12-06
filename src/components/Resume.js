import React, { Component } from "react";
import Slide from "react-reveal";
import {apiProvider} from "../services/api/Utilities/provider";

var games = apiProvider.getAll('games').then(data => data);
var rounds = apiProvider.getAll('rounds').then(data => data);
const gameAnalytics = {
  bestPlayers:  games,
  longestGame:  rounds,
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
        <div key={player.player_id}>
          <h3>{player.name}</h3>
        </div>
      );
    });

    const longestGames = gameAnalytics.longestGame.map(function (game) {
      return (
        <div key={game.game_id}>
          <h3>
            Game #{game.game_id} server
          </h3>
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
