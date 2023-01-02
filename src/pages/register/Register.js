// import React from 'react';
import "./Register.css";
import React, { useState } from 'react';
import { Button,
     message,
     Steps,
     Breadcrumb,
     Form, 
     Input,
     DatePicker, 
     Select,  } from 'antd';

const steps = [
  
        { 
          // STUDENT DETAIL
          title: <div className="stepText">Student Detail</div>,
          content: <div className='studentInfo'>
                <Form
            
            autoComplete="off"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 30 }}
            onFinish={(values) => {
              console.log({ values });
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <Form.Item
            style={{width:"700px", paddingTop:"70px"}}
              
              name="fname"
        //       label="First Name:"
              label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>First Name</label>}
              rules={[
                {
                  required: true,
                  message: "Please enter first name!",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Type first name" style={{height:"45px"}} />
            </Form.Item>
            <Form.Item
            style={{width:"700px"}}
              name="lname"
              label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Last Name</label>}
              rules={[
                {
                  required: true,
                  message: "Please enter Last name!",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Type last name"style={{height:"45px"}} />
            </Form.Item>
            <Form.Item
            style={{width:"700px"}}
              name="email"
              label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Email</label>}
              rules={[
                {
                  required: true,
                  message: "Please enter email address",
                },
                { type: "email", message: "Please enter a valid email" },
              ]}
              hasFeedback
            >
              <Input placeholder="Type email address"style={{height:"45px"}} />
            </Form.Item>
            <Form.Item
            style={{width:"700px"}}
              name="phone"
              label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Phone</label>}
              rules={[
                {
                  required: true,
                  message: "Please enter Phone",
                },
                { type: "tele", message: "Please enter a valid phone number" },
              ]}
              hasFeedback
            >
              <Input placeholder="Type phone number" style={{height:"45px"}}/>
            </Form.Item>
  
            
          </Form>
          </div>,
        },
        // STUDENT SECTION
        {
          title: <div className="stepText">Section</div>,
          content: <div className='studentSection'>
            <Form autoComplete="off"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 30 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}>
        <Form.Item
        style={{width:"700px"}}
            name="dob"
            label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Date of birth</label>}
            rules={[
              {
                required: true,
                message: "Please provide  date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{width:"700px",padding:"10px"}}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>
          <Form.Item name="gender" 
          label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Gender</label>}
          rules={[
            {
              required: true,
              message:" please select gender"
            }
          ]}
          
          style={{width:"700px"}}>
            <Select placeholder="Select gender"
            size="large"
            style={{width:"700px"}}>
              
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="class" 
         label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Class</label>}
          required style={{width:"700px"}}>
            <Select placeholder="Select class or year"style={{width:"700px"}}size="large">
              <Select.Option value="1st">1st</Select.Option>
              <Select.Option value="2nd">2nd</Select.Option>
              <Select.Option value="3rd">3rd</Select.Option>
              <Select.Option value="4th">4th</Select.Option>
              <Select.Option value="5th">5th</Select.Option>
              <Select.Option value="6th">6th</Select.Option>
              <Select.Option value="7th">7th</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="Section" 
          label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Section</label>}
           required style={{width:"700px"}}>
            <Select placeholder="Select Section"style={{width:"700px"}}size="large">
              <Select.Option value="A">A</Select.Option>
              <Select.Option value="B">B</Select.Option>
              <Select.Option value="C">C</Select.Option>
              <Select.Option value="D">D</Select.Option>
              <Select.Option value="E">E</Select.Option>
              <Select.Option value="F">F</Select.Option>
            </Select>
          </Form.Item>
        </Form>
          </div>,
        },
        // STUDENT EMEREGENCY CONTACT INFORMATION
        {
          title: <div className="stepText">Emeregency contanct</div>,
          content: <div className='emeregencyInfo'>
                    <Form autoComplete="off"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 30 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}>
             <Form.Item
          style={{width:"700px"}}
            
            name="efname"
            label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>First Name</label>}
            rules={[
              {
                required: true,
                message: "Please enter first name!",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type first name"style={{height:"45px"}} />
          </Form.Item>
          <Form.Item
          style={{width:"700px"}}
            name="elname"
            label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Last Name</label>}
            rules={[
              {
                required: true,
                message: "Please enter Last name!",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type last name"style={{height:"45px"}} />
          </Form.Item>
          <Form.Item
          style={{width:"700px"}}
            name="eemail"
            label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Email</label>}
            rules={[
              {
                required: true,
                message: "Please enter email address",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type email address"style={{height:"45px"}} />
          </Form.Item>
          <Form.Item
          style={{width:"700px"}}
            name="ephone"
            label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Phone</label>}
            rules={[
              {
                required: true,
                message: "Please enter Phone",
              },
              { type: "tele", message: "Please enter a valid phone number" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type phone number" style={{height:"45px"}}/>
          </Form.Item>
          <Form.Item name="relationship"
           label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Relationship</label>}
          
          rules={[
            {
              required: true,
              message:" please select relationship"
            }
          ]}
          
          style={{width:"700px"}}>
            <Select placeholder="Select relationship"size="large">
              <Select.Option value="father">Father</Select.Option>
              <Select.Option value="mother">Mother</Select.Option>
              <Select.Option value="Brother">Brother</Select.Option>
              <Select.Option value="Sister">Sister</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          </Form>
          </div>,
        },
        //STUDENT ADDRESS
        {
          title: <div className="stepText">Address</div>,
          content: <div className='addressInfo'>
                  <Form autoComplete="off"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 30 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}>
            <Form.Item
          style={{width:"700px"}}
            name="city"
            label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>City/Town</label>}
            rules={[
              {
                required: true,
                message: "Please enter city name!",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type city name" style={{height:"45px"}}/>
          </Form.Item>
          <Form.Item
         style={{width:"700px"}}
            name="Kebele"
            label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Kebele</label>}
            rules={[
              {
                required: true,
                message: "Please enter kebele number!",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type kebele name"style={{height:"45px"}} />
          </Form.Item>
          
          <Form.Item
          style={{width:"700px"}}
            name="street"
            label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>Street Name</label>}
            rules={[
              {
                required: true,
                message: "Please enter street name!",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type street name"style={{height:"45px"}} />
          </Form.Item>
          <Form.Item
          style={{width:"700px"}}
            name="house"
            label={<label style={{ fontSize:"18px",fontWeight:"600", opacity:"0.5" }}>House number</label>}
            rules={[
              {
                required: true,
                message: "Please enter house number!",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type House number" style={{height:"45px"}}/>
          </Form.Item>
          </Form>
          </div>,
        },
      ];





function Register() {
        const [current, setCurrent] = useState(0);
        const next = () => {
          setCurrent(current + 1);
        };
        const prev = () => {
          setCurrent(current - 1);
        };
        const items = steps.map((item) => ({
          key: item.title,
          title: item.title,
        })); 
  return (
        <div className='registerSection'>
                <div className='tabs'>
                <Breadcrumb>
                        <Breadcrumb.Item>Register</Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="">Report</a>
                        </Breadcrumb.Item>
                        
                </Breadcrumb>
                </div>
        
          <div className='bodyContainer'>
        
             <div className='stepbar'>
             {/* <Steps
                direction="vertical"
                size="default"
                color="#fff"
                current={1}
                
                items={[
                        
                        {
                                title: <div className='stepText'>step one</div>,
                                content:<div className='registerContainers'>conten 1</div>
                                
                        },
                        {
                                title: <div className='stepText'>step two</div>,
                                
                        },
                        {
                                title: <div className='stepText'>step three</div>,
                                
                        },
                        ]}
             /> */}
              <Steps current={current} items={items} className="registervertical" direction="vertical" />
             </div>
             <div className='stepContainer'>
               <div>
        <div className='registerBody'>
        
      
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-actions">
        {current < steps.length - 1 && (
          
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit" onClick={() => message.success('Student Registered successfully!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    
        </div>
                
                
                </div>
      
        </div>
    </div>
    </div>
  )
}

export default Register