import CoordinateNumberXAxis from '../src/Point/CoordinateNumberXAxis';
import CoordinateNumberYAxis from '../src/Point/CoordinateNumberYAxis';

describe('CoordinateNumber', () => {
    it('will return the correct distance beetween two CoordinateNumber', () => {
        const datasProvider = [
            { a: 9, b: -1, res: 10 },
            { a: -8, b: -1, res: 7 },
            { a: 0, b: 0, res: 0 },
            { a: 0, b: -1, res: 1 },
        ];

        datasProvider.forEach(datas => {
            const coordXA = new CoordinateNumberXAxis(datas.a);
            const coordXB = new CoordinateNumberXAxis(datas.b);

            const coordYA = new CoordinateNumberYAxis(datas.a);
            const coordYB = new CoordinateNumberYAxis(datas.b);

            const distanceX = coordXA.distance(coordXB);
            expect(distanceX).toBe(datas.res);

            const distanceY = coordXA.distance(coordXB);
            expect(distanceY).toBe(datas.res);
        });
    });
});
