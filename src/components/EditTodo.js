import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';

const EditTodo = ({closeEditMod, item, update}) => {
    const [editedItem, setEditedItem] =useState({title: '', deadline: '', stat: ''})
    console.log(item)
        const oldItem =item;
        console.log(oldItem)
    
        const changeEditModal = (e) => {
            const newParam = {}
            closeEditMod(newParam)
        }
        const editItem = (e) => {
            e.preventDefault()
            const newItem = {
                ...editItem, id: oldItem.id
            }
            update(newItem)
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
                <MyInput 
                    value="{oldItem.deadline}"
                    onChange={e => setEditedItem({...editedItem, deadline: e.target.value})} 
                    type='text'
                    placeholder='deadline' 
                    required/>
                <select 
                    value="{oldItem.stat}"
                    onChange={e => setEditedItem({...editedItem, stat: e.target.value})} required>
                        <option value='0'>Status</option>
                        <option value='1'>ToDo</option>
                        <option value='2'>In Progress</option>
                        <option value='3'>Done</option>
                </select>
                <button className="addtodo" onClick={editItem} disabled={!editItem.title || !editItem.deadline || !editItem.stat}>Add</button>
                <button className="cancel" onClick={changeEditModal}>Cancel</button>
            </form>
        );
    
};

export default EditTodo;