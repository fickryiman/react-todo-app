import TodoItem from '@/components/TodoItem';

const TodosList = ({ todosProps, handleChange, deleteTodo, setUpdate }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem 
          key={todo.id} 
          itemProp={todo} 
          handleChange={handleChange} 
          deleteTodo={deleteTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosList;
