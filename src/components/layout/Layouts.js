import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Avatar } from 'antd';
import "./Layouts.css";
import Dashboard from '../dashboard/Dashboard';
import {Routes, Route, useNavigate} from "react-router-dom"
import Register from '../../pages/register/Register';
import Attendance from "../../pages/attendance/Attendance";
import Course from "../../pages/course/Course"
import Login from "../../pages/login/Login";
import Payment from "../../pages/payment/Payment";
import Registration from "../../pages/registration/Registration";
import Schedule from "../../pages/schedule/Schedule";
import Signup from "../../pages/signup/Signup";
import Teacher from "../../pages/teacher/Teacher";
const { Header, Sider, Content } = Layout;
function Layouts () {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="sidebarContainer"
      style={{backgroundColor:"#3339cd "}}
      >
        <div className="logo">
          <h1>SCHOOL</h1>
        </div>
        <Menu
        className="navList"
        onClick={({key})=>{
          if(key ==="signout"){
            // signout features here
          }else{
             navigate(key)
          }
        }}
        style={{marginTop:"35px",backgroundColor:"#3339cd "}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          
          items={
            
            [
           
            {
              key: '/dashboard',
              icon: <DashboardOutlined style={{fontSize:"25px"}}/>,
              label: 'Dashboard',
            },
            {
              key: '/register',
              icon: <UserOutlined style={{fontSize:"25px"}}/>,
              label: 'Register',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined style={{fontSize:"25px"}}/>,
              label: 'Registration',
            },
            {
              key: '3',
              icon: <UploadOutlined style={{fontSize:"25px"}}/>,
              label: 'Course',
            },
            {
              key: '4',
              icon: <UploadOutlined style={{fontSize:"25px"}}/>,
              label: 'Course',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className='headerCon'>
          
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className='profileContainer' >
            
          <Avatar size={50} icon={<UserOutlined className='avatar' />} />
          
          </div>
          </div>
          
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          
          <Contents />
        </Content>
        
        
      </Layout>
    </Layout>
  );
};



function Contents (){
  return <div>
       <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/attendance" element={<Attendance/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/scheduel' element={<Schedule/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/teacher' element={<Teacher/>}/>


      
          
        
          
          
       </Routes>
  </div>;
}
export default Layouts;