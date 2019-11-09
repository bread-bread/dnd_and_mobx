import React from 'react';
import StyledToolbar from './StyledToolbar';
import ToolbarButton, { CIRCLE, RECT } from './ToolbarButton';

export const ItemTypes = {
    figure: Symbol('figure')
}

const Toolbar = () => {
    return (
        <StyledToolbar>
            <ToolbarButton type={CIRCLE}/>
            <ToolbarButton type={RECT}/>
        </StyledToolbar>
    );
}

export default Toolbar;
