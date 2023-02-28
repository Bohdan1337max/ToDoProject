import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Todo extends React.Component{
//TODO add buttons

    render() {
        return (
            <div className={"post"}>
                <h2>
                    {this.props.todo.name}
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

}

export default Todo;