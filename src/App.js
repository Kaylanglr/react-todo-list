import React, {useState} from 'react';
import './App.css';
//compunenten
import Form from './components/Form';
import TodosList from './components/TodosList';

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
  return (
    <main>
        <div className="todoList">
            <h1>ToDo Lijst</h1>
            <Form 
                setInputText={setInputText}
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
            />
            <hr/>
            <TodosList todos={todos} setTodos={setTodos} />
        </div>
    </main>
  );
}

export default App;
