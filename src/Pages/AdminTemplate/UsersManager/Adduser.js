import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { GROUP_ID, USER_LOGIN } from '../../../Util/Setting'
import {
    loaiNguoiDungAction,
    addNguoiDungAction,
} from '../../../Redux/Action/QuanLyNguoiDungAction';

import {
    Form,
    Input,
    Radio,
    Select,
} from 'antd';

export default function Adduser() {

    const { arrLoaiNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const [componentSize, setComponentSize] = useState('default');
    const dispatch = useDispatch();

    useEffect(() => {
        const actionLoaiNguoiDung = loaiNguoiDungAction();
        dispatch(actionLoaiNguoiDung);
    }, [])

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: GROUP_ID,
            maLoaiNguoiDung: '',
            hoTen: '',
        },
        onSubmit: (values) => {
            dispatch(addNguoiDungAction(values));
        }
    })

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Đăng nhập để vào trang này !');
        return <Redirect to="/Home" />
    } else {
        let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
        if (userLogin.maLoaiNguoiDung !== "QuanTri") {
            alert('Không đủ quyền truy cập !');
            return <Redirect to="/Home" />
        }
    }

    const renderLoaiNguoiDung = () => {
        return arrLoaiNguoiDung.map((value, index) => {
            return <option value={value.maLoaiNguoiDung} key={index}>{value.tenLoai}</option>
        })
    }

    const handleChangeSelect = () => {
        formik.setFieldValue('maLoaiNguoiDung', document.getElementById('permissionUserFormControlSelect').value)
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <Form onSubmitCapture={formik.handleSubmit} labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal"
            initialValues={{ size: componentSize, }} onValuesChange={onFormLayoutChange} size={componentSize} >
            <h3 className="text-center">Thêm Người Dùng Mới</h3>
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Tên người dùng">
                <Input name="hoTen" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Tài khoản">
                <Input name="taiKhoan" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Mật khẩu">
                <Input.Password name="matKhau" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Email">
                <Input name="email" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Số điện thoại">
                <Input name="soDt" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Loại người dùng">
                <select class="custom-select" id="permissionUserFormControlSelect" onChange={handleChangeSelect}>
                    <option disabled selected hidden>Please choose ...</option>
                    {renderLoaiNguoiDung()}
                </select>
            </Form.Item>
            <Form.Item label="Tác vụ">
                <button type="submit" className="btn btn-outline-success">Thêm người dùng</button>
            </Form.Item>
        </Form>
    )
}
