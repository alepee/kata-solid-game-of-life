import Coordinates from '../src/Coordinates/Coordinates';
import CoordinateNumberXAxis from '../src/CoordinateNumber/CoordinateNumberXAxis';
import CoordinateNumberYAxis from '../src/CoordinateNumber/CoordinateNumberYAxis';

describe('Coordinates', () => {
    it('will consider two adjacent Coordinates as neighbours', () => {
        const coordsA = Coordinates.buildFromCoordinateNumbers(
            new CoordinateNumberXAxis(3),
            new CoordinateNumberYAxis(3)
        );
        const coordsB = Coordinates.buildFromCoordinateNumbers(
            new CoordinateNumberXAxis(4),
            new CoordinateNumberYAxis(9)
        );

        expect(coordsA.isNeighbour(coordsB)).toBe(false);
    });
});
