const stateDefault = {
    arrPhim: [],
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_DATA_PHIM': {
            state.arrPhim = action.arrPhim
            return { ...state }
        }

        default:
            return { ...state }
    }
}