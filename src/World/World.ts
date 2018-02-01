import repeat from '../../utils/repeat';
import Cell from '../Cell/Cell';

class World {
    private cells: Cell[];

    constructor(lines: number, columns: number) {
        this.cells = Array(lines * columns)
            .fill(null)
            .map(i => {
                return Cell.buildFromXAndY(
                    i % columns,
                    Math.floor(i / columns)
                );
            });
    }

    private getAliveNeighbours(cell: Cell): Cell[] {
        return this.cells.reduce((neighbours, otherCell) => {
            // get coords from index and world's columns count
            return otherCell.isAlive() && cell.isNeighbourOf(otherCell)
                ? [...neighbours, otherCell]
                : neighbours;
        }, []);
    }

    public cycle(): void {
        this.cells = this.cells.map(cell => {
            return cell.next(this.getAliveNeighbours(cell).length);
        });
    }

    public getCells() {
        return this.cells;
    }
}

export default World;
