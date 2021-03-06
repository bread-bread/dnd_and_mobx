import React from 'react';
import StyledButton from './StyledButton';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { ItemTypes } from './Toolbar';
import Circle from '../models/Circle';
import Rect from '../models/Rect';
import Point from '../models/Point';
import { inject } from 'mobx-react';

import image from '../circle.png';

export const CIRCLE = 'circle';
export const RECT = 'rect';

const elementsMap = {
    circle: Circle,
    rect: Rect

};

const ToolbarButton = ({ type, store }) => {
    const [ { isDragging }, drag, preview ] = useDrag({
        item: { type: ItemTypes.figure, figureType: type },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
            didDrop: monitor.didDrop()
        }),
        begin: monitor => {
            const offset = monitor.getSourceClientOffset();
            const initCoord = new Point(
                offset.x,
                offset.y
            );

            store.setDragging(new elementsMap[type](initCoord));
        },
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult();
          const element = store.draggingElem;

            if (dropResult.coord) {
                element.coord = dropResult.coord;

                if (element.type === RECT) element.size = { width: 100, height: 80 };

                store.addElement(element);
            }
        }
    });

    return (
        <StyledButton ref={drag}>
            {
                type === CIRCLE &&
                <DragPreviewImage connect={preview} src={image} />
            }
            {
                type === CIRCLE &&
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            border: '2px solid rgba(0,0,0,0.75)',
                            borderRadius: '50%',
                            boxSizing: 'border-box'
                        }}
                    />
            }
            {
                type === RECT &&
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            border: '2px solid rgba(0,0,0,0.75)',
                            boxSizing: 'border-box',
                            borderRadius: '2px'
                        }}
                    />
            }
        </StyledButton>
    );
};

export default inject('store')(ToolbarButton);
