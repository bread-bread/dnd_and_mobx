import React from 'react';
import styled from 'styled-components';
import { inject, Observer } from 'mobx-react';

const StyledCounter = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 16px;
    border: 1px solid #eeeeee;
`;

const ElementsCounter = ({ store }) => (
    <StyledCounter>
        <Observer render={() => <span>{store.elementsCount}</span>} />
    </StyledCounter>
);

export default inject('store')(ElementsCounter);
