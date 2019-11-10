import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Toolbar';
import CircleUI from '../components/CircleUI';
import Point from '../models/Point';
import { CIRCLE, RECT } from './ToolbarButton';
import RectUI from '../components/RectUI';
import { observer, inject } from 'mobx-react';
import ElementsCounter from './ElementsCounter';

const Canvas = ({ children, store }) => {
    const [ , drop ] = useDrop({
        accept: ItemTypes.figure,
        drop: (item, monitor) => {
            const element = store.draggingElem;
            const offset = monitor.getClientOffset();

            if (offset) {
                element.coord = new Point(offset.x, offset.y);

                store.addElement(element);
            }
        }
    });

    return (
        <>
            <svg ref={drop} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                {
                    store.elements.map((element, ndx) => {
                        if (element.type === CIRCLE)
                            return <CircleUI key={ndx} center={element.coord} radius={element.radius} />
                        if (element.type === RECT)
                            return <RectUI key={ndx} coord={element.coord} size={element.size} />
                    })
                }
            </svg>
            <ElementsCounter />
        </>
    );
}

export default inject('store')(observer(Canvas));
