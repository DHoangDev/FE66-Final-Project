import { baseService } from './BaseService'

export class QuanLyXuatChieuService extends baseService {

    getRapChieu = () => {
        return this.get('api/QuanLyRap/LayThongTinHeThongRap', '', null)
    }
    getXuatChieu = (maHeThongRap, maNhom) => {
        return this.get('api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=', maHeThongRap, maNhom)
    }
    getThongTinLichChieu=(maPhim)=>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,'',null)
    }

}
export const qlXuatChieuService = new QuanLyXuatChieuService()