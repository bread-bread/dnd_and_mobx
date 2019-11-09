import React from 'react';
import './App.css';
import Global from './Global';
import Toolbar from './UI/Toolbar';
import Canvas from './UI/Canvas';
import { DndProvider } from 'react-dnd';
import HTML5backend from 'react-dnd-html5-backend';
import GlobalContext from './ctx/GlobalContext';

class App extends React.Component {
    render() {
        return (
          <>
            <DndProvider backend={HTML5backend}>
                <GlobalContext>
                    <Toolbar />
                    <Canvas />
                    <Global />
                </GlobalContext>
            </DndProvider>
          </>  
        );
    }
}

export default App;
