import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Toolbar';
import { Ctx } from '../ctx/GlobalContext';
import CircleUI from '../components/CircleUI';
import Point from '../models/Point';
import { CIRCLE, RECT } from './ToolbarButton';
import RectUI from '../components/RectUI';

const Canvas = ({ children }) => {
    const ctx = React.useContext(Ctx);
    const [ , drop ] = useDrop({
        accept: ItemTypes.figure,
        drop: (item, monitor) => {
            const element = ctx.draggingElem;
            const offset = monitor.getClientOffset();

            if (offset) {
                element.coord = new Point(offset.x, offset.y);

                ctx.addElement(element);
            }
        }
    });

    return (
        <svg ref={drop} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            {
                ctx.elements.map((element, ndx) => {
                    if (element.type === CIRCLE)
                        return <CircleUI key={ndx} center={element.coord} radius={element.radius} />
                    if (element.type === RECT)
                        return <RectUI key={ndx} coord={element.coord} size={element.size} />
                })
            }
        </svg>
    );
}

export default Canvas;
