import { ThongTinDatVe } from "../_core/models/ThôngTinDatVe";
import { BaseService } from "./BaseService";


export class QuanLyDatVeService extends BaseService {

    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`, '', null)
    }
    taoLichChieu = (data) => {
        return this.post('api/QuanLyDatVe/TaoLichChieu', data)
    }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => { // đưa thông tin rỗng về API
        return this.post(`api/QuanLyDatVe/DatVe`, thongTinDatVe);
    }
    getThongTinPhim = (maPhim) => {
        return this.get('api/QuanLyRap/LayThongTinLichChieuPhim', `?MaPhim=${maPhim}`, null)
    }
}

export const qlDatVeService = new QuanLyDatVeService()