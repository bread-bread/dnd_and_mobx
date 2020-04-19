import styled from 'styled-components';

const StyledButton = styled.div`
    width: 50px;
    height: 50px;
    transition: background 150ms ease;
    margin-top: 8px;
    display: flex;
    cursor: grab;
    padding: 6px;
    border-radius: 6px;
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`;

export default StyledButton;
