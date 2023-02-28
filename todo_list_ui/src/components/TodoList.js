import React from "react";
import EnterBar from "./EnterBar";
import TodoTable from "./TodoTable";
import Todo from "./Todo";

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isCompleted: false,
            todos:[]
        }
    }

    componentDidMount() {
        fetch("/TODOList").then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                        todos: result,
                    result
                    }
                )
            },
            (error) => {
                this.setState({
                    isLoaded:false,
                    error
                    }
                )
            }
        )
    }


render() {

    const {error, isLoaded, todos} = this.state;
    console.log(todos)
    if (error) {
        return <div> Error: {error.message} </div>
    } else if (!isLoaded) {
        return <div> Loading...</div>
    } else if (isLoaded) {
        return (

            <div>
                <header>
                    <h1> Todo LIST</h1>
                    <EnterBar/>
                </header>
                <main>
                    <ul>
                        {todos.map(todo => (
                          <Todo key = {todo.id}
                          todo = {todo}
                          />
                        ) )}
                    </ul>
                </main>

            </div>
        )
    }
}
}



export default TodoList;