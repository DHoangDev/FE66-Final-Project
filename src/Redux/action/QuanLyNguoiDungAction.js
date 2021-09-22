import axios from 'axios'
import { qlNguoiDungService } from '../../services/QuanLyNguoiDungService'
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/setting';
import { DANG_NHAP } from './type/type';


export const dangKyAction = (thongTinNguoiDung) => {

    return async dispatch => {
        try {

            const result = await qlNguoiDungService.dangKyService(thongTinNguoiDung);

            //Sau khi đăng nhập thành công => chuyển hướng trang

            console.log({result})

        }catch (error) {
            console.log({error})
            console.log(error.response?.data)
        }

    }
}

export const dangNhapAction =(thongTinNguoiDung)=>{
    return async dispatch =>{
        try{
            const result = await qlNguoiDungService.dangNhapService(thongTinNguoiDung);
            // if(result.data.statusCode === 200){
            //     localStorage.setItem(USER_LOGIN,JSON.stringify(result.data.content));
            //     localStorage.setItem(ACCESS_TOKEN,result.data.content.accessToken)
            //     dispatch({
            //         type:DANG_NHAP,
            //         userLogin: result.data.content
            //     })
            // }
           
            console.log('result',result)
        }catch(err){
            console.log(err)
            console.log(err.response?.data)
        }
    }
}
