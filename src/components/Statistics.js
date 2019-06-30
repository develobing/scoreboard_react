import React from 'react';

export const Statistics = (props) => {
  const totalPlayers = props.players.length
  let totalScore = 0
  props.players.forEach(player => {
    totalScore += player.score
  })

  return (
    <table>
      <tbody className="stats">
        <tr>
          <td>players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>totalScore:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  )
}