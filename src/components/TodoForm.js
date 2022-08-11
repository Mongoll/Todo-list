import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';

const TodoForm = ({create, closeMod}) => {
    const [item, setItem] = useState({title: '', deadline: '', stat: ''})

    const addNewItem = (e) => {
        e.preventDefault();
        const newItem = {...item, id: Date.now()}
        create(newItem)
        setItem({title:'', deadline:'', stat: ''});
    }
    const changeModal = (e) => {
        const newParam = {}
        closeMod(newParam)
    }
    
    return (
        <form>
            <h3>Add New ToDo</h3>
            <MyInput 
                value={item.title}
                onChange={e => setItem({...item, title: e.target.value})}
                type='text'
                placeholder='title'
                 />
            <MyInput 
                value={item.deadline}
                onChange={e => setItem({...item, deadline: e.target.value})}
                type='text'
                placeholder='deadline' 
                />
            <select 
                value={item.stat}
                onChange={e => setItem({...item, stat: e.target.value})}>
                    <option value='0'>Status</option>
                    <option value='1'>ToDo</option>
                    <option value='2'>In Progress</option>
                    <option value='3'>Done</option>
            </select>
            <button className="addtodo" onClick={addNewItem} disabled={!item.title || !item.deadline || !item.stat}>Add</button>
            <button className="cancel" onClick={changeModal}>Cancel</button>
        </form>
    );
};

export default TodoForm;