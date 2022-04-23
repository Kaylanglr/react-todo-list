import React from "react";

function TodosList({todos, setTodos}) {

    function remove(id){
        const nieuweTodoLijst = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(nieuweTodoLijst)
    }



    function complete(id) {
        const nieuweTodoLijst = todos.map((todo) => {
            if(todo.id == id) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo;
        });
        setTodos(nieuweTodoLijst);
    }


    return (
        <div className="list">
            {todos.map(todo => (
                <div className="item" key={todo.id}>
                    <p className={todo.completed ? "completed" : "" }>{todo.Text}</p>
                    <div className="buttons">
                        <button className="check" onClick={() => complete(todo.id)}><i className="fa-solid fa-check"></i></button>
                        <button className="delete" onClick={() => remove(todo.id)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default TodosList;