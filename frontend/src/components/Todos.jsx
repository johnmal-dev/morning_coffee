import React, { useState } from 'react';

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

  const handleClick = (index) => (e) => {
    console.log('index', index);
    console.log('property name', e.target.innerText);
    let newArr = [...todos];
    newArr[index].isComplete = !newArr[index].isComplete;
    setTodos(newArr);
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li
            style={todo.isComplete ? { textDecoration: 'line-through' } : {}}
            key={index}
            onClick={handleClick(index)}
          >
            {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
