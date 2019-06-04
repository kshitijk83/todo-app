import * as actionTypes from '../actionTypes';
import { utility } from './util'

const intialState = {
    input: 'asd',
    todos: [{ key: 'blah' }, { key: 'hehe' }]
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INGREDIENT:
            const newState = { ...state, input: action.input };
            return newState;

        case actionTypes.ADD_INGREDIENT:
            const todos = [...state.input];
            todos.push(action.payload);
            return {
                ...state,
                todos: todos
            };

        default:
            return state;
    }
}

export default reducer;