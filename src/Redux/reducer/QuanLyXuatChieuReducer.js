const stateDefault = {
    arrRap: [], // Admin lich chieu + Home Xuat chieu

    arrCumRapTheoHeThong: [], // Admin lich chieu
    arrCumRap_ChiTiet: [], // Admin lich chieu + Home Xuat chieu
    arrPhimTheoCumRap: [], // Admin lich chieu
    arrLichChieuTheoPhim: [], // Admin lich chieu

    arrDanhSachPhim: [], // Home Xuat chieu
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
        case 'SET_DATA_CUM_RAP': {
            state.arrCumRap_ChiTiet = action.arrCumRap.lstCumRap
            state.arrDanhSachPhim = []
            return { ...state }
        }


        case 'FIND_PHIM': {
            let arrCumRap_ChiTiet_Update = [...state.arrCumRap_ChiTiet]
            var data = arrCumRap_ChiTiet_Update.findIndex(value => value.maCumRap === action.maCumRap)
            if (data !== -1)
                state.arrPhimTheoCumRap = arrCumRap_ChiTiet_Update[data].danhSachPhim
            return { ...state }
        }
        case 'FIND_LICH_CHIEU_THEO_PHIM': {
            let arrPhimTheoCumRapUpdate = [...state.arrPhimTheoCumRap]
            var data = arrPhimTheoCumRapUpdate.findIndex(value => value.maPhim === Number(action.maPhim))
            if (data !== -1)
                state.arrLichChieuTheoPhim = arrPhimTheoCumRapUpdate[data].lstLichChieuTheoPhim
            return { ...state }
        }

        case 'FIND_CUM_RAP_XUAT_CHIEU': {
            let arrCumRap_ChiTiet_Update = [...state.arrCumRap_ChiTiet]
            var data = arrCumRap_ChiTiet_Update.findIndex(value => value.maCumRap === action.maCumRap)
            if (data !== -1)
                state.arrDanhSachPhim = arrCumRap_ChiTiet_Update[data].danhSachPhim
            state.lichChieuTheoPhim = []
            return { ...state }
        }

        default:
            return state
    }
}
