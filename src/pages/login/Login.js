import React, { useState } from 'react'
import "./Login.css"
import {Steps, Form, Input, Button, DatePicker, Select,message,} from "antd";
function Login() {
const [current, setCurrent] = useState(0);
const [registerDetails, setRegisterDetails] = useState(null);
const [assignSection, setAssignSection] = useState(null);
const [emeregencyContact, setEmeregencyContact] = useState(null);
const [address, setAddress]=useState(null);
const [Previous, setPrevious] = useState(null);

const prev=(values)=>{
  setCurrent(-1);
}

const onFinishRegister=(values)=>{
  setRegisterDetails(values);
  setCurrent(1);
};

const onFinishSection=(values)=>{
  setAssignSection(values);
  setCurrent(2);
};

const onFinishEmeregency=(values)=>{
  setEmeregencyContact(values);
  setCurrent(3);
}

const onFinishAddress=(values)=>{
  setAddress(values);
  setCurrent(4);
}
const forms = [
  <StudentDetails onFinish={onFinishRegister}/>,
  <AssignSection onFinish={onFinishSection}/>,
  <EmeregencyContact onFinish={onFinishEmeregency}/>,
  <Address onFinish={onFinishAddress}/>
]






  return (
    <div className='loginTotalCon'>
           <div className='stepSideCon'>
             <ul>
              <li>Student Detail</li>
              <li>Assign Section</li>
              <li>Emeregency Contact</li>
              <li>Address</li>
             </ul>
           </div>
           <div className='stepFormCon'>
            <Steps direction="vertical" onChange={setCurrent} current={current}>
              <Steps.Step className='stepGap'/>
              <Steps.Step className='stepGap'/>
              <Steps.Step className='stepGap'/>
              <Steps.Step className='stepGap'/>
            </Steps>
            {/* <StudentDetails onFinish={onFinishRegister}/> */}
            {forms[current]}

           </div>
           <div className='stepDrop'>
            <div className='setDropTitle'>
              <p>Register Student</p>
            </div>
           </div>
    </div>
  )
}
function StudentDetails({onFinish}){
  return(
    <div className='stepFormHolder'>
  <Form onFinish={onFinish}>
    <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
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
        
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginLeft:"20px",
        }}/>
    </Form.Item>
    <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>Last Name</label>}
    name={'lname'} rules={[{
      required: true,
      type:'text',
      message:'Please enter student last name'
    }]}>
      <Input placeholder="Type last name"required
      style={{
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginLeft:"20px",
        }}
      />
    </Form.Item>
    <Form.Item
    label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>Student Email</label>}
    name={'semail'}
    >
       <Input placeholder="Type student email"
       type='email'
       required
           style={{
            width:"400px",
            height:"50px",
            fontSize:"20px",
            marginLeft:"7px",
            }}
       />
    </Form.Item>
    <Form.Item
    label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px",
       marginLeft:"-2px" 
      }}>Phone Number</label>}
    
    name={'sphone'}
    >
      <Input placeholder="Type student phone "required
          style={{
            width:"400px",
            height:"50px",
            fontSize:"20px"
            }}
      />
    </Form.Item>
    
    <Button type="primary" htmlType='submit'
    style={{
      width:"400px",
      marginLeft:"138px",
      marginBottom:"20px",
      paddingBottom:"40px",
      display:"flex",
      justifyContent:"center",
      backgroundColor:"#5b5f97",
      
      // paddingTop:"10px",
      fontSize:"20px"
    }}
    >Continue</Button>
  </Form>
  </div>
  )
}
function AssignSection({onFinish}){
  
  return(
    <div className='stepFormHolder'>
  <Form onFinish={onFinish}>
      <Form.Item 
         label={<label style={{ 
          color: "#3a3c5a",
           fontSize:"19px", 
           marginTop:"10px",
           marginLeft:"-2px" 
          }}
          name={'birthDate'}
          >Date of Birth</label>}
      >

        <DatePicker style={{
            width:"400px",
            height:"43px",
            fontSize:"20px",
            border:"2px solid #5b5f97",
            
            }} required/>
      </Form.Item>
      <Form.Item
      label={<label style={{ 
        color: "#3a3c5a",
         fontSize:"19px", 
         marginTop:"10px",
         marginLeft:"-2px" 
        }}
        name={'gender'}
        >Gender</label>}

      >
        <Select placeholder="Select gender"required
            size="large"
            style={{
              width:"400px",
              marginLeft:"40px",
              border:"2px solid #5b5f97",
              borderRadius:"5px",
              
                
            }}>
              
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          
      </Form.Item>
      <Form.Item
      label={<label style={{ 
        color: "#3a3c5a",
         fontSize:"19px", 
         marginTop:"10px",
         marginLeft:"-2px" 
        }}
        name={'class'}
        >Class</label>}
      >
        <Select placeholder="Select Class"required
            size="large"
            style={{
              width:"400px",
              marginLeft:"55px",
              border:"2px solid #5b5f97",
              borderRadius:"5px",
              
                
            }}>
              
              <Select.Option value="1st">1st</Select.Option>
              <Select.Option value="2nd">2nd</Select.Option>
              <Select.Option value="3rd">3rd</Select.Option>
              <Select.Option value="4th">4th</Select.Option>
              <Select.Option value="5th">5th</Select.Option>
              <Select.Option value="6th">6th</Select.Option>
              <Select.Option value="7th">7th</Select.Option>
            </Select>


      </Form.Item>
      <Form.Item
      label={<label style={{ 
        color: "#3a3c5a",
         fontSize:"19px", 
         marginTop:"10px",
         marginLeft:"-2px" 
        }}
        name={'Section'}
        >Section</label>}
      >

<Select placeholder="Select Section"required
            size="large"
            style={{
              width:"400px",
              marginLeft:"40px",
              border:"2px solid #5b5f97",
              borderRadius:"5px",
              
                
            }}>
              
              <Select.Option value="1st">A</Select.Option>
              <Select.Option value="2nd">B</Select.Option>
              <Select.Option value="3rd">C</Select.Option>
              <Select.Option value="4th">D</Select.Option>
              <Select.Option value="5th">E</Select.Option>
              <Select.Option value="6th">F</Select.Option>
              <Select.Option value="7th">G</Select.Option>
            </Select>
      </Form.Item>
    <Button type="primary" htmlType='submit'
    style={{
      width:"400px",
      marginLeft:"115px",
      marginBottom:"20px",
      paddingBottom:"40px",
      display:"flex",
      justifyContent:"center",
      backgroundColor:"#5b5f97",
      
      // paddingTop:"10px",
      fontSize:"20px"
    }}
    >Continue</Button>
    
    
  </Form>
  </div>
  )
}
function EmeregencyContact({onFinish}){
  return(
    <div className='stepFormHolder'>
        <Form onFinish={onFinish}>
    <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>First Name</label>}
    
    
    
    
    
    name={'efname'} rules={[{
      required: true,
      type:'text',
      message:'Please enter first name'
    }]}
    >
      <Input placeholder="Type first name"required
       style={{
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginLeft:"20px",
        }}/>
    </Form.Item>
    <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>Last Name</label>}
    
    
    
    
    
    name={'elname'} rules={[{
      required: true,
      type:'text',
      message:'Please enter last name',
      
    }]}
    >
      <Input  placeholder="Type last name"required
      style={{
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginLeft:"20px",
        }}/>
    </Form.Item>
    <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>Email</label>}
    
    
    
    
    
    name={'eemail'} rules={[{
      required: true,
      type:'text',
      message:'Please enter email'
    }]}
    >
      <Input placeholder="Type email address"
      type='email'
      required
      style={{
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginRight:"-30px",
        marginLeft: "63px",
        }}/>
    </Form.Item>
    <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>Phone</label>}
    
    name={'ephone'} rules={[{
      required: true,
      type:'text',
      message:'Please enter phone number'
    }]}
    >
      <Input placeholder="Type phone number"required
      style={{
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginRight:"-30px",
        marginLeft: "53px",
        }}/>
    </Form.Item>
    <Button type="primary" htmlType='submit'
    style={{
      width:"400px",
      marginLeft:"130px",
      marginBottom:"20px",
      paddingBottom:"40px",
      display:"flex",
      justifyContent:"center",
      backgroundColor:"#5b5f97",
      
      // paddingTop:"10px",
      fontSize:"20px"
    }}
    >Continue</Button>
        </Form>
    </div>
  )
}
function Address({onFinish}){
   return(
    <div className='stepFormHolder'>
            <Form onFinish={onFinish}>
            <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>City</label>}
    
    name={'city'} rules={[{
      required: true,
      type:'text',
      message:'Please enter city name'
    }]}
    >
      <Input placeholder="Type city name"required
      style={{
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginRight:"-30px",
        marginLeft: "53px",
        }}/>
    </Form.Item>
    <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>Kebele</label>}
    
    name={'kebele'} rules={[{
      required: true,
      type:'text',
      message:'Please enter kebele number'
    }]}
    >
      <Input placeholder="Type kebele number"required
      style={{
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginRight:"-30px",
        marginLeft: "25px",
        }}/>
    </Form.Item>
    <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>Street</label>}
    
    name={'street'} rules={[{
      required: true,
      type:'text',
      message:'Please enter street name'
    }]}
    >
      <Input placeholder="Type enter street name"
      style={{
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginRight:"-30px",
        marginLeft: "33px",
        }}/>
    </Form.Item>
    <Form.Item label={<label style={{ 
      color: "#3a3c5a",
       fontSize:"19px", 
       marginTop:"10px" 
      }}>House_no</label>}
    
    name={'house'} rules={[{
      required: true,
      type:'text',
      message:'Please enter house number'
    }]}
    >
      <Input placeholder="Type enter house number"
      style={{
        width:"400px",
        height:"50px",
        fontSize:"20px",
        marginRight:"-20px",
        marginLeft: "1px",
        }}/>
    </Form.Item>
                 
         <Button type="primary" htmlType='submit'
         style={{
          width:"400px",
          marginLeft:"112px",
          marginBottom:"20px",
          paddingBottom:"40px",
          display:"flex",
          justifyContent:"center",
          backgroundColor:"#5b5f97",
          
          // paddingTop:"10px",
          fontSize:"20px"
        }}
        onClick={() => message.success('Student Registered successfully!')}
         >Submit</Button>
         <div>
          
         </div>
         
  </Form>
    </div>
   )
}

export default Login