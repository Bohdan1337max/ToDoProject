import React from "react";
import Todo from "./Todo";

class TodoTable extends React.Component {

    render() {
        const todos = this.props.todos;
        const isCompleted = this.props.isCompleted;
        return(
            <Todo/>
        )
    }



}
export default TodoTable;