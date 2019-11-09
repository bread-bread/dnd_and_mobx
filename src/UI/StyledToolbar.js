import styled from 'styled-components';

const StyledToolbar = styled.div`
    width: 60px;
    height: 700px;
    border-radius: 8px;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 250;
`;

export default StyledToolbar;
