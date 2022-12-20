import React from "react";


const Form = () => {
    return(
        <div className={"wrapper"}>
            <input type={"text"} className = "todo-input" />
            <button className="todo-button" type={"submit"}> Post </button>
        </div>
    );
}

export default Form;