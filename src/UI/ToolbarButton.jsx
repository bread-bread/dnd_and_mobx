import React from 'react';
import StyledButton from './StyledButton';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Toolbar';
import { Ctx } from '../ctx/GlobalContext';
import Circle from '../models/Circle';
import Rect from '../models/Rect';
import Point from '../models/Point';

export const CIRCLE = 'circle';
export const RECT = 'rect';

const elementsMap = {
    circle: Circle,
    rect: Rect

};

const ToolbarButton = ({ type }) => {
    const ctx = React.useContext(Ctx);
    const [ { isDragging }, drag ] = useDrag({
        item: { type: ItemTypes.figure },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
        begin: monitor => {
            const offset = monitor.getSourceClientOffset();
            const initCoord = new Point(
                offset.x,
                offset.y
            );

            ctx.setDragging(new elementsMap[type](initCoord));
        }
    });

    return (
        <StyledButton ref={drag}>
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

export default ToolbarButton;
