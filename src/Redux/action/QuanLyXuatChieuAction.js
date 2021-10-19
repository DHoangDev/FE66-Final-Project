import axios from 'axios';

import { qlXuatChieuService } from '../../Services/QuanLyXuatChieuService';
import {
    SET_CHI_TIET_PHIM,
    SET_DATA_RAP,
    SET_DATA_CUM_RAP_THEO_HE_THONG,
    SET_DATA_CUM_RAP,
    SET_DATA_LICH_CHIEU,
} from './Type/QuanLyxuatChieu';

export const rapChieuAction = () => {
    return async dispatch => {
        try {

            const result = await qlXuatChieuService.getRapChieu();
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_DATA_RAP,
                    arrRap: result.data.content,
                });
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
} // Admin Lich chieu + Home Xuat chieu
export const cumRapTheoHeThongAction = (data) => {
    return async dispatch => {
        try {

            const result = await qlXuatChieuService.getCumRap(data);
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: SET_DATA_CUM_RAP_THEO_HE_THONG,
                    arrCumRapTheoHeThong: result.data.content,
                });
            }

        } catch (err) {
            console.log(err)
            console.log(err.response?.data)
        }
    }
} // Admin Lich chieu
export const cumRapAction = (data, maNhom) => {
    return async dispatch => {
        try {

            const result = await qlXuatChieuService.getXuatChieu(data, maNhom);
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: SET_DATA_CUM_RAP,
                    arrCumRap: result.data.content[0],
                });
            }

        } catch (err) {
            console.log(err)
            console.log(err.response?.data)
        }
    }
} // Admin Lich chieu + Home Xuat chieu
export const layThongTinChiTietPhim = (maPhim) => {
    return async dispatch => {
        try {
            const result = await qlXuatChieuService.getThongTinLichChieu(maPhim);
            console.log({ result })
            dispatch({
                type: SET_CHI_TIET_PHIM,
                filmDetail: result.data.content
            })
        } catch (err) {
            console.log(err)
            console.log(err.response?.data)
        }
    }
}