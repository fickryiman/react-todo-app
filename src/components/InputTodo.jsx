import { useState } from "react";
import { useTodosContext } from "@/context/TodosContext";
import { FaPlusCircle } from "react-icons/fa";import { FaTrash } from "react-icons/fa";
import { useTodosStore } from '@/store';

const InputTodo = () => {
  const addTodoItem = useTodosStore((state) => state.addTodoItem);

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          className="input-text"
          type="text" 
          placeholder="Add Todo..." 
          value={title}
          onChange={handleChange}
        />
        <button className="input-submit">
          <FaPlusCircle 
            style={{
              color: '#5e5e5e',
              fontSize: '20px',
              marginTop: '2px',
            }}
          />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;
