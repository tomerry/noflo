import * as actions from '../../actions/action-types';

const initialState = {
    buyTokens: {
        open: window.location.hash.indexOf('#buy') !== -1,
        errorMessage: null
    }
};

function modalReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case actions.MODAL_OPEN:
            //state[action.modal].open = true;
            newState = {...state};
            newState[action.modal].open = true;
            return newState;

        case actions.MODAL_CLOSE:
            newState = {...state};
            newState[action.modal].open = false;
            return newState;


        case actions.MODAL_ERROR_MESSAGE:
            newState = {...state};
            newState[action.modal].message = action.message;
            return newState;
        default:
            return state;
    }
}

export default modalReducer;