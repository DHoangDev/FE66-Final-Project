import { baseService } from './BaseService'

export class QuanLyNguoiDungService extends baseService {

    dangNhapService = (thongTinNguoiDung) => {
        return this.post('api/QuanLyNguoiDung/DangNhap', thongTinNguoiDung)
    }
    dangKyService = (thongTinNguoiDung) => {
        return this.post('api/QuanLyNguoiDung/DangKy', thongTinNguoiDung)
    }
    getAdminService = () => {
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan', '')
    }
    getLoaiNguoiDung = () => {
        return this.get('api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung', '', null)
    }
    getNguoiDung = (maNhom) => {
        return this.get('api/QuanLyNguoiDung/LayDanhSachNguoiDung', '', `?MaNhom=${maNhom}`)
    }
    addNguoiDung = (data) => {
        return this.post('api/QuanLyNguoiDung/ThemNguoiDung', data)
    }
    editNguoiDung = (data) => {
        return this.post('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)
    }
    deleteNguoiDung = (data) => {
        return this.delete('/api/QuanLyNguoiDung/XoaNguoiDung', `?TaiKhoan=${data}`)
    }
}
export const qlNguoiDungService = new QuanLyNguoiDungService()