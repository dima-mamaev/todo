export interface ITodo {
    content?: string
    id: number
    finished?: boolean
}


export interface IActionTodo {
    type: string
    payload: any
}

export interface IAppState {
    todoState: ITodo[],
    todoRequestState: IRequest
}

export interface IRequest {
    [key: string]: {
        loading: boolean,
        loaded: boolean,
        error: {
            status: boolean,
            message:string
        }
    }
}

export interface IActionRequest {
    type: string
    payload: IRequest
}