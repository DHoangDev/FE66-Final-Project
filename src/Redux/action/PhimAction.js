import axios from 'axios';
import swal from 'sweetalert';

import { phimService } from '../../Services/PhimService';

export const phimAction = (maNhom) => {
    return async dispatch => {
        try {

            const result = await phimService.getPhim(maNhom);
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: 'SET_DATA_PHIM',
                    arrPhim: result.data.content,
                });
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const addPhimAction = (data) => {
    return async dispatch => {
        try {

            const result = await phimService.addPhim(data);
            if (result.data.statusCode === 200) {
                swal('Successfully !', 'Thêm Phim Thành Công !', 'success')
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
export const deletePhimAction = (data) => {
    return async dispatch => {
        try {

            const result = await phimService.deletePhim(data);
            if (result.data.statusCode === 200) {
                swal('Deleted !', 'Xóa Phim Thành Công !', 'success')
                window.location.reload()
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}