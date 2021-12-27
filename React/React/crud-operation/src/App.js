import logo from "./logo.svg";
import "./App.css";
import TopNavigationBar from "./TopNavigationBar";
import { Route, Routes } from "react-router";
import Posts from "./Posts";
import Todo from "./Todo";
import User from "./User";

function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <Routes>
        <Route path={"/posts"} element={<Posts />} />
        <Route path={"/todo"} element={<Todo />} />
        <Route path={"/user"} element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
