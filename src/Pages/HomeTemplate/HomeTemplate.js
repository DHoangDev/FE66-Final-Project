import React, { useEffect } from "react"
import { Route } from "react-router-dom"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

export default function HomeTemplate(props) {

    document.addEventListener('DOMContentLoaded', () => {
        localStorage.setItem('userLogin', JSON.stringify({ "taiKhoan": "123@admin", "hoTen": "Nguyễn Tân", "email": "stringgg@gmail.com.vn.vn", "soDT": "0123456868", "maNhom": "GP01", "maLoaiNguoiDung": "QuanTri", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzQGFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic3RyaW5nZ2dAZ21haWwuY29tLnZuLnZuIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCJzdHJpbmdnZ0BnbWFpbC5jb20udm4udm4iLCJHUDAxIl0sIm5iZiI6MTYzMzMzOTEzNiwiZXhwIjoxNjMzMzQyNzM2fQ.Yx6mzeJz1vl6_8JL6DlZTWhFPe2v7QDGRToe4gNKICc" }))
        localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzQGFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic3RyaW5nZ2dAZ21haWwuY29tLnZuLnZuIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCJzdHJpbmdnZ0BnbWFpbC5jb20udm4udm4iLCJHUDAxIl0sIm5iZiI6MTYzMzMzOTEzNiwiZXhwIjoxNjMzMzQyNzM2fQ.Yx6mzeJz1vl6_8JL6DlZTWhFPe2v7QDGRToe4gNKICc')
        // if (!localStorage.getItem('userLogin')) {

        // } else {
        //     localStorage.removeItem('userLogin')
        // }
    })
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return (
                <div style={{ backgroundColor: "#1B2631" }}>
                    <Navbar {...propsRoute} />
                    <props.component {...propsRoute} />
                    <Footer />
                </div>
            )
        }} />
    )
}
