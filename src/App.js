import React, { useState} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';
import MyModal from './components/UI/MyModal/MyModal';
import EditTodo from './components/EditTodo';
import History from './components/History';

function App(){
    const [todos, setTodos] = useState([]);  
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editTodo, setEditTodo] = useState([]);

    /* useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    }, [todos]) ; */


    const changeModal = (newParam) => {
        setModal(false);
    }

    const changeEditMod = (newParam) => {
        setEditModal(false);
    }

    const createItem = (newItem) => {
        setTodos([...todos, newItem]);
        setModal(false);
    }

    const editItem = (newEdItem) => {
        setEditTodo(newEdItem);
        setEditModal(true);
    }

  /*  const updateItem = (item) => {
        console.log(todos.map(todo => {if(todo.id === item.id) return item}));
        setEditModal(false);
    }
 */
    return (
        <div className='App'>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Add New ToDo
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <TodoForm create={createItem} closeMod={changeModal}/>
            </MyModal>
            <MyModal visible={editModal} setVisible={setEditModal}>
                <EditTodo closeEditMod={changeEditMod} item={editTodo} /* update={updateItem} *//>  
            </MyModal>
            <TodoList todos={todos} edit={editItem}/>
            <History />
        </div>
    );
}

export default App;