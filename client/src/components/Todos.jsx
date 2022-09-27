import { Popover, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

const todoItems = [
  {
    description: 'go for a run',
    isComplete: true,
  },
];

export default function Todos() {
  let [todos, setTodos] = useState([]);
  let [todoInput, setTodoInput] = useState('');
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [],
    placement: 'top',
  });

  useEffect(() => {
    setTodos(todoItems);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { description: todoInput, isComplete: false }]);
    setTodoInput('');
  };

  return (
    <div className='fixed bottom-0 right-0 m-2'>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                inline-flex border-2 rounded p-2 text-sm cursor-pointer select-none opacity-80 hover:-translate-y-0.5 hover:opacity-100 transform transition active:bg-gray-100`}
              ref={setReferenceElement}
            >
              <span>Todo</span>
              <ChevronUpIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel
                className='absolute w-56'
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 mr-2 mb-2 flex flex-col bg-gray-800 bg-opacity-70'>
                  <div className='relative grid gap-2 px-8 py-5'>
                    {todos.map((item, index) => (
                      <div
                        key={index}
                        className='items-center p-2 text-sm font-medium cursor-pointer'
                      >
                        {item.description}
                      </div>
                    ))}
                  </div>
                  <div className='m-2'>
                    <form
                      action='#'
                      onSubmit={handleSubmit}
                    >
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='block w-full bg-gray-900 bg-opacity-80 sm:text-sm text-white active:ring-0 p-2 rounded'
                        placeholder='New Todo'
                        value={todoInput}
                        onChange={({ target }) => {
                          setTodoInput(target.value);
                        }}
                      />
                    </form>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
