import React from 'react';
import { Layout, Menu } from 'antd';
import './AppHeader.css';
import { NavLink } from 'react-router-dom';
const Header = Layout.Header;
const AppHeader = () => {
    return (
        <Header>
            <div className="logo">
                <img src="http://mianbaolixiang.com/index_files/tp_logo_mobile.png" alt=""></img>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><NavLink to="/demo">首页</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/demo/course">课程</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to="/demo/teachers">讲师</NavLink></Menu.Item>
            </Menu>
        </Header>
    );
}
export default AppHeader;


