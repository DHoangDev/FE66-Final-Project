import { history } from '../../App';
import { qlNguoiDungService } from '../../Services/QuanLyNguoiDungService'
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

import { ACCESS_TOKEN, USER_LOGIN } from '../../Util/Setting';

import {
    DANG_NHAP,
    SET_THONG_TIN_NGUOI_DUNG,
    SET_ADMIN,
    SET_LOAI_NGUOI_DUNG,
    SET_NGUOI_DUNG
} from "./Type/QuanLyNguoiDungType"
import { DISPLAY_LOADING, HIDE_LOADING } from './Type/LoadingType';

export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await qlNguoiDungService.dangKyService(thongTinNguoiDung);
            if (result.data.statusCode === 200) {
                swal.fire({
                    icon: 'success',
                    title: 'Đăng ký thành công',
                    // text: 'Something went wrong!',
                    confirmButtonText: 'OK',
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        window.location.reload()
                    }
                })
            }
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
                dispatch({
                    type: DISPLAY_LOADING,
                })
                //lưu vào localStorage
                localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
                localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken)
                dispatch({
                    type: DANG_NHAP,
                    userLogin: result.data.content
                })
                history.goBack()

            }
            setTimeout(() => {
                dispatch({
                    type: HIDE_LOADING,
                })
            }, 1500)

        } catch (err) {
            Swal.fire({
                icon: 'warning',
                title: 'Tài khoản hoặc mật khẩu sai',
                // text: 'Something went wrong!',
                confirmButtonText: 'OK',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    dispatch({
                        type: HIDE_LOADING,
                    })
                }
            })

            console.log(err)
            console.log(err.response?.data)
        }


    }
}
export const thongTinNguoiDungAction = () => {
    return async dispatch => {
        try {
            dispatch({
                type: DISPLAY_LOADING,
            })
            const result = await qlNguoiDungService.layThongTinNguoiDung();
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })
                dispatch({
                    type: HIDE_LOADING,
                })
            }
        } catch (error) {
            dispatch({
                type: HIDE_LOADING,
            })
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const adminAction = () => {
    return async dispatch => {
        try {
            dispatch({
                type: DISPLAY_LOADING
            })
            const result = await qlNguoiDungService.getAdminService();

            if (result.data.statusCode === 200) {
                await dispatch({
                    type: SET_ADMIN,
                    arrAdmin: result.data.content,
                });
                dispatch({
                    type: HIDE_LOADING
                })
            }

        } catch (error) {
            dispatch({
                type: HIDE_LOADING
            })
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
                    type: SET_LOAI_NGUOI_DUNG,
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
                    type: SET_NGUOI_DUNG,
                    arrNguoiDung: result.data.content,
                });
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const nguoiDungPhanTrangAction = (maNhom, soPhanTu) => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.getNguoiDungPhanTrang(maNhom, soPhanTu);
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: SET_NGUOI_DUNG,
                    arrNguoiDung: result.data.content.items,
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
                swal({
                    title: 'Edited !',
                    text: 'Cập Nhật Người Dùng Thành Công !',
                    icon: 'success'
                }).then(() => {
                    window.location.reload()
                })
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
                swal({
                    title: 'Deleted !',
                    text: 'Xóa Người Dùng Thành Công !',
                    icon: 'success'
                }).then(() => {
                    window.location.reload()
                })
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}