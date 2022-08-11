import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, edit}) => {

    return (
        <div>
            {todos?.map((item) => <TodoItem item={item} key={item.id} edit={edit}/>)}
        </div>
    );
};

export default TodoList;