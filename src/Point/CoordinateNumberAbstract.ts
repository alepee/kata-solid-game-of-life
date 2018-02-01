import CoordinateNumber from './CoordinateNumber';

abstract class CoordinateNumberAbstract implements CoordinateNumber {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    distance(coord: CoordinateNumberAbstract): number {
        return Math.abs(this.value - coord.value);
    }
}

export default CoordinateNumberAbstract;
