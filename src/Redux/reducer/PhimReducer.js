import { SET_CHI_TIET_PHIM } from "../Action/Type/QuanLyxuatChieu"

const stateDefault = {
    arrPhim: [],
    arrPhimTemp: [],
    filmDetail: {}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_DATA_PHIM': {
            state.arrPhim = action.arrPhim
            state.arrPhimTemp = action.arrPhim
            return { ...state }
        }
        case 'SEARCH_FILM': {
            let arrPhimUpdate = [...state.arrPhimTemp];
            if (action.taiKhoan !== "") {
                let phimSearching = arrPhimUpdate.filter(value => value.tenPhim.toUpperCase().includes(action.tenPhim.toUpperCase()))
                if (phimSearching.length !== 0) {
                    state.arrPhim = phimSearching
                } else {
                    state.arrPhim = ""
                }
            } else {
                state.arrPhim = state.arrPhimTemp
            }
            return { ...state }
        }
        case SET_CHI_TIET_PHIM: {
            return { ...state, filmDetail: action.filmDetail }
        }
        default:
            return { ...state }
    }
}