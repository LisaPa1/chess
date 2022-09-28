import React, { FC } from 'react';
import '../App.css'
import { Cell } from '../models/Cell'

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {

  return (
    <div className={['cell', cell.color, selected ? 'selected' : ''].join(' ')} onClick={() => click(cell)} >
      {/* <div className={!cell?.figure ? 'available' : ''} /> */}
      {cell?.available && !cell?.figure && <div className='available' />}
      {cell?.figure?.logo && <img src={cell.figure.logo} alt='' />
      }
    </div >

  )
}

export default CellComponent;
