import React from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './Toolbar';
import CircleUI from '../components/CircleUI';
import Point from '../models/Point';
import { CIRCLE, RECT } from './ToolbarButton';
import RectUI from '../components/RectUI';
import { Observer, inject } from 'mobx-react';
import ElementsCounter from './ElementsCounter';

@inject('store')
class Canvas extends React.Component {
  render() {
    const { connectDropTarget, store } = this.props;

    return connectDropTarget(
      <div>
          <svg style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <Observer>
              {
                () => store.elements.map((element, ndx) => {
                  if (element.type === CIRCLE)
                      return <CircleUI key={ndx} center={element.coord} radius={element.radius} />
                  if (element.type === RECT)
                      return <RectUI key={ndx} coord={element.coord} size={element.size} />
                })
              }
            </Observer>
          </svg>
          <ElementsCounter />
      </div>
  );
  }
}

export default DropTarget(
  ItemTypes.figure,
  {
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();

      if (offset) {
        return {
          coord: new Point(offset.x, offset.y)
        }
      }
    }
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  })
)(Canvas);

// const Canvas = () => {
//     const { store } = React.useContext(MobXProviderContext);
//     const [ { isOver }, drop ] = useDrop({
//         accept: ItemTypes.figure,
//         collect: (monitor) => ({
//             isOver: monitor.isOver()
//         }),
//         drop: (item, monitor) => {
//             const element = store.draggingElem;
//             const offset = monitor.getClientOffset();

//             if (offset) {
//                 element.coord = new Point(offset.x, offset.y);
//                 if (element.type === RECT) element.size = { width: 100, height: 80 };

//                 store.addElement(element);
//             }
//         }
//     });

//     console.log('re-render');

//     return (
//         <>
//             <svg ref={drop} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
//               <Observer>
//                 {
//                   () => store.elements.map((element, ndx) => {
//                     if (element.type === CIRCLE)
//                         return <CircleUI key={ndx} center={element.coord} radius={element.radius} />
//                     if (element.type === RECT)
//                         return <RectUI key={ndx} coord={element.coord} size={element.size} />
//                   })
//                 }
//               </Observer>
//             </svg>
//             <ElementsCounter />
//         </>
//     );
// }

// export default Canvas;
