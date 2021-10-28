import { BaseService } from './BaseService'

export class BannelService extends BaseService {

    getBannel = () => {
        return this.get('api/QuanLyPhim/LayDanhSachBanner', '', null)
    }

}
export const bannelService = new BannelService()