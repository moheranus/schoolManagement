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
  DollarOutlined,
  MediumOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Avatar, Button,Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';

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
import FeeSubmission from '../../pages/fee/FeeSubmission';
import Mark from '../../pages/mark/Mark';
import RegisterReport from '../../pages/register/RegisterReport';
import MarkReport from '../../pages/mark/MarkReport';
const { Header, Sider, Content } = Layout;
const { Option } = Select;
function Layouts () {

//form condition
const [form] = Form.useForm();
  const feeType = Form.useWatch("feeType", form);
  const registrationCourse = Form.useWatch("registrationCourse", form);


  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();




  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="sidebarContainer"
      style={{backgroundColor:"#3339cd "}}
      >
        <div className="logo" 
        style={{marginTop:"20px"}}
        >
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
            // {
            //   key: '/fee',
            //   icon: <DollarOutlined  style={{fontSize:"20px"}}/>,
            //   // label: 'Course',
            //   label: <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Fee Submission</div>,
            // },
            {
              key: '/mark',
              icon: <MediumOutlined  style={{fontSize:"20px"}}/>,
              // label: 'Course',
              label: <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Mark</div>,
            },
            {
              key: '/fee',
              icon: <DollarOutlined   style={{fontSize:"20px"}}/>,
              // // label: 'Course',
              label: <div style={{display:"flex",justifyContent:"center", alignItems:"center", }}>
                <Button type="primary" onClick={showDrawer} style={{marginLeft:"-22px"}}>
                 Fee Submission
               </Button>
               label: <div onClick={showDrawer}><p>sdj</p></div>
               <Drawer
        title="Fee Submission Form"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose} style={{padding:"2px 20px"}} >Cancel</Button>
            <Button onClick={onClose} type="primary" style={{padding:"2px 20px"}}>
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="fname"
                label=" First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter student first name',
                  },
                ]}
              >
                <Input placeholder="Please enter student first name"style={{width:"300px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
              
              name="lname"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: 'Please enter student last name',
                },
              ]}
            >
              <Input placeholder="Please enter student last name"style={{width:"300px"}} />
            </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="phone"
                label="Phone number"
                rules={[
                  {
                    required: true,
                    message: 'Please enter student name',
                  },
                ]}
              >
                <Input placeholder="Enter phone number"style={{width:"300px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="section"
                label="Select Section"
                rules={[
                  {
                    required: true,
                    message: 'Please select student Section'
                  },
                ]}
              >
                <Select placeholder="Please select section"style={{width:"300px"}}>
                  <Option value="A">A</Option>
                  <Option value="B">B</Option>
                  <Option value="C">C</Option>
                  <Option value="D">D</Option>
                  <Option value="E">E</Option>
                  
                  
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="class"
                label="Select Class"
                rules={[
                  {
                    required: true,
                    message: 'Please select student class',
                  },
                ]}
              >
                <Select placeholder="Please select class"style={{width:"300px"}}>
                  <Option value="1st">1st</Option>
                  <Option value="2nd">2nd</Option>
                  <Option value="3rd">3rd</Option>
                  <Option value="4th">4th</Option>
                  <Option value="5th">5th</Option>
                  <Option value="6th">6th</Option>
                  <Option value="7th">7th</Option>
                  <Option value="8th">8th</Option>
                  
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={'feeType'}
                label="payment method"
                rules={[  
                  {
                    required: true,
                    message: 'Please choose payment type',
                  },
                ]}
              >
                <Select placeholder="Please choose payment type "name={'feeType'}style={{width:"300px"}}>
                  <Option value="cash">Cash</Option>
                  <Option value="bank">Bank</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
            {
              feeType==='cash'?
              <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="amount"
                label=" Amount"
                rules={[
                  {
                    required: true,
                    message: 'Please enter amount in number',
                  },
                ]}
              >
                <Input placeholder="Please enter amount in number "style={{width:"300px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={2} placeholder="" />
              </Form.Item>
            </Col>
          </Row>
            </Col>
          </Row>:null
            }
           {
              feeType==='bank'?
              <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="transaction"
                label="Transaction ID"
                rules={[
                  {
                    required: true,
                    message: 'Please enter transaction Id',
                  },
                ]}
              >
                <Input placeholder="Please enter transaction id"style={{width:"300px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
              
              name="amounts"
              label="Amount"
              rules={[
                {
                  required: true,
                  message: 'Please enter amount',
                },
              ]}
            >
              <Input placeholder="Please enter amount"style={{width:"300px"}} />
            </Form.Item>
            </Col>
          </Row>
             :null
            }

            {feeType==='bank'?
             <Row gutter={16}>
             <Col span={24}>
               <Form.Item
                 name="description"
                 label="Description"
                 
               >
                 <Input.TextArea rows={4} placeholder="Please enter description" />
               </Form.Item>
             </Col>
           </Row>

              :null
            }
         
        </Form>
      </Drawer>
              </div>,
              
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
          <Route path='/areport' element={<AttendanceReport/>}/>
          <Route path="/fee" element={<FeeSubmission/>}/>
          <Route path='/mark' element={<Mark/>}/>
          <Route path='/registerReport' element={<RegisterReport/>}/>
         <Route path='/markReport' element={<MarkReport/>}/>
          


      
          
        
          
          
       </Routes>
  </div>;
}
export default Layouts;