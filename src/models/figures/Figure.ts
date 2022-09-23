import { Colors } from "../Colors";
import logo from "../../assets/black-king.png"
import { Cell } from "../Cell";

export enum FigureNames {
    FIGURE = 'figure',
    KING = 'king',
    QUEEN = 'queen',
    BISHOP = 'bishop',
    ROCK = 'rock',
    KNIGHT = 'knight',
    PAWN = 'pawn'
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random()
    }

    canMove(taget: Cell): boolean {
        return true
    }

    moveFigure(target: Cell) {

    }
}
