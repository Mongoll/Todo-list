import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';

const EditTodo = ({closeEditMod, item, update}) => {
    const [editedItem, setEditedItem] =useState([]);
    console.log(item)
    const oldItem = item;
    console.log(oldItem);
    
    const changeEditModal = (e) => {
        const newParam1 = {};
        closeEditMod(newParam1)
    }
    const editItem = (e) => {
        e.preventDefault();
        const newEdItem = {...editItem, id: oldItem.id}
        update(newEdItem);
        setEditedItem({title:'', deadline:'', stat: ''})
    }

    return (
        <form>
            <h3>Edit ToDo</h3>
            <MyInput 
                value={oldItem.title}
                onChange={e => setEditedItem({...editedItem, title: e.target.value})}
                type='text'
                placeholder='title'
            /> 
            {console.log(oldItem.title)}
            <MyInput 
                value={oldItem.deadline}
                onChange={e => setEditedItem({...editedItem, deadline: e.target.value})} 
                type='text'
                placeholder='deadline' 
            />
            <select 
                value={oldItem.stat}
                onChange={e => setEditedItem({...editedItem, stat: e.target.value})}>
                    <option value='0'>Status</option>
                    <option value='1'>ToDo</option>
                    <option value='2'>In Progress</option>
                    <option value='3'>Done</option>
            </select>
            <button className="addtodo" disabled /* onClick={editItem} disabled={!oldItem.title || !oldItem.deadline || !oldItem.stat} */>Add</button>
            <button className="cancel" onClick={changeEditModal} disabled>Cancel</button>
        </form>
    );    
};

export default EditTodo;