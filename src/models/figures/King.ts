import { Figure, FigureNames } from "./Figure";
import blacklogo from "../../assets/black-king.png"
import whitelogo from "../../assets/white-king.png"
import { Colors } from "../Colors"
import { Cell } from "../Cell"

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        return true
    }
}