import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../UI/Toolbar';
import { MobXProviderContext } from 'mobx-react';
import Point from '../models/Point';
import { RECT } from '../UI/ToolbarButton';

const RectUI = ({ coord, size }) => {
  const { store } = React.useContext(MobXProviderContext);
  const [ { isOver }, drop ] = useDrop({
    accept: ItemTypes.figure,
    collect: (monitor) => ({
        isOver: monitor.isOver()
    }),
    drop: (item, monitor) => {
      const element = store.draggingElem;
      const offset = monitor.getClientOffset();

      if (offset) {
        element.coord = new Point(offset.x, offset.y);
        if (element.type === RECT) element.size = { width: 100, height: 80 };

        store.addElement(element);
      }
    }
  });

  return (
    <rect
      ref={drop}
      x={ coord.x }
      y={ coord.y }
      width={ size.width }
      height={ size.height }
      fill={isOver ? 'rgba(36, 78, 95, 0.5)' : 'transparent'}
      stroke='black'
      strokeWidth='2'
    />
  )
};

export default RectUI;
