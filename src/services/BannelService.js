import { baseService } from './BaseService'

export class BannelService extends baseService {

    getBannel = () => {
        return this.get('api/QuanLyPhim/LayDanhSachBanner', '', null)
    }

}
export const bannelService = new BannelService()