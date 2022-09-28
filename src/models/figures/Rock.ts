import { Figure, FigureNames } from "./Figure"
import blacklogo from "../../assets/black-rock.png"
import whitelogo from "../../assets/white-rock.png"
import { Colors } from "../Colors"
import { Cell } from "../Cell"

export class Rock extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo
        this.name = FigureNames.ROCK
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        return true
    }
}