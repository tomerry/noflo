import * as actions from '../../actions/action-types';

function bountyReducer(state = {}, action) {
    switch (action.type) {
        case 'currency.converter':
            return {
                ...state,
                payload: action.payload,
                rate: action.rate
            };

        default:
            return state;
    }
}

export default bountyReducer;