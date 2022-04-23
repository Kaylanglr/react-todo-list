import React from "react";

function Form ({setInputText, inputText, setTodos, todos }) {


    function inputTextHandler(event) {
        setInputText(event.target.value);
    }

    function formSubmitHandler(event) {
            event.preventDefault();
            if(inputText != "") {
                if (inputText.trim().length > 0) {
                    setTodos([...todos, {Text: inputText, completed: false, id: todos.length + 1}])
                    setInputText("");
                }
            }
    }


    return (
        <div className="input">
            <form>
                <input type="text" value={inputText} name="todoInput" id="todoInput" onChange={inputTextHandler} />
                <button type="submit" onClick={formSubmitHandler}><i className="fa-solid fa-plus"></i></button>
            </form>
        </div>   
    );
}

export default Form;