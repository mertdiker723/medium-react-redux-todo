import { Types } from "./action-type";

export function addTodoAction(newTodo) {
    return {
        type: Types.ADD_TODO_SUCCESS,
        payload: newTodo
    }
}

export function deleteTodoAction(item) {
    return {
        type: Types.DELETE_TODO_SUCCESS,
        payload: item
    }
}

export function updateTodoAction(item) {
    return {
        type: Types.UPDATE_TODO_SUCCESS,
        payload: item
    }
}

export function completedTodoAction(item) {
    return {
        type: Types.COMPLETED_TODO_SUCCESS,
        payload: item
    }
}

export function getOneTodoAction(item) {
    return {
        type: Types.GETONE_TODO_SUCCESS,
        payload: item
    }
}

export function showUpdateAddButtonAction(item) {
    return {
        type: Types.SHOWBUTTON_TODO_SUCCESS,
        payload: item
    }
}



export function clearSelectedTodoAction(item) {
    return {
        type: Types.CLEAR_SELECTED_TODO_SUCCESS,
        payload: item
    }
}


// error action ı koy