import { Figure, FigureNames } from "./Figure";
import blacklogo from "../../assets/black-bishop.png"
import whitelogo from "../../assets/white-bishop.png"
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo
        this.name = FigureNames.BISHOP
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        return true
    }
}