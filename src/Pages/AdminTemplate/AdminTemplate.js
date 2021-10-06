import React, { useState } from 'react'
import { NavLink, Route, Redirect } from "react-router-dom"

import { USER_LOGIN, ACCESS_TOKEN } from '../../Util/Setting'

import { Layout, Menu, Dropdown } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
    UserOutlined,
    CalendarOutlined,
    UserSwitchOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

export default function AdminTemplate(props) {

    const [collapsed, setState] = useState(false)

    const toggle = () => {
        setState(!collapsed);
    }
    const { Header, Sider, Content } = Layout;
    const { SubMenu } = Menu;

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Đăng nhập để vào trang này !');
        return <Redirect to="/Home" />
    } else {
        let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
        if (userLogin.maLoaiNguoiDung !== "QuanTri") {
            alert('Không đủ quyền truy cập !')
            return <Redirect to="/Home" />
        }
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <NavLink to="/Admin/admin" />Thông Tin
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item type="button" key="2" onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(ACCESS_TOKEN);
                window.location.reload()
            }}>
                Log out
            </Menu.Item>
        </Menu>
    );

    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return (
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo text-center">
                            <h4 className="py-1 text-white" style={{ marginTop: ".7rem" }}>Cyber Film</h4>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                <NavLink to="/Admin/dashboard" />Dashboard
                            </Menu.Item>
                            <Menu.Item key="4" icon={<UserOutlined />}>
                                <NavLink to="/Admin/admin" />Admin
                            </Menu.Item>
                            <Menu.Item key="5" icon={<CalendarOutlined />}>
                                <NavLink to="/Admin/lichchieu" />Tạo Lịch Chiếu
                            </Menu.Item>
                            <SubMenu key="subUser" icon={<UserSwitchOutlined />} title="Users Manager">
                                <Menu.Item key="6" >
                                    <NavLink to="/Admin/adduser" />Add User
                                </Menu.Item>
                                <Menu.Item key="7" >
                                    <NavLink to="/Admin/edituser" />Edit User
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="subFilm" icon={<VideoCameraOutlined />} title="Films Manager">
                                <Menu.Item key="8" >
                                    <NavLink to="/Admin/addfilm" />Add Film
                                </Menu.Item>
                                <Menu.Item key="9" >
                                    <NavLink to="/Admin/editfilm" />Edit Film
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout w-100">
                        <Header className="site-layout-background " style={{ padding: 0, position: 'inherit' }}>
                            <nav className="navbar" style={{ background: 'none', boxShadow: 'unset', height: '100%', lineHeight: '100%' }}>
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger text-white',
                                    onClick: toggle,
                                })}
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link text-light d-flex align-items-center" onClick={e => e.preventDefault()}>
                                        <img style={{ width: '27px', height: '27px', borderRadius: '50%' }}
                                            src="http://localhost:3000/assets/images/avatar.png" alt="..." />
                                        &nbsp;&nbsp;{
                                            JSON.parse(localStorage.getItem(USER_LOGIN)).hoTen
                                        }&nbsp;&nbsp;
                                        <DownOutlined />
                                    </a>
                                </Dropdown>
                            </nav>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: '2rem',
                                minHeight: '100vh',
                            }}
                        >
                            <props.component {...propsRoute} />
                        </Content>
                    </Layout>
                </Layout>
            )
        }} />
    )

}