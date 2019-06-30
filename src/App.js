import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  // 증가 혹은 감소하는 핸들러 메서드
  handleChangeScore = (id, delta) => {
    console.log("id : %s, delta : %s", id, delta)

    this.setState(prevState => ({
      players: prevState.players.map(item => {
        if(item.id === id) {
          item.score = item.score + delta;
        }
        return item;
      })
    }))
  }

  // 플레이어 추가하는 메서드
  handleAddPlayer = (playerName) => {
    console.log("playerName", playerName)
    let maxId = 0
    this.state.players.forEach(item => {
      maxId = item.id > maxId ? item.id : maxId
    });

    this.setState(prevState => {
      return {
        players: [
          ...this.state.players,
          {name: playerName, score: 0, id: maxId+1}
        ]
      }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} players={this.state.players} />

        {/*Players List*/}
        { this.state.players.map(player =>
          <Player name={player.name}
            key={player.id.toString()} removePlayer={this.handleRemovePlayer}
            changeScore={this.handleChangeScore} score={player.score} id={player.id}
          />)
        }

        <AddPlayerForm addPlayer={(playerName) => this.handleAddPlayer(playerName)}/>
      </div>
    );
  }
}

export default App;