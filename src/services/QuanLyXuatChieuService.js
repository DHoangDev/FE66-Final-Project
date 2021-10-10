import { baseService } from './BaseService'

export class QuanLyXuatChieuService extends baseService {

    getRapChieu = () => {
        return this.get('api/QuanLyRap/LayThongTinHeThongRap', '', null)
    }
    getCumRap = (data) => {
        return this.get('api/QuanLyRap/LayThongTinCumRapTheoHeThong', `?maHeThongRap=${data}`, null)
    }
    getXuatChieu = (maHeThongRap, maNhom) => {
        return this.get('api/QuanLyRap/LayThongTinLichChieuHeThongRap', `?maHeThongRap=${maHeThongRap}`, `&maNhom=${maNhom}`)
    }

}
export const qlXuatChieuService = new QuanLyXuatChieuService()