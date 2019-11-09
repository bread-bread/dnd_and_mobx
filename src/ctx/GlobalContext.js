import React from 'react';

export const Ctx = React.createContext();

export default class GlobalContext extends React.Component {
    state = {
        elements: [],
        draggingElem: null
    }

    addElement = element => {
        this.setState(state => ({
            elements: [ ...state.elements, element ]
        }))
    }

    setDragging = element => {
        this.setState({
            draggingElem: element
        });
    }

    render() {
        const { children } = this.props;
        const { elements, draggingElem } = this.state;

        return (
            <Ctx.Provider value={{
                elements,
                draggingElem,
                setDragging: this.setDragging,
                addElement: this.addElement
            }}>
                {children}
            </Ctx.Provider>
        );
    }
}