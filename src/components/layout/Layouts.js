import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SnippetsOutlined ,
  UserOutlined,
  ReadOutlined,
  UsergroupAddOutlined,
  DashboardOutlined,
  ContactsOutlined ,
  AuditOutlined,
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
import DropdownProfile from './DropdownProfile';
import AddClass from '../../pages/course/AddClass';
import ClassForm from '../../pages/course/ClassForm';
import AttendanceReport from '../../pages/attendance/report/AttendanceReport';
const { Header, Sider, Content } = Layout;

function Layouts () {
  const [openProfile, setOpenProfile] = useState(false);
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
              icon: <DashboardOutlined style={{fontSize:"20px"}}/>,
              // label: 'Dashboard',
              label: <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Dashboards</div>,
            },
            {
              key: '/register',
              icon: <UsergroupAddOutlined style={{fontSize:"20px"}}/>,
              // label: 'Register',
              label: <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Register</div>,
              
            },
            {
              key: '/registration',
              icon: <AuditOutlined style={{fontSize:"20px"}}/>,
              // label: 'Registration',
              label: <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Registration</div>,
            },
            {
              key: '/course',
              icon: <ReadOutlined style={{fontSize:"20px"}}/>,
              // label: 'Course',
              label: <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Course</div>,
            },
            {
              key: '/teacher',
              icon: <ContactsOutlined  style={{fontSize:"20px"}}/>,
              // label: 'Course',
              label: <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Teacher</div>,
            },
            {
              key: '/attendance',
              icon: <SnippetsOutlined   style={{fontSize:"20px"}}/>,
              // label: 'Course',
              label: <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Attendance</div>,
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
            {
              openProfile &&<DropdownProfile/>
            }
            
          <Avatar size={50} icon={<UserOutlined className='avatar' />} onClick={()=>setOpenProfile((prev)=>!prev)}/>
          
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
          <Route path='/schedule' element={<Schedule/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/teacher' element={<Teacher/>}/>
          <Route path='/addclass' element={<AddClass/>}/>
          <Route path='/classform' element={<ClassForm/>}/>
          <Route path='/teacher' element={<Teacher/>}/>
          <Route pathe='/areport' element={<AttendanceReport/>}/>


      
          
        
          
          
       </Routes>
  </div>;
}
export default Layouts;