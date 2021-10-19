import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'
import './Login.css';
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
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required('Không được bỏ trống'),
      matKhau: Yup.string().required('Mật khẩu không được bỏ trống!').min(6, 'Mật khẩu từ 6 - 32 ký tự !').max(32, 'Mật khẩu từ 6 - 32 ký tự !'),
      email: Yup.string().required('Email không được bỏ trống!').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email không hợp lệ'),
      hoTen: Yup.string().required('Họ và tên không được bỏ trống!'),
      soDt: Yup.string().required('Số Điện thoại không được bỏ trống!').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number không hợp lệ'),
    }),
    onSubmit: (values) => {
      console.log({ values });
      //gọi action api 
      const action = dangKyAction(values);

      dispatch(action)

    }
  });

  // const myRef = useRef(null);
  // const resetForm =()=>{
  //   myRef.current.reset()
  // }
  // ref={(el)=>{myRef.current === el}}
  return (
    <form name='formRe' onSubmit={formik.handleSubmit} className="sign-up-form" >
      <h2 className="title">Đăng Ký</h2>
      <div className="input-field">
        <i className="fas fa-user" />
        <input name="taiKhoan" type="text" placeholder="Tài Khoản" onChange={formik.handleChange} />

      </div>
      <div className="text text-danger">{formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div>{formik.errors.taiKhoan}</div>) : null}</div>
      <div className="input-field">
        <i className="fas fa-envelope" />
        <input name="email" type="email" placeholder="Email" onChange={formik.handleChange} />
      </div>
      <div className="text text-danger">{formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>) : null}</div>

      <div className="input-field">
        <i className="fas fa-lock" />
        <input name="matKhau" type="password" placeholder="Mật Khẩu" onChange={formik.handleChange} />
      </div>
      <div className="text text-danger">{formik.errors.matKhau && formik.touched.matKhau ? (<div>{formik.errors.matKhau}</div>) : null}</div>

      <div className="input-field">
        <i className="fas fa-user" />
        <input name="hoTen" type="text" placeholder="Họ và Tên" onChange={formik.handleChange} />
      </div>
      <div className="text text-danger">{formik.errors.hoTen && formik.touched.hoTen ? (<div>{formik.errors.hoTen}</div>) : null}</div>

      <div className="input-field">
        <i className="fas fa-phone" />
        <input name="soDt" type="text" placeholder="Số Điện Thoại" onChange={formik.handleChange} />
      </div>
      <div className="text text-danger">{formik.errors.soDt && formik.touched.soDt ? (<div>{formik.errors.soDt}</div>) : null}</div>
      <button type="submit" className="button solid">Xác nhận</button>
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
