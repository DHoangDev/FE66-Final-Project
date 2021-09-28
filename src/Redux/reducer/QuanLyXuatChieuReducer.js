const stateDefault = {
    arrRap: [],
    arrCumRap: [],
    arrCumRap_ChiTiet: [],
    arrLichChieu: [],
}

export const QuanLyXuatChieuReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_DATA_RAP': {
            state.arrRap = action.arrRap
            return { ...state }
        }

        case 'SET_DATA_CUM_RAP': {
            state.arrCumRap = action.arrCumRap
            state.arrCumRap_ChiTiet = action.arrCumRap.lstCumRap
            return { ...state }
        }

        case 'SET_DATA_LICH_CHIEU': {
            const vitri = action.arrLichChieu.findIndex(value => action.maCumRap === value.maCumRap)
            if (vitri !== -1) {
                state.arrLichChieu = action.arrLichChieu[vitri].danhSachPhim
            }
            return { ...state }
        }

        default:
            return state
    }
}
