import { Cell } from "./Cell";
import { Colors } from './Colors'

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
}
