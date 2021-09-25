import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

// import './Login.css';

import { dangKyAction } from '../../../Redux/Action/QuanLyNguoiDungAction';

export default function Register(props) {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      hoTen: '',
      maNhom: 'GP01'
    },
    onSubmit: (values) => {
      console.log({ values });
      //gọi action api 
      const action = dangKyAction(values);

      dispatch(action)

    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className="sign-up-form">
      <h2 className="title">Đăng Ký</h2>
      <div className="input-field">
        <i className="fas fa-user" />
        <input name="taiKhoan" type="text" placeholder="Tài Khoản" onChange={formik.handleChange} />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope" />
        <input name="email" type="email" placeholder="Email" onChange={formik.handleChange} />
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input name="matKhau" type="password" placeholder="Mật Khẩu" onChange={formik.handleChange} />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope" />
        <input name="hoTen" type="text" placeholder="Họ và Tên" onChange={formik.handleChange} />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope" />
        <input name="soDt" type="text" placeholder="Số Điện Thoại" onChange={formik.handleChange} />
      </div>
      <button type="submit" className="btn solid">Xác nhận</button>
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <a href="/#" className="social-icon">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="/#" className="social-icon">
          <i className="fab fa-twitter" />
        </a>
        <a href="/#" className="social-icon">
          <i className="fab fa-google" />
        </a>
        <a href="/#" className="social-icon">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </form>
  )
}
