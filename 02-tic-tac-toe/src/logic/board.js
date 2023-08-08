import { WINNER_LINES } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
  for( const combo of WINNER_LINES) {
    const [a, b, c] = combo
    if(
      boardToCheck[a] && 
      boardToCheck[a] === boardToCheck[b] 
      && boardToCheck[a] === boardToCheck[c]
      ) {
      return boardToCheck[a]
    }
  }
  return null
}