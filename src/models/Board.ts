import { Cell } from "./Cell";
import { Colors } from './Colors'
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rock } from "./figures/Rock";

export class Board {
    cells: Cell[][] = []

    //l'ensemble des cases est un objet à deux niveaux, les lignes verticales et horizontales
    //on crée d'abord une ligne des cases altérnées (j), ensuite on en crée 8 lignes (i)
    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) //impaire donc noir
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) //pair donc blanc
                }
            }
            this.cells.push(row)
        }
    }

    public getCell(y: number, x: number) {
        return this.cells[y][x]
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.WHITE, this.getCell(6, i))
            new Pawn(Colors.BLACK, this.getCell(1, i))
        }
    }

    private addBishop() {
        new Bishop(Colors.WHITE, this.getCell(7, 5))
        new Bishop(Colors.BLACK, this.getCell(0, 2))
        new Bishop(Colors.WHITE, this.getCell(7, 2))
        new Bishop(Colors.BLACK, this.getCell(0, 5))
    }

    private addKing() {
        new King(Colors.WHITE, this.getCell(7, 3))
        new King(Colors.BLACK, this.getCell(0, 3))
    }

    private addKnight() {
        new Knight(Colors.WHITE, this.getCell(7, 1))
        new Knight(Colors.BLACK, this.getCell(0, 1))
        new Knight(Colors.WHITE, this.getCell(7, 6))
        new Knight(Colors.BLACK, this.getCell(0, 6))
    }

    private addQueen() {
        new Queen(Colors.WHITE, this.getCell(7, 4))
        new Queen(Colors.BLACK, this.getCell(0, 4))
    }

    private addRock() {
        new Rock(Colors.WHITE, this.getCell(7, 0))
        new Rock(Colors.BLACK, this.getCell(0, 0))
        new Rock(Colors.WHITE, this.getCell(7, 7))
        new Rock(Colors.BLACK, this.getCell(0, 7))
    }

    public addFigure() {
        this.addPawns()
        this.addBishop()
        this.addKing()
        this.addKnight()
        this.addQueen()
        this.addRock()
    }

    public getCopyBoard(): Board {
        const newBoard = new Board
        newBoard.cells = this.cells
        return newBoard
    }

    public highLightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i]
            for (let j = 0; j < row.length; j++) {
                const target = row[j]
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }

    public updateBoard() { }
}
