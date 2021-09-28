import { baseService } from './BaseService'

export class QuanLyXuatChieuService extends baseService {

    getRapChieu = () => {
        return this.get('api/QuanLyRap/LayThongTinHeThongRap', '', null)
    }
    getXuatChieu = (maHeThongRap, maNhom) => {
        return this.get('api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=', maHeThongRap, maNhom)
    }

}
export const qlXuatChieuService = new QuanLyXuatChieuService()