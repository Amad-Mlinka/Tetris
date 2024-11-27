import React from 'react'
import { CellOptions } from '../types/CellOptions'

interface Props{
    type: CellOptions;
}

const Cell = ({type}:Props) => {
  return (
    <div className={`cell ${type}`}></div>
  )
}

export default Cell