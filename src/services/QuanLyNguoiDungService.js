import { baseService } from './BaseService'

export class QuanLyNguoiDungService extends baseService {

    dangNhapService = (thongTinNguoiDung) => {
        return this.post('api/QuanLyNguoiDung/DangNhap', thongTinNguoiDung)
    }
    dangKyService = (thongTinNguoiDung) => {
        return this.post('api/QuanLyNguoiDung/DangKy', thongTinNguoiDung)
    }
    layThongTinNguoiDung =()=>{
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }

}
export const qlNguoiDungService = new QuanLyNguoiDungService()