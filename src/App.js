import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';
import MyModal from './components/UI/MyModal/MyModal';
import EditTodo from './components/EditTodo';

function App(){
    const [todos, setTodos] = useState(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        return loadedTodos || ""
    })
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editTodo, setEditTodo] = useState({title: '', deadline: '', stat: ''})

useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
}, [todos])


const changeModal = (newParam) => {
    setModal(false)
}

const changeEditModal = (newParam) => {
    setEditModal(false)
}

const createItem = (newItem) => {
    setTodos([...todos, newItem])
    setModal(false)
}

const editItem = (item) => {
    const c = todos.filter(t => t.id === item.id)
    console.log(c);
    setEditTodo(c);
    setEditModal(true)
}

const updateItem = (item) => {
    console.log(todos.map(todo => {if(todo.id === item.id) return item}));
    
}


    return (
    <div className='App'>
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Add New ToDo
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <TodoForm create={createItem} closeMod={changeModal}/>
        </MyModal>
        <MyModal visible={editModal} setVisible={setEditModal}>
         <EditTodo closeEditMod={changeEditModal} item={editTodo} update={updateItem}/>  
        </MyModal>
        <TodoList todos={todos} edit={editItem}/>
    </div>
    );
}

export default App;