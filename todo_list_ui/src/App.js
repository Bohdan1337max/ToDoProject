import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

    fetch('/TODOList',).then(res => console.log(res))
  return (
    <div className="App">
     <header>
        <h1> Todo LIST</h1>
         <Form/>
     </header>
        <main>
            <TodoList/>
        </main>

    </div>
  );
}

export default App;
