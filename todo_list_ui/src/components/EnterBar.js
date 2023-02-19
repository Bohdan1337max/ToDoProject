import React from "react";

const EnterBar = () =>
{
    return (
        <form>
            <input type={"text"} className = "todo-input" />
            <button type={"button"} className={"todo-button"}>
                Post
            </button>
            <p>
                <input type={"checkbox"} className= "isComplete"/>
            </p>

        </form>



    )
}

export default EnterBar;