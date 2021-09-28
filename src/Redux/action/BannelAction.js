import axios from 'axios';

import { bannelService } from '../../Services/BannelService';

export const bannelAction = () => {
    return async dispatch => {
        try {

            const result = await bannelService.getBannel();
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: 'SET_DATA_BANNEL',
                    arrBannel: result.data.content,
                });
            }

        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}