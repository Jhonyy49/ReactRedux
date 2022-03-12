import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import VisibiltyFilter from "./components/VisibiltyFilter";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <VisibiltyFilter />
    </div>
  );
}

export default App;
