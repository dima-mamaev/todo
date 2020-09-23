export interface ITodo {
    content?: string
    id: number
    finished?: boolean
}


export interface IActionTodo {
    type: string
    payload: ITodo
}

export interface IAppState {
    todoState: ITodo[],
    requestState: IRequest
}

export interface IRequest {
    [key: string]: {
        loading: boolean,
        loaded: boolean,
        error: boolean,
        errorMessage: string
    }
}

export interface IActionRequest {
    type: string
    payload: IRequest
}