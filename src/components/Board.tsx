import React from 'react'
import { BoardShape } from '../types/BoardShape'
import Cell from './Cell';

interface Props {
    currentBoard:BoardShape;
}

const Board = ({currentBoard}:Props) => {
  return (
    <div className='board'>
        {currentBoard.map((row, rowIndex)=>(
            <div className="row" key={rowIndex}>
                {row.map((cell,cellIndex)=>(
                    <Cell key={`${rowIndex}-${cellIndex}`} type={cell}/>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Board