
export const fetchTodos = async () => {
    return await fetch("http://localhost:4000/todo").then(response => response.json())
}


export const postTodos = async (todo: any) => {
    return await fetch("http://localhost:4000/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    }).then(response => response.json())

}