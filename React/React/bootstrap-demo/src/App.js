import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import TopNavigationBar from "./TopNavigationBar";
import Body from "./Body";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <TopNavigationBar />
      <Routes>
        <Route path={"/posts"} element={<Posts />} />
        <Route path={"/todo"} element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
