const stateDefault = {
    arrRap: [],
    arrCumRapTheoHeThong: [],
    arrRapTheoCumRap: [],
    cumRap: '',
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

        case 'SET_DATA_CUM_RAP_THEO_HE_THONG':
            state.arrCumRapTheoHeThong = action.arrCumRapTheoHeThong
            return { ...state }

        case 'RAP_THEO_CUM_RAP':
            var newArrCumRapTheoHeThong = [...state.arrCumRapTheoHeThong]
            let rapSearching = newArrCumRapTheoHeThong.findIndex(value => value.maCumRap === action.arrRapTheoCumRap)
            state.cumRap = newArrCumRapTheoHeThong[rapSearching].tenCumRap
            state.arrRapTheoCumRap = newArrCumRapTheoHeThong[rapSearching].danhSachRap;
            return { ...state }

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
