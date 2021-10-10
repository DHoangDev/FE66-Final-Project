import { ThongTinDatVe } from "../_core/models/ThôngTinDatVe";
import { baseService } from "./baseService";


export class QuanLyDatVeService extends baseService{
   

    layChiTietPhongVe =(maLichChieu)=>{
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,'',null)
    }
    
    datVe =(thongTinDatVe = new ThongTinDatVe())=>{ // đưa thông tin rỗng về API
        return this.post(`api/QuanLyDatVe/DatVe`,thongTinDatVe);
    }
}

export const qlDatVeService = new QuanLyDatVeService()