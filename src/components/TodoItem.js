import React from 'react';

const TodoItem = (props) => {
    
    return (
        <div className={"todolist"+(props.item.stat)} onClick={() => props.edit(props.item)}>
            <div className="todolist__content">
                <strong>{props.item.title}</strong>
                <div>
                    {props.item.deadline}
                </div>
            </div>
        </div>
    );
};

export default TodoItem;