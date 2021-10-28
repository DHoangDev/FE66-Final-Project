const stateDefault = {
    arrBannel: [],
}

export const BannelReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_DATA_BANNEL': {
            state.arrBannel = action.arrBannel
            return { ...state }
        }

        default:
            return state
    }
}
