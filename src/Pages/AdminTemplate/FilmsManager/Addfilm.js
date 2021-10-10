import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { USER_LOGIN } from '../../../Util/Setting'
import {
    addPhimAction,
} from '../../../Redux/Action/PhimAction';

import {
    Form,
    Input,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';

export default function Addfilm() {
    const [imgSrc, setImgSrc] = useState('...');
    const [componentSize, setComponentSize] = useState('default');
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            danhGia: '',
            DangChieu: false,
            SapChieu: false,
            Hot: false,
            hinhAnh: '',
        },
        onSubmit: (values) => {
            let frmData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    frmData.append(key, values[key])
                } else {
                    frmData.append(key, values.hinhAnh, values.hinhAnh.name)
                }
                // log data of form data
                // console.log(key, frmData.get(key))
            }
            // console.log(values)
            dispatch(addPhimAction(frmData));
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

    const handleChangeDatePicker = (dateString) => {
        var m = new Date(dateString);
        var newDateString = ("0" + m.getUTCDate()).slice(-2) + "/" +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" + m.getUTCFullYear();
        //Convert from UTC time tring to "dd/MM/YYYY"

        // + "T" + ("00").slice(-2) + ":" + ("00").slice(-2) + ":" + ("00").slice(-2);
        formik.setFieldValue('ngayKhoiChieu', newDateString)
    }
    const handleChangeInputNumber = (value) => {
        formik.setFieldValue('danhGia', value)
    }
    const handleChangeSwitch = (checked, event) => {
        let { name } = event.target;
        formik.setFieldValue(name, checked)
    }
    const handleChangeInputFile = async (event) => {
        if (event.target.files.length > 0) {
            let file = event.target.files[0];
            await formik.setFieldValue('hinhAnh', file)

            let fileReader = new FileReader()
            fileReader.readAsDataURL(file);
            fileReader.onload = async (e) => {
                await setImgSrc(e.target.result);
            }   // Convert IMG data to base 64
        }
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const { TextArea } = Input;

    return (
        <Form onSubmitCapture={formik.handleSubmit} labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal"
            initialValues={{ size: componentSize, }} onValuesChange={onFormLayoutChange} size={componentSize} >
            <h3 className="text-center">Add New Film</h3>
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Tên phim">
                <Input name="tenPhim" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name="trailer" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Mô tả">
                <TextArea rows={4} name="moTa" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
                <DatePicker name="ngayKhoiChieu" format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
            </Form.Item>
            <Form.Item label="Đánh giá">
                <InputNumber type="number" name="danhGia" min="0" max="10" onChange={handleChangeInputNumber} />
            </Form.Item>
            <Form.Item label="Đang chiếu" valuePropName="checked">
                <Switch name="DangChieu" onChange={handleChangeSwitch} />
            </Form.Item>
            <Form.Item label="Sắp chiếu" valuePropName="checked">
                <Switch name="SapChieu" onChange={handleChangeSwitch} />
            </Form.Item>
            <Form.Item label="Hot" valuePropName="checked">
                <Switch name="Hot" onChange={handleChangeSwitch} />
            </Form.Item>
            <Form.Item label="Hình ảnh">
                <input type="file" name="hinhAnh" onChange={handleChangeInputFile}
                    accept="image/png, image/jpeg,image/gif,image/png" />
                <br></br>
                <img src={imgSrc} alt="..." width="300" />
            </Form.Item>
            <Form.Item label="Tác vụ">
                <button type="submit" className="btn btn-outline-success">Thêm phim</button>
            </Form.Item>
        </Form>
    )
}
