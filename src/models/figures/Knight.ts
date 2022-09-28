import { Figure, FigureNames } from "./Figure";
import blacklogo from "../../assets/black-knight.png"
import whitelogo from "../../assets/white-knight.png"
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo
        this.name = FigureNames.KNIGHT
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        return true
    }
}