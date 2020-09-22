export interface ITodo {
    title: string
    id: number
}

export interface IAction {
    type: string
    payload: ITodo
}

export interface IAppState {
    todo: ITodo[]
}

