import React from "react";
import EnterBar from "./EnterBar";
import TodoTable from "./TodoTable";

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
        fetch("/TODOList").then(res => res.json()).
        then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    todos:result.items
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
    const { error, isLoaded, items } = this.state;
    if(error) {
        return <div> Error: {error.message} </div>
    } else if ( !isLoaded)
    {
        return <div> Loading...</div>
    }
    else {
        return (
            <div>
                <header>
                    <h1> Todo LIST</h1>
                    <EnterBar/>
                </header>
                <main>
                    <TodoTable/>
                </main>

            </div>
        )
    }
}
}



export default TodoList;