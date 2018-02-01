import World from '../src/World/World';

describe('World', () => {
    it('Create a world of 8x8 cells', () => {
        const world = new World(8, 8);

        expect(world.getCells().length).toBe(64);
    });
});
