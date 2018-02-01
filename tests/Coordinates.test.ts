import Coordinates from '../src/Coordinates/Coordinates';
import CoordinateNumberXAxis from '../src/CoordinateNumber/CoordinateNumberXAxis';
import CoordinateNumberYAxis from '../src/CoordinateNumber/CoordinateNumberYAxis';

describe('Coordinates', () => {
    it('will not consider two distant Coordinates', () => {
        const coordsA = new Coordinates(
            new CoordinateNumberXAxis(3),
            new CoordinateNumberYAxis(3)
        );
        const coordsB = new Coordinates(
            new CoordinateNumberXAxis(4),
            new CoordinateNumberYAxis(9)
        );

        expect(coordsA.isNeighbourOf(coordsB)).toBe(false);
    });

    it('will consider two adjacent Coordinates as neighbours', () => {
        const coordsA = new Coordinates(
            new CoordinateNumberXAxis(2),
            new CoordinateNumberYAxis(3)
        );
        const coordsB = new Coordinates(
            new CoordinateNumberXAxis(3),
            new CoordinateNumberYAxis(3)
        );

        expect(coordsA.isNeighbourOf(coordsB)).toBe(true);
    });

    it('will not consider two identical Coordinates as neighbours', () => {
        const coordsA = new Coordinates(
            new CoordinateNumberXAxis(3),
            new CoordinateNumberYAxis(3)
        );
        const coordsB = new Coordinates(
            new CoordinateNumberXAxis(3),
            new CoordinateNumberYAxis(3)
        );

        expect(coordsA.isNeighbourOf(coordsB)).toBe(false);
    });
});
