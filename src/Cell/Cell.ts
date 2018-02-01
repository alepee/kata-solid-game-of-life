import Coordinates from '../Coordinates/Coordinates';
import CoordinateNumberXAxis from '../CoordinateNumber/CoordinateNumberXAxis';
import CoordinateNumberYAxis from '../CoordinateNumber/CoordinateNumberYAxis';

class Cell {
    private alive: boolean;
    private coords: Coordinates;

    static buildFromXAndY(coordX: number, coordY: number, alive?: boolean) {
        const coords = new Coordinates(
            new CoordinateNumberXAxis(coordX),
            new CoordinateNumberYAxis(coordY)
        );

        return new Cell(coords, alive);
    }

    constructor(coords: Coordinates, alive = false) {
        this.coords = coords;
        this.alive = alive;
    }

    next(neighboursAliveCount: number): Cell {
        switch (neighboursAliveCount) {
            case 3:
                return this.born();
            case 2:
                return this;
            default:
                this.die();
                return this.die();
        }
    }

    isNeighbourOf(cell: Cell): boolean {
        return this.coords.isNeighbourOf(cell.coords);
    }

    isAlive(): boolean {
        return this.alive;
    }

    private die(): Cell {
        return new Cell(this.coords, false);
    }

    private born(): Cell {
        return new Cell(this.coords, true);
    }
}

export default Cell;
