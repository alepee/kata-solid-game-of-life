import CoordinateNumberXAxis from '../src/Point/CoordinateNumberXAxis';
import CoordinateNumberYAxis from '../src/Point/CoordinateNumberYAxis';

describe('CoordinateNumber', () => {
    it('will return 1 for two X coordinate', () => {
        const coordA = new CoordinateNumberXAxis(1);
        const coordB = new CoordinateNumberXAxis(2);

        const distance = coordA.distance(coordB);

        expect(distance).toBe(1);
    });
});
