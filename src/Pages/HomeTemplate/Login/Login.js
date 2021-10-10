import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import './Login.css';
import Register from "./Register.js";
import { dangNhapAction } from "../../../Redux/Action/QuanLyNguoiDungAction";

export default function Login(props) {
  
  document.addEventListener("DOMContentLoaded", () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".bg-login");
    
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
    
    
      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
     
  });

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Không được bỏ trống"),
      matKhau: Yup.string()
        .required("Mật khẩu không được bỏ trống!")
        .min(6, "Mật khẩu từ 6 - 32 ký tự !")
        .max(32, "Mật khẩu từ 6 - 32 ký tự !"),
    }),
    onSubmit: (value) => {
      console.log("value", value);
      dispatch(dangNhapAction(value));
    },
  });

  return (
    <div className="bg-login">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={formik.handleSubmit}>
            <h2 className="title">Đăng Nhập</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                name="taiKhoan"
                type="text"
                placeholder="Tài Khoản"
                onChange={formik.handleChange}
              />     
            </div>
            <div className="text text-danger">
                {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
                  <div>{formik.errors.taiKhoan}</div>
                ) : null}
              </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                name="matKhau"
                type="password"
                placeholder="Mật Khẩu"
                onChange={formik.handleChange}
              />
            </div>
            <div className="text text-danger text-left">
                {formik.errors.matKhau && formik.touched.matKhau ? (
                  <div>{formik.errors.matKhau}</div>
                ) : null}{" "}
              </div>
            <button type="submit" className="button solid">
              Xác nhận
            </button>

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
            <button className="button transparent" id="sign-up-btn">
              Đăng Ký
            </button>
          </div>
          <img
            src="./assets/images/kisspng-ticket-film-cinema-cinema-ticket-5abf0992ef7f17.897789881522469266981.png"
            className="image singin"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Đăng nhập tại đây !!!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="button transparent" id="sign-in-btn">
              Đăng Nhập
            </button>
          </div>
          <img
            src="./assets/images/PngItem_3014574.png"
            className="image right"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

