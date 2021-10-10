import { history } from '../../App';
import { qlNguoiDungService } from '../../Services/QuanLyNguoiDungService'
import { ACCESS_TOKEN, USER_LOGIN } from '../../Util/Setting';
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG } from "../Action/Type/QuanLyNguoiDungType"
import { DISPLAY_LOADING, HIDE_LOADING } from './Type/LoadingType';
import Swal from 'sweetalert2'

export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.dangKyService(thongTinNguoiDung);
            if(result.data.statusCode ===200){            
                Swal.fire({
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
            console.log({result})
        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}

export const dangNhapAction =(thongTinNguoiDung)=>{
    return async dispatch =>{  
        dispatch({
            type:DISPLAY_LOADING,
        })         
        
        try{
            const result = await qlNguoiDungService.dangNhapService(thongTinNguoiDung);
            
            if(result.data.statusCode === 200){
                //lưu vào localStorage
                localStorage.setItem(USER_LOGIN,JSON.stringify(result.data.content));
                localStorage.setItem(ACCESS_TOKEN,result.data.content.accessToken)
                dispatch({
                    type:DANG_NHAP,
                    userLogin: result.data.content
                }) 
                history.goBack()
                                   
            }          
            console.log('result',result)
            setTimeout(()=>{
                dispatch({
                    type:HIDE_LOADING,
                }) 
            },1500)
            
        }catch(err){
            dispatch({
                type:HIDE_LOADING,
            }) 
            console.log(err)
            console.log(err.response?.data)
        }
        
        
    }
}

export const thongTinNguoiDungAction = () => {
    return async dispatch => {
        try {

            const result = await qlNguoiDungService.layThongTinNguoiDung();
            if(result.data.statusCode ===200){            
                dispatch({
                    type:SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })        
            }
            console.log({result})
        } catch (error) {
            console.log({ error })
            console.log(error.response?.data)
        }
    }
}
