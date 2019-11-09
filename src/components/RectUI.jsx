import React from 'react';

const RectUI = ({ coord, size }) => (
    <rect
        x={ coord.x }
        y={ coord.y }
        width={ size.width }
        height={ size.height }
        fill='transparent'
        stroke='black'
        strokeWidth='2'
    />
);

export default RectUI;
