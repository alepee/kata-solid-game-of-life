import Cell from '../src/Cell/Cell';

describe('Cell', () => {
    it('will recognize a neighbour', () => {
        const sut = Cell.buildFromXAndY(0, 0);
        const neighbourCell = Cell.buildFromXAndY(1, 1);

        expect(sut.isNeighbourOf(neighbourCell)).toBe(true);
    });

    it('will recognize a distant cell', () => {
        const sut = Cell.buildFromXAndY(0, 0);
        const distantCell = Cell.buildFromXAndY(1, 3);

        expect(sut.isNeighbourOf(distantCell)).toBe(false);
    });
});
