import React, { useRef } from 'react'
import loginAnimated from '../../js/login.js'
import './Login.css'
import Register from '../Login/Register/Register.js'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { dangNhapAction } from '../../Redux/action/QuanLyNguoiDungAction.js'
import * as Yup from 'yup';

window.onload = function(){
  loginAnimated()
}
export default function Login(props) {

  const dispatch = useDispatch()
    const formik = useFormik({
      initialValues:{
          taiKhoan: '',
          matKhau: '',
      },
      validationSchema:  Yup.object().shape({
        taiKhoan: Yup.string().required('Không được bỏ trống'),
        matKhau: Yup.string().required('Mật khẩu không được bỏ trống!').min(6,'Mật khẩu từ 6 - 32 ký tự !').max(32,'Mật khẩu từ 6 - 32 ký tự !')
        // email: Yup.string().required('Email không được bỏ trống!').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Email không hợp lệ'),
       
      }),
      onSubmit:(value)=>{
        console.log('value',value)
        dispatch(dangNhapAction(value))

      }
    })

    return (
        <div className="bg-login">
  <div className="forms-container">
    <div className="signin-signup">
      <form  className="sign-in-form" onSubmit={formik.handleSubmit} >
        <h2 className="title">Đăng Nhập</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input name="taiKhoan" type="text" placeholder="Tài Khoản" onChange={formik.handleChange}/>
          <div className="text text-danger">{formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div>{formik.errors.taiKhoan}</div>) : null}</div>
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input name="matKhau" type="password" placeholder="Mật Khẩu" onChange={formik.handleChange}/>
          <div className="text text-danger">{formik.errors.matKhau && formik.touched.matKhau ? (<div>{formik.errors.matKhau}</div>) : null} </div>
        </div>
        <button type="submit" className="btn solid"  >Xác nhận</button>
        
        <p className="social-text">Or Sign in with social platforms</p>
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

     <Register />

    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>Tạo tài khoản!!!!</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          ex ratione. Aliquid!
        </p>
        <button className="btn transparent" id="sign-up-btn">
          Đăng Ký
        </button>
      </div>
      <img src="./assets/images/kisspng-ticket-film-cinema-cinema-ticket-5abf0992ef7f17.897789881522469266981.png" className="image singin" alt="" />
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>Đăng nhập tại đây !!!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laboriosam ad deleniti.
        </p>
        <button className="btn transparent" id="sign-in-btn">
          Đăng Nhập
        </button>
      </div>
      <img src='./assets/images/PngItem_3014574.png' className="image right" alt='' />
    </div>
  </div>
  </div>

    )
    
}
