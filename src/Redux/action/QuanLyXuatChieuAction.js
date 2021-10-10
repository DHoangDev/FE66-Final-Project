import axios from 'axios';

import { qlXuatChieuService } from '../../Services/QuanLyXuatChieuService';

export const rapChieuAction = () => {
    return async dispatch => {
        try {

            const result = await qlXuatChieuService.getRapChieu();
            if (result.data.statusCode === 200) {
                dispatch({
                    type: 'SET_DATA_RAP',
                    arrRap: result.data.content,
                });
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const cumRapTheoHeThongAction = (data) => {
    return async dispatch => {
        try {

            const result = await qlXuatChieuService.getCumRap(data);
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: 'SET_DATA_CUM_RAP_THEO_HE_THONG',
                    arrCumRapTheoHeThong: result.data.content,
                });
                await dispatch({
                    type: 'RAP_THEO_CUM_RAP',
                    arrRapTheoCumRap: result.data.content[0].maCumRap,
                })
            }

        } catch (err) {
            console.log(err)
            console.log(err.response?.data)
        }
    }
}
export const cumRapAction = (data, maNhom) => {
    return async dispatch => {
        try {

            const result = await qlXuatChieuService.getXuatChieu(data, maNhom);
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: 'SET_DATA_CUM_RAP',
                    arrCumRap: result.data.content[0],
                });
            }

        } catch (err) {
            console.log(err)
            console.log(err.response?.data)
        }
    }
}
export const lichChieuAction = (data, maCumRap, maNhom) => {
    return async dispatch => {
        try {

            const result = await qlXuatChieuService.getXuatChieu(data, maNhom);
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: 'SET_DATA_LICH_CHIEU',
                    arrLichChieu: result.data.content[0].lstCumRap,
                    maCumRap: maCumRap,
                });
            }

        } catch (err) {
            console.log(err)
            console.log(err.response?.data)
        }
    }
}