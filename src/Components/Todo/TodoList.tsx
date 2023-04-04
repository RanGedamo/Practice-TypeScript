import React from 'react';

interface TodoLists {
    items:{id:string,text:string}[];
};

const Todo:React.FC<TodoLists>=(props)=>{
    
    return(
        <ul>
            {props.items.map((todo)=>{         
                return <li key={todo.id}>{todo.text}</li>
            })}
        </ul>
    )
}

export default Todo;
