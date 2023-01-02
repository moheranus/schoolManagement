import React, { useState } from 'react';
import "./DropDownProfile.css"
import{UserSwitchOutlined,
    SettingOutlined ,
    LogoutOutlined
} from '@ant-design/icons'
import {Drawer, Button, Space} from "antd"
import admin from "../../assets/img/admin.png"
import admin2 from "../../assets/img/admin2.jpeg"
function DropdownProfile() {
   




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
             <li  onClick={showDrawer}><UserSwitchOutlined style={{ fontSize: '20px', color: '#3339cd',paddingRight:"10px" }}/>Profile</li>
             <li><SettingOutlined style={{ fontSize: '20px', color: '#3339cd',paddingRight:"10px" }}/>Setting</li>
             <li><LogoutOutlined style={{ fontSize: '20px', color: '#3339cd',paddingRight:"10px" }}/>Logout</li>
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
          width={320}
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
                
            </div>
          </div>
        </Drawer>
      </Drawer>
        </div>
    </div>
  )
}

export default DropdownProfile