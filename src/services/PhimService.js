import { baseService } from './BaseService'

export class PhimService extends baseService {

    getPhim = (maNhom) => {
        return this.get('api/QuanLyPhim/LayDanhSachPhim', '', null)
    }

}
export const phimService = new PhimService()