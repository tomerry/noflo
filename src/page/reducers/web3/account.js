// In your reducer:
function accountReducer(state = {}, action) {
    switch (action.type) {
        case 'web3.receive_account':
            return {
                ...state,
                ethAddress: action.address,
                accountChanged: false
            };

        case 'web3.change_account':
            return {
                ...state,
                ethAddress: action.address,
                accountChanged: true
            };

        default:
            return state;
    }
}

export default accountReducer;