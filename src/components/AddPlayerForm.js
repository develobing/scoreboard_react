import React from 'react';

export class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    }
  }

  handleValueChange = (e) => {
    this.setState({playerName: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.playerName)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.playerName}
               onChange={this.handleValueChange}
               placeholder="enter the player's name" required/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}