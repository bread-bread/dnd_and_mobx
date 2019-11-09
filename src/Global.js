import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        position: relative;
        overflow: hidden;
        color: #303030;
        user-select: none;
    }

    * {
        box-sizing: border-box;
    }
`;

export default Global;
