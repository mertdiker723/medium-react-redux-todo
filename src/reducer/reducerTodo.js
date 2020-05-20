import { Types } from '../action/action-type';

export function todoReducer(state = [], action) {
    switch (action.type) {
        case Types.ADD_TODO_SUCCESS:
            return [...state, action.payload];
        case Types.DELETE_TODO_SUCCESS:
            return state.filter(item => item.id !== action.payload.id);
        case Types.UPDATE_TODO_SUCCESS:
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
        case Types.COMPLETED_TODO_SUCCESS:
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
        default:
            return state;
    }
}

export function oneTodoReducer(state = [], action) {
    switch (action.type) {
        case Types.GETONE_TODO_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

export function showButtonReducer(state = false, action) {
    switch (action.type) {
        case Types.SHOWBUTTON_TODO_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}