import {LOGOUT_CURRENT_USER,RECEIVE_CURRENT_USER,} from "../actions/session_action";

const nullState = Object.freeze({
    id: null
});

const sessionReducer = (state = nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return { id: action.user.id };
            return Object.assign({}, state, {id: action.user.id});
        case LOGOUT_CURRENT_USER:
            // const nextState = { ...defaultState };
            // delete nextState.user.id;
            // deletes nextState.user.email;
            return nullState;
        default:
            return state;
    }
};

export default sessionReducer;