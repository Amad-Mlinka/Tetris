import Board from "./components/Board";
import { EmptyCell } from "./enums/EmptyCell"

function App() {

  const board = Array(20).fill(null)
    .map(()=>Array(12).fill(EmptyCell.Empty));

  return (
    <>
    <h1>Tetris</h1>
       <Board currentBoard={board} />
    </>
  )
}

export default App
