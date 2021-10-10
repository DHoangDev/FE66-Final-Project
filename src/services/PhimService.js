import { baseService } from './BaseService'

export class PhimService extends baseService {

    getPhim = (maNhom) => {
        return this.get('api/QuanLyPhim/LayDanhSachPhim', '', `?maNhom=${maNhom}`)
    }
    addPhim = (data) => {
        return this.post('api/QuanLyPhim/ThemPhimUploadHinh', data)
    }
    deletePhim = (data) => {
        return this.delete('api/QuanLyPhim/XoaPhim', `?MaPhim=${data}`)
    }
}
export const phimService = new PhimService()