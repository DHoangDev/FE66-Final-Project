import axios from 'axios';

import { phimService } from '../../Services/PhimService';

export const phimAction = (maNhom) => {
    return async dispatch => {
        try {

            const result = await phimService.getPhim(maNhom);
            console.log(result.data.content)
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