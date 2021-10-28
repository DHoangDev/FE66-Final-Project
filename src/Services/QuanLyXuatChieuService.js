import { BaseService } from './BaseService'

export class QuanLyXuatChieuService extends BaseService {

    getRapChieu = () => {
        return this.get('api/QuanLyRap/LayThongTinHeThongRap', '', null)
    } // Admin Lich chieu + Home Xuat chieu
    getCumRap = (data) => {
        return this.get('api/QuanLyRap/LayThongTinCumRapTheoHeThong', `?maHeThongRap=${data}`, null)
    } // Admin Lich chieu
    getXuatChieu = (maHeThongRap, maNhom) => {
        return this.get('api/QuanLyRap/LayThongTinLichChieuHeThongRap', `?maHeThongRap=${maHeThongRap}`, `&maNhom=${maNhom}`)
    } // Admin Lich chieu + Home Xuat chieu
    getThongTinLichChieu = (maPhim) => {
        return this.get('api/QuanLyRap/LayThongTinLichChieuPhim', `?MaPhim=${maPhim}`, null)
    }

}
export const qlXuatChieuService = new QuanLyXuatChieuService()