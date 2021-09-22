import {baseService} from './baseService'

export class QuanLyNguoiDungService extends baseService{
    
    dangNhapService=(thongTinNguoiDung)=>{
        return this.post('api/QuanLyNguoiDung/DangNhap',thongTinNguoiDung)
    }
    dangKyService =(thongTinNguoiDung)=>{
        return this.post('api/QuanLyNguoiDung/DangKy',thongTinNguoiDung)
    }
}
export const qlNguoiDungService = new QuanLyNguoiDungService()