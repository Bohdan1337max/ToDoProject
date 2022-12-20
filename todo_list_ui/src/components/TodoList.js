import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoList = () => {
    return (
        <div className={"post"}>
            <h2>
                Todo Item 1
            </h2>
            <FontAwesomeIcon icon="fa-regular fa-square-check" />
            <div className={"post-buttons"}>
                <p>edit</p>
                <p>complete</p>
                <p>x</p>
            </div>
        </div>

    )
}

export default TodoList;