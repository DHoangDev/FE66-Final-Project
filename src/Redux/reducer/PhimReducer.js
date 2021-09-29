import { SET_CHI_TIET_PHIM } from "../Action/Type/QuanLyxuatChieu"

const stateDefault = {
    arrPhim: [],
    filmDetail:{}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_DATA_PHIM': {
            state.arrPhim = action.arrPhim
            return { ...state }
        }
        case SET_CHI_TIET_PHIM:{
            return{...state,filmDetail:action.filmDetail}
        }
        default:
            return { ...state }
    }
}