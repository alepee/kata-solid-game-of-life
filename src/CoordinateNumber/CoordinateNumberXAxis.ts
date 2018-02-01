import CoordinateNumberAbstract from './CoordinateNumberAbstract';

class CoordinateNumberXAxis extends CoordinateNumberAbstract {
    distance(coord: CoordinateNumberXAxis): number {
        return super.distance(coord);
    }
}

export default CoordinateNumberXAxis;
