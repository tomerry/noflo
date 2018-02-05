import * as actions from './action-types';

export const addMessage = (modal, type, message) => (dispatch) => {
    dispatch({
        type:    actions.MODAL_ERROR_MESSAGE,
        modal:   modal,
        message: {
            type:    type,
            message: message
        }
    });
};


export const openModal = (modal) => (dispatch) => {
    dispatch({
        type:  actions.MODAL_OPEN,
        modal: modal
    });

};


export const closeModal = (modal) => (dispatch) => {
    dispatch({
        type:  actions.MODAL_CLOSE,
        modal: modal
    });
};