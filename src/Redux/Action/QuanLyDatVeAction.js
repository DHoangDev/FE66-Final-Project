import { connection } from "../.."
import { qlDatVeService } from "../../Services/QuanLyDatVeService"
import swal from 'sweetalert';
import Swal from 'sweetalert2'

import { ThongTinDatVe } from "../../_core/models/ThôngTinDatVe"
import { DISPLAY_LOADING, HIDE_LOADING } from "./Type/LoadingType"
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./Type/QuanLyDatVeType"


export const layChiTietPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await qlDatVeService.layChiTietPhongVe(maLichChieu)

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }
        } catch (err) {
            console.log('err', err)
            console.log('err', err.response?.data)
        }
    }
}
export const taoLichChieuAction = (data) => {
    return async dispatch => {
        try {
            const result = await qlDatVeService.taoLichChieu(data)
            if (result.data.statusCode === 200) {
                swal('Successfully !', 'Tạo lịch chiêu thành công !', 'success')
            }
        } catch (err) {
            console.log('err', err)
            console.log('err', err.response?.data)
            swal({
                title: 'Error !',
                text: err.response?.data.content,
                icon: 'error'
            })
        }
    }
}
export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {

        try {
            const result = await qlDatVeService.datVe(thongTinDatVe);
            Swal.fire({
                icon: 'success',
                title: 'Đặt vé thành công',
                // text: 'Something went wrong!',
                confirmButtonText: 'OK',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    dispatch({
                        type: DISPLAY_LOADING
                    })
                }
            })
            //load lại trang khi thành công
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))

            // clear form khi đk thành công
            await dispatch({ type: DAT_VE_HOAN_TAT })

            await dispatch({ type: HIDE_LOADING })
            dispatch({ type: CHUYEN_TAB })

        } catch (err) {
            Swal.fire({
                icon: 'warning',
                title: '402',
                // text: 'Something went wrong!',
                confirmButtonText: 'OK',
            })
            dispatch({
                type: HIDE_LOADING
            })
            console.log('err', err);
            console.log('err', err.response?.data)
        }
    }
}
export const layThongTinPhimDatVe = (maPhim) => {
    return async dispatch => {
        try {
            const result = await qlDatVeService.getThongTinPhim(maPhim);
            console.log(result.data.content)
            dispatch({
                type: 'SET_CHI_TIET_PHIM',
                filmDetail: result.data.content
            })
        } catch (err) {
            console.log(err)
            console.log(err.response?.data)
        }
    }
}

