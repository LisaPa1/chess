import React, { FC, useEffect, useState } from 'react'

import '../App.css'
import { Board } from '../models/Board'
import CellComponent from './CellComponent'
import { Cell } from '../models/Cell'

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function click(cell: Cell) {
        console.log('cell', cell)
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        } else {
            setSelectedCell(cell)
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    //on calcule sur quelles cellules la figure peut se placer
    function highlightCells() {
        board.highLightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent cell={cell} key={cell.id} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} click={click} />
                    )}
                </React.Fragment>
            )}
        </div>

    )
}

export default BoardComponent;
