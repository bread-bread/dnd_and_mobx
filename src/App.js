import React from 'react';
import './App.css';
import Global from './Global';
import Toolbar from './UI/Toolbar';
import Canvas from './UI/Canvas';
import { DndProvider } from 'react-dnd';
import HTML5backend from 'react-dnd-html5-backend';
import { Provider } from 'mobx-react';
import ElementsStore from './ctx/ElementsStore';
import { configure } from 'mobx';

const store = new ElementsStore();

configure({ enforceActions: 'always' });

class App extends React.Component {
    render() {
        return (
          <>
            <DndProvider backend={HTML5backend}>
                <Provider store={store}>
                    <Toolbar />
                    <Canvas />
                    <Global />
                </Provider>
            </DndProvider>
          </>  
        );
    }
}

export default App;
