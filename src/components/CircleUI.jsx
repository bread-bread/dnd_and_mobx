import React from 'react';

const CircleUI = ({ center, radius }) => (
    <circle
        cx={ center.x }
        cy={ center.y }
        r={ radius }
        fill='transparent'
        stroke='black'
        strokeWidth='2'
    />
);

export default CircleUI;
