import React from 'react'

import './GioChieu.css';

export default function GioChieu({ arr }) {
    const reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;

    const ngayChieu = (arrValue) => {
        var arr = []
        for (let i = 0; i < arrValue.length; i++) {
            var dateArray = reggie.exec(arrValue[i].ngayChieuGioChieu);
            var object = { ngayChieu: `${dateArray[3]}-${dateArray[2]}`, maNgayChieu: `${dateArray[2]}-${dateArray[3]}` }
            if (arr.findIndex(value => value.maNgayChieu === object.maNgayChieu) === -1)
                arr.push(object)
        }
        return arr.map((value, index) => {
            return (
                <div className="col-4" key={index}>
                    <div className="ngay-chieu">
                        <p className="mb-2 pt-2"><b>Ngày Chiếu: {value.ngayChieu}</b></p>
                        <div className="box-gio-chieu"><span>Giờ: </span>{gioChieu(value.maNgayChieu, arrValue)}</div>
                    </div>
                </div>
            )
        })
    }
    const gioChieu = (date, arr) => {
        var newArr = arr.filter(value => value.ngayChieuGioChieu.includes(date))
        return newArr.map((value, index) => {
            var dateArray = reggie.exec(value.ngayChieuGioChieu);
            return (
                <a key={index} className="gio-chieu" href={`/BookingTicket/${value.maLichChieu}`}>
                    {`${dateArray[4]}:${dateArray[5]}`}
                </a>
            )
        })
    }

    return (
        <div className="row">
            {ngayChieu(arr)}
        </div>
    )
}
