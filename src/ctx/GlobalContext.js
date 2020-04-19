import React, { useState } from 'react';

export const Ctx = React.createContext();

const GlobalProvider = ({ children }) => {
    const [ elements, setElements ] = useState([]);
    const [ draggingElem, setDragging ] = useState(null);

    const addElement = elem => setElements([ ...elements, elem ]);

    return (
        <Ctx.Provider value={{
            elements,
            draggingElem,
            setDragging,
            addElement
        }}>
            {children}
        </Ctx.Provider>
    );
}

export default GlobalProvider;
