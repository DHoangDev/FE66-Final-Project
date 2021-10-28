import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseOutlined, UserOutlined, CheckOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { datVeAction, layChiTietPhongVeAction } from '../../../Redux/Action/QuanLyDatVeAction'
import './BookingTicket.css'
import _ from 'lodash';
import { Tabs } from 'antd';
import { CHUYEN_TAB_ACTIVE, DAT_VE } from '../../../Redux/Action/Type/QuanLyDatVeType';
import { ThongTinDatVe } from '../../../_core/models/ThôngTinDatVe';
import { thongTinNguoiDungAction } from '../../../Redux/Action/QuanLyNguoiDungAction';
import moment from 'moment'
import { QuanLyNguoiDungService } from '../../../Services/QuanLyNguoiDungService';
import { QuanLyNguoiDungReducer } from '../../../Redux/Reducer/QuanLyNguoiDungReducer';
import { history } from '../../../App';
import { ACCESS_TOKEN, USER_LOGIN } from '../../../Util/Setting';


function BookingTicket(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer)

    console.log({ chiTietPhongVe })
    const dispatch = useDispatch()

    useEffect(() => {
        //id lấy từ url
        let { id } = props.match.params
        dispatch(layChiTietPhongVeAction(id))





    }, [])
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    const renderGhe = () => {
        return danhSachGhe.slice(0, 40).map((ghe, index) => {
            let gheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
            let gheDaDat = ghe.daDat === true ? 'gheDaDat' : '';

            //test có ghế khách khác đặt
            let classGheKhachDat = ''
            let indexGheKD = danhSachGheKhachDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
            if (indexGheKD !== -1) {
                classGheKhachDat = 'gheKhachDat'
            }



            let classUserDatGhe = '';
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classUserDatGhe = 'gheUserDat'
            }

            //test từng ghế trong mảng
            let classGheDangDat = '';
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
            if (indexGheDD !== -1) {
                classGheDangDat = 'gheDangDat'
            }
            return <Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe
                    })
                }}
                    disabled={ghe.daDat || classGheKhachDat !== ''} className={`ghe ${gheVip} ${gheDaDat} ${classGheDangDat} ${classUserDatGhe} ${classGheKhachDat}`}>

                    {ghe.daDat ? classUserDatGhe !== '' ? <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : classGheKhachDat !== '' ? <UserSwitchOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : ghe.stt}

                </button>
                {(index + 1) % 8 === 0 ? <br /> : ''}
            </Fragment>
        })
    }
    return (
        <div>
            <div className="rsp d-flex">
                <div className="col-sm-9 col-12">
                    <div className="text-center font-weight-bold mt-5">Màn Hình</div>
                    <div className="d-flex flex-column align-items-center">
                        <div style={{ backgroundColor: '#c75800', width: '80%', height: 15 }}>
                        </div>
                        <div id='trapezoid' className="text-center">
                        </div>
                        <div>
                            {renderGhe()}
                        </div>
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        <table className="table" style={{ border: 'none' }}>
                            <thead>
                                <tr>
                                    <th>Ghế chưa đặt</th>
                                    <th>Ghế đang đặt</th>
                                    <th>Ghế đã đặt</th>
                                    <th>Ghế vip</th>
                                    <th>Ghế quý khách đặt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><button className="ghe text-center" ><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className="ghe gheDangDat text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className="ghe gheDaDat text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className="ghe gheVip text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>

                                    <td><button className="ghe gheUserDat text-center"><UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-sm-3 col-12 mt-4 rspr" style={{ boxShadow: '1px 6px 12px -5px #888' }}>
                    <h3 className="text-center display-6 text-success font-weight-bold">
                        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                            return tongTien += ghe.giaVe;
                        }, 0).toLocaleString('de-DE')} VNĐ</h3>
                    <hr />
                    <h6 className="font-weight-bold">{thongTinPhim.tenPhim}</h6>
                    <div className="d-flex flex-column justify-content-around">
                        <p>Địa điểm: {thongTinPhim.tenCumRap}</p>
                        <p>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <span style={{ fontSize: '20px' }} className="text-danger display-8">Ghế: </span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span key={index} className="text-success"> {gheDD.stt}</span>
                            })}
                        </div>
                        <div className="col-6 text-right">
                            <span style={{ fontSize: '20px' }}>
                                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString('de-DE')} VNĐ
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">Email:</span> <br />
                        <span>{userLogin.email}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">Số Điện Thoại:</span><br />
                        <span>{userLogin.soDT}</span>
                    </div>
                    <hr />
                    <div className="mb-0 h-25 d-flex flex-column justify-content-end align-items-center">
                        <div className="text-white w-100 text-center py-2 font-weight-bold bg-orange" style={{ cursor: 'pointer' }} onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe()
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat;

                            dispatch(datVeAction(thongTinDatVe));
                        }}>
                            Đặt vé
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const { TabPane } = Tabs;



export default function BookingSteps(props) {

    const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
    const dispatch = useDispatch();
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const OperationsSlot = {
        left: <a href='/home'>
            <img className="logo" width={50} src="https://fe-66-final-project.vercel.app/assets/images/web-logo.png" alt='...'></img>
        </a>,
        right: <Fragment>
            {localStorage.getItem(USER_LOGIN) ? <Fragment> <div onClick={() => {

            }}><div style={{ cursor: 'pointer', color: 'white', backgroundColor: '#c75800', borderRadius: '50%', width: '35px', height: '35px', margin: 'auto' }} className="d-flex align-items-center justify-content-center font-weight-bold">
                    {userLogin.hoTen.substr(0, 1)}
                </div>
                {userLogin?.hoTen}
            </div>
            </Fragment>
                : ''}
        </Fragment>,
    };


    return <div className="p-4">
        <Tabs centered tabBarExtraContent={OperationsSlot} className="bsnone" defaultActiveKey='1' activeKey={tabActive} onChange={(key => {
            dispatch({
                type: CHUYEN_TAB_ACTIVE,
                key: key.toString()
            })
        })}>
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
                <BookingTicket {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
                <BookingResult {...props} />
            </TabPane>
        </Tabs>
    </div>

};


function BookingResult(props) {

    const { thongTinNguoiDung, userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { loaiNguoiDung } = thongTinNguoiDung
    const dispatch = useDispatch();
    console.log({ thongTinNguoiDung })
    useEffect(() => {
        dispatch(thongTinNguoiDungAction())

    }, [])

    const renderTicket = () => {
        const { thongTinDatVe } = thongTinNguoiDung;

        return thongTinDatVe?.map((ticket, index) => {
            return <div className="col-lg-4" key={index}>
                <div className="card card-margin">
                    <div className="card-header no-border justify-content-center">
                        <h5 className="card-title " style={{ color: '#c75800', marginTop: '14px' }}>
                            {/* Lodash lấy ra phần tử trong mảng */}
                            {_.first(ticket.danhSachGhe).maHeThongRap}
                        </h5>
                    </div>
                    <div className="card-body pt-0">
                        <div className="widget-49">
                            <div className="widget-49-title-wrapper">
                                <div className="widget-49-date-primary">
                                    <span className="widget-49-date-day"><img width={60} height={60} className="rounded-circle" alt="..." src={ticket.hinhAnh} /></span>

                                </div>
                                <div className="widget-49-meeting-info">
                                    <span className="widget-49-pro-title font-weight-bold">{ticket.tenPhim}</span>
                                    <span className="widget-49-meeting-time">Ngày chiếu: {moment(ticket.ngayDat).format('DD-MM-YYYY')} & {moment(ticket.ngayDat).format('hh:mm A')}</span>
                                </div>
                            </div>
                            <ul className="widget-49-meeting-points">
                                <li className="widget-49-meeting-item">
                                    <span className="font-weight-bold">Tên Rạp: </span> {_.first(ticket.danhSachGhe).tenCumRap}
                                </li>
                                <li className="widget-49-meeting-item">
                                    <span className="font-weight-bold">Ghế:</span>{_.sortBy(ticket.danhSachGhe, ['tenGhe']).map((ghe, index) => {
                                        return <span style={{ color: '#c75800' }} key={index}>[{ghe.tenGhe}]</span>
                                    })}
                                </li>
                                <li className="widget-49-meeting-item"><span className="font-weight-bold">Giá vé:</span> {(ticket.giaVe * (ticket.danhSachGhe).length).toLocaleString('de-DE')} VNĐ</li>
                                <li className="widget-49-meeting-item"><span className="font-weight-bold">Địa chỉ: </span>{_.first(ticket.danhSachGhe).tenHeThongRap}</li>
                            </ul>
                            {/* <div className="widget-49-meeting-action">
                            <a href="/#" className="btn btn-sm btn-flash-border-primary">View All</a>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    const renderProfile = () => {
        return <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25"> <img src="https://fe-66-final-project.vercel.app/assets/images/avatar.png" className="img-radius" alt="..." /> </div>
                                        <h6 className="f-w-600">{thongTinNguoiDung.hoTen}</h6>
                                        <p>{loaiNguoiDung?.tenLoai}</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Thông Tin Khách Hàng</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Email</p>
                                                <h6 className="text-muted f-w-400">{thongTinNguoiDung.email}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Số điện thoại</p>
                                                <h6 className="text-muted f-w-400">{thongTinNguoiDung.soDT}</h6>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Địa chỉ</p>
                                                <h6 className="text-muted f-w-400">459 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Tài khoản</p>
                                                <h6 className="text-muted f-w-400">{thongTinNguoiDung.taiKhoan}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
    return <div className="container">
        {renderProfile()}
        <div className="text-center py-5">
            <h3 className="font-weight-bold" style={{ color: '#c75800' }}>Lịch sử đặt vé</h3>
            <i className="font-weight-bold">Chúc quý khách coi phim vui vẻ!</i>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-wrap">
            {renderTicket()}
        </div>
    </div>


}