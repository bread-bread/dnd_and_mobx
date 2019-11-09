import { RECT } from "../UI/ToolbarButton";

class Rect {
    constructor(coord, size = { width: 40, height: 40 }) {
        this.coord = coord;
        this.size = size;
        this.type = RECT;
    }

    get bounds() {
        const coord = this.point.clone();
        const size = this.size.clone();

        return { coord, size };
    }
}

export default Rect;
