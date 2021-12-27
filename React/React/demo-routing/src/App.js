import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Todo from "./Todo";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { PersonProvider } from "./PersonContext";
import Accessiblity from "./Accesiblity";

import ContextConsumer from "./ContextConsumer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Accessiblity />
      <Routes>
        <Route path={"/posts"} element={<Posts />} />
        <Route path={"/todo"} element={<Todo />} />
      </Routes>
      <PersonProvider value={{ name: "Sanket", age: 23 }}>
        <ContextConsumer />
      </PersonProvider>
    </div>
  );
}

export default App;
