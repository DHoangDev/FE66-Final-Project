import { BaseService } from './BaseService'

export class PhimService extends BaseService {

    getPhim = (maNhom) => {
        return this.get('api/QuanLyPhim/LayDanhSachPhim', '', `?maNhom=${maNhom}`)
    }
    addPhim = (data) => {
        return this.post('api/QuanLyPhim/ThemPhimUploadHinh', data)
    }
    updatePhim = (data) => {
        return this.post('api/QuanLyPhim/CapNhatPhimUpload', data)
    }
    deletePhim = (data) => {
        return this.delete('api/QuanLyPhim/XoaPhim', `?MaPhim=${data}`)
    }
}
export const phimService = new PhimService()