import {ITodo} from "../../interfaces/interfaces";

export const fetchTodos = async () => {
    return await fetch("http://localhost:4000/todo").then(response => response.json())
}


export const postTodos = async (todo: ITodo) => {
    return await fetch("http://localhost:4000/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    }).then(response => response.json())

}

export const deleteTodos = async (id: number) => {
    return await fetch(`http://localhost:4000/todo/${id}`, {
        method: "DELETE",
    }).then(response => response.json())
}

export const updateTodos = async (todo:ITodo) => {
    return await fetch(`http://localhost:4000/todo/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    }).then(response => response.json())
}