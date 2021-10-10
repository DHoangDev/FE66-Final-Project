import { qlDatVeService } from "../../Services/QuanLyDatVeService"
import { ThongTinDatVe } from "../../_core/models/ThôngTinDatVe"
import { DISPLAY_LOADING, HIDE_LOADING } from "./Type/LoadingType"
import { DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./Type/QuanLyDatVeType"




export const layChiTietPhongVeAction=(maLichChieu)=>{
    return async dispatch =>{
        try{
            const result = await qlDatVeService.layChiTietPhongVe(maLichChieu)
            
            if(result.data.statusCode === 200){
                dispatch({
                    type:SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }
            console.log({result})
        }catch(err){
            console.log('err',err)
            console.log('err',err.response?.data)
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe())=>{
    return async dispatch =>{

        try{

            dispatch({
                type:DISPLAY_LOADING
            })

            const result = await qlDatVeService.datVe(thongTinDatVe);
            console.log({result})
            //load lại trang khi thành công
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
        
            // clear form khi đk thành công
            dispatch({
                type:DAT_VE_HOAN_TAT
            })

            dispatch({
                type:HIDE_LOADING
            })

        }catch(err){
            dispatch({
                type:HIDE_LOADING
            })
            console.log('err',err);
            console.log('err',err.response?.data)
        }
    }
}