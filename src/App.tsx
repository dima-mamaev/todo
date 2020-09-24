import React from 'react';
import Navbar from "./components/navbar";
import Input from "./components/input";
import TodoList from "./components/todoList";
import "./App.css"

const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Input/>
                <TodoList/>
            </div>
        </>
    )
}

export default App;
