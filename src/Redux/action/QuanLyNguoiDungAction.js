import axios from 'axios';
import swal from 'sweetalert';

import { qlNguoiDungService } from '../../Services/QuanLyNguoiDungService';
import { ACCESS_TOKEN, USER_LOGIN } from '../../Util/Setting';

export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.dangKyService(thongTinNguoiDung);
            //Sau khi đăng nhập thành công => chuyển hướng trang
            console.log({ result })

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const dangNhapAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.dangNhapService(thongTinNguoiDung);
            if (result.data.statusCode === 200) {
                localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
                localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken)
                dispatch({
                    type: 'DANG_NHAP',
                    userLogin: result.data.content
                })
            }

            console.log('result', result)
        } catch (err) {
            console.log(err)
            console.log(err.response?.data)
        }
    }
}
export const adminAction = () => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.getAdminService();
            if (result.data.statusCode === 200) {
                console.log(result.data.content)
                await dispatch({
                    type: 'SET_ADMIN',
                    arrAdmin: result.data.content,
                });
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const loaiNguoiDungAction = () => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.getLoaiNguoiDung();
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: 'SET_LOAI_NGUOI_DUNG',
                    arrLoaiNguoiDung: result.data.content,
                });
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const nguoiDungAction = (maNhom) => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.getNguoiDung(maNhom);
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: 'SET_NGUOI_DUNG',
                    arrNguoiDung: result.data.content,
                });
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const addNguoiDungAction = (data) => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.addNguoiDung(data);
            if (result.data.statusCode === 200) {
                swal('Successfully !', 'Thêm Người Dùng Thành Công !', 'success')
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const editNguoiDungAction = (data) => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.editNguoiDung(data);
            if (result.data.statusCode === 200) {
                swal('Edited !', 'Cập Nhật Người Dùng Thành Công !', 'success')
                window.location.reload()
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const deleteNguoiDungAction = (data) => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.deleteNguoiDung(data);
            if (result.data.statusCode === 200) {
                swal('Deleted !', 'Xóa Người Dùng Thành Công !', 'success')
                window.location.reload()
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}