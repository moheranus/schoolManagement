import React, { useState } from 'react';
import "./DropDownProfile.css"
import{UserSwitchOutlined,
    SettingOutlined ,
    LogoutOutlined
} from '@ant-design/icons'
import {Drawer, Button, Space} from "antd"
// import admin from "../../assets/img/admin.png"
import admin2 from "../../assets/img/admin2.jpeg"
import {Steps, Form, Input, DatePicker, Select,message, Modal } from "antd";
function DropdownProfile() {
   

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


      const [open, setOpen] = useState(false);
      const [childrenDrawer, setChildrenDrawer] = useState(false);
      const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
      const showChildrenDrawer = () => {
        setChildrenDrawer(true);
      };
      const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
      };


     

  return (
    <div className='flex flex-col dropDownProfile'>
        <ul className='flex flex-col gap-4'>
             <li  onClick={showDrawer}><UserSwitchOutlined style={{ fontSize: '20px', color: '#3339cd',paddingRight:"10px" ,marginLeft:'-25px'}}/>Profile</li>
             <li><SettingOutlined style={{ fontSize: '20px', color: '#3339cd',marginLeft:'-25px',paddingRight:"10px" }}/>Setting</li>
             <li><LogoutOutlined style={{ fontSize: '20px', color: '#3339cd',marginLeft:'-25px',paddingRight:"10px"}}/>Logout</li>
        </ul>
        <div className='test'>
        
      <Drawer title="User Profile" width={520} closable={false} onClose={onClose} open={open}
       extra={
        <Space>
          <Button onClick={onClose}style={{backgroundColor:"#ff1d58", color:"#fff", border:"none"}}>Close</Button>
          
        </Space>
      }
      >
        <div className='profileCont'>
              <div className='profileCard'>
                <div className='imgBx'>
                    <img src={admin2} alt="profile"/>
                </div>
                
              <div className='profileContent'>
                  <div className='profileDetails'>
                    
                       <h2>Daniel Shobe<br/><span>Admin</span><br/><span>danielshobe90@gmail.com</span></h2><br/>
                       <div className='hideInfo'>
                              
                             <div className='profileAction'>
                  <Button type="primary" onClick={showChildrenDrawer}className='editProfileBtn'>
                Edit profile
              </Button>
                  </div>
                       </div>
                  </div>
                 
              </div>
             
              </div>
              
        </div>
        
        <Drawer
          title="Edit Profile"
          width={500}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          
        >
          <div className='editProfileCont'>
            <div className='editProfileTitle'>
              <h2>Profile</h2>
              <p>You can update the details.</p>
            </div>
            <div className='profilePicture'>
            <div class="profile-pic">
              <label class="-label" for="file">
                <span class="glyphicon glyphicon-camera"></span>
                <span>Change Image</span>
              </label>
              <input id="file" type="file" onchange="loadFile(event)"/>
              <img src={admin2}alt="profile" id="output" width="200" />
            </div>
            </div>
            <div className='editProfileForm'>
                <Form>
                <Form.Item label={<label style={{ 
                    color: "#3a3c5a",
                    fontSize:"19px", 
                    marginTop:"45px" 
                    }}>First Name</label>}
                  
                  
                  
                  
                    placeholder="Enter first name"
                  name={'fname'} rules={[{
                    required: true,
                    type:'text',
                    message:'Please enter student first name'
                  }]}
                  >
                    <Input placeholder="Type first name"required
                    style={{
                      
                      width:"300px",
                      height:"50px",
                      fontSize:"20px",
                      marginLeft:"20px",
                      marginTop: "20px"
                      }}/>
                 </Form.Item>
                 <Form.Item label={<label style={{ 
                    color: "#3a3c5a",
                    fontSize:"19px", 
                    marginTop:"45px" 
                    }}>Last Name</label>}
                  
                  
                  
                  
                    placeholder="Enter first name"
                  name={'lname'} rules={[{
                    required: true,
                    type:'text',
                    message:'Please enter student first name'
                  }]}
                  >
                    <Input placeholder="Type last name"required
                    style={{
                      
                      width:"300px",
                      height:"50px",
                      fontSize:"20px",
                      marginLeft:"20px",
                      marginTop: "20px"
                      }}/>
                 </Form.Item>
                 <Form.Item label={<label style={{ 
                    color: "#3a3c5a",
                    fontSize:"19px", 
                    marginTop:"45px" 
                    }}>Phone </label>}
                  
                  
                  
                  
                    placeholder="Enter first name"
                  name={'fname'} rules={[{
                    required: true,
                    type:'text',
                    message:'Please enter phone  number'
                  }]}
                  >
                    <Input placeholder="Type phone number"required
                    style={{
                      
                      width:"300px",
                      height:"50px",
                      fontSize:"20px",
                      marginLeft:"55px",
                      marginTop: "20px"
                      }}/>
                 </Form.Item>
                 <Button type="primary" htmlType='submit'
                    style={{
                      width:"300px",
                      marginLeft:"135px",
                      marginBottom:"20px",
                      paddingBottom:"40px",
                      display:"flex",
                      justifyContent:"center",
                      backgroundColor:"#5b5f97",
                      
                      // paddingTop:"10px",
                      fontSize:"20px"
                    }}
                    onClick={showModal}
                    >change Password</Button>
                    <Button type="primary" htmlType='submit'
                    style={{
                      width:"300px",
                      marginLeft:"135px",
                      marginBottom:"20px",
                      paddingBottom:"40px",
                      display:"flex",
                      justifyContent:"center",
                      backgroundColor:"#5b5f97",
                      
                      // paddingTop:"10px",
                      fontSize:"20px"
                    }}
                    >Update</Button>
                    
                     <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                     >
                        <div className='changePwdModal'>
                        <Form>
                        <Form.Item label={<label style={{ 
                    color: "#3a3c5a",
                    fontSize:"19px", 
                    marginTop:"45px" 
                    }}>Old password </label>}
                  
                  
                  
                  
                    placeholder="Enter Old password"
                  name={'oldPassword'} rules={[{
                    required: true,
                    type:'text',
                    message:'Please enter new password'
                  }]}
                  >
                    <Input placeholder="Enter old password"required
                    style={{
                      
                      width:"250px",
                      height:"50px",
                      fontSize:"20px",
                      marginLeft:"45px",
                      marginTop: "20px",
                      borderColor:"#5b5f97"
                      }}/>
                  </Form.Item>
                        <Form.Item label={<label style={{ 
                    color: "#3a3c5a",
                    fontSize:"19px", 
                    marginTop:"45px" 
                    }}>New password </label>}
                  
                  
                  
                  
                    placeholder="Enter new Password"
                  name={'newPassword'} rules={[{
                    required: true,
                    type:'text',
                    message:'Please enter new password'
                  }]}
                  >
                    <Input placeholder="Enter new password"required
                    style={{
                      
                      width:"250px",
                      height:"50px",
                      fontSize:"20px",
                      marginLeft:"40px",
                      marginTop: "20px",
                      borderColor:"#5b5f97"
                      }}/>
                  </Form.Item>
                  <Form.Item label={<label style={{ 
                    color: "#3a3c5a",
                    fontSize:"19px", 
                    marginTop:"45px" 
                    }}>Confirm password </label>}
                  
                  
                  
                  
                    placeholder=" confirm password"
                  name={'fname'} rules={[{
                    required: true,
                    type:'text',
                    message:'Please confirm the password'
                  }]}
                  >
                    <Input placeholder="confirm password"required
                    style={{
                      
                      width:"250px",
                      height:"50px",
                      fontSize:"20px",
                      marginLeft:"15px",
                      marginTop: "20px",
                      borderColor:"#5b5f97"
                      }}/>
                  </Form.Item>
                  
                        </Form>
                        </div>
                    </Modal>
                    
                </Form>
            </div>
          </div>
        </Drawer>
      </Drawer>
        </div>
    </div>
  )
}

export default DropdownProfile