import React, { useRef } from "react";

interface NewTodoProps {
    addTodo: (addTodoText:string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = textInputRef.current!.value;
    props.addTodo(todoText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="text1">question</label>
        <input
          type="text"
          id="text1"
          placeholder="What needs to be done?"
          ref={textInputRef}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
