import CoordinateNumberXAxis from '../CoordinateNumber/CoordinateNumberXAxis';
import CoordinateNumberYAxis from '../CoordinateNumber/CoordinateNumberYAxis';

class Coordinates {
    private coordX: CoordinateNumberXAxis;
    private coordY: CoordinateNumberYAxis;

    constructor(coordX: CoordinateNumberXAxis, coordY: CoordinateNumberYAxis) {
        this.coordX = coordX;
        this.coordY = coordY;
    }

    isNeighbourOf(coords: Coordinates): boolean {
        const x = this.coordX.distance(coords.coordX);
        const y = this.coordY.distance(coords.coordY);

        return [0, 1].includes(x) && [0, 1].includes(y) && x + y !== 0;
    }
}

export default Coordinates;
