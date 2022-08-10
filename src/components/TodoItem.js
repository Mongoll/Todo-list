import React from 'react';

const TodoItem = (props) => {
    
    return (
        <div className={"todolist"+(props.item.stat)}>
            <div className="todolist__content">
                <strong>{props.item.title}</strong>
                <div>
                {props.item.deadline}
                </div>
                <button onClick={() => props.edit(props.item)}>Edit</button>
            </div>
        </div>
    );
};

export default TodoItem;