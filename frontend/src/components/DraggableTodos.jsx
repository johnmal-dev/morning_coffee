import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './DraggableTodos.css';

const sampleTodos = [
  {
    id: 1,
    description: 'grocery run',
    isComplete: false,
  },
  {
    id: 2,
    description: '2k run',
    isComplete: true,
  },
  {
    id: 3,
    description: 'banki',
    isComplete: false,
  },
];

const TodoComponent = () => {
  const [todos, setTodos] = useState(sampleTodos);

  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...todos];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setTodos(updatedList);
  };

  return (
    <div className='DraggableTodos'>
      <h2>Todos</h2>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId='list-container'>
          {(provided) => (
            <div
              className='list-container'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className='item-container'
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      {item.description}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoComponent;
