import React from 'react';
import "./Payment.css"
import { Button,
  message,
  Steps,
  Breadcrumb,
  Form, 
  Input,
  DatePicker, 
  Select,  } from 'antd';
function Payment() {
  const [form] = Form.useForm();
  const registrationCourse = Form.useWatch("registrationCourse", form);
  return (
    <div className='studentRegistration'>
        <div className='registrationTabs'>
        <Breadcrumb>
               <Breadcrumb.Item 
               style={{
                fontSize:"18px",
                fontWeight:"600",
                
                color:"#5b5f97",

                }}>Registrations</Breadcrumb.Item>
                        
                    <Breadcrumb.Item
                    style={{
                      fontSize:"18px",
                      fontWeight:"600",
                     
                      
      
                      }}
                    >
                   <a href="#l"
                   style={{
                    color:"#5b5f97",
                   }}
                   >Report</a>
               </Breadcrumb.Item>
        </Breadcrumb>
        <div className='registrationSection'>
              <div className='addSection'>
                   <div className='registrationInfo'>
                    <p>Student Registration</p>
                      <Form>
                      <Form.Item
      label={<label style={{ 
        color: "#fff",
         fontSize:"19px", 
         marginTop:"10px",
         marginLeft:"-2px" 
        }}
        name={'semister'}
        >Semister</label>}

      >
        <Select placeholder="Select Semister"required
            size="large"
            style={{
              width:"300px",
              marginLeft:"10px",
              border:"2px solid #5b5f97",
              borderRadius:"5px",
              
                
            }}>
              
              <Select.Option value="male">1st Semister</Select.Option>
              <Select.Option value="female">2nd Semiste</Select.Option>
              
            </Select>
          
      </Form.Item>
      <Form.Item
      label={<label style={{ 
        color: "#fff",
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
              width:"300px",
              marginLeft:"38px",
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
        color: "#fff",
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
              width:"300px",
              marginLeft:"20px",
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
      <Form.Item
      label={<label style={{ 
        color: "#fff",
         fontSize:"19px", 
         marginTop:"10px",
         marginLeft:"-2px" 
        }}
        name={'semister'}
        >Courses</label>}

      >
        <Select placeholder="Select course"required
            size="large"
            style={{
              width:"300px",
              marginLeft:"10px",
              border:"2px solid #5b5f97",
              borderRadius:"5px",
              
                
            }}>
              
              <Select.Option value="maths">Maths</Select.Option>
              <Select.Option value="physics">physics</Select.Option>
              <Select.Option value="english">English</Select.Option>
              <Select.Option value="art">Art</Select.Option>
              
            </Select>
          
      </Form.Item>
    
                      </Form>
                     <div className='registrationAction'>
                          
                     </div>
                   </div>
                   <div className='formHolder'>
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
                   </div>
              </div>
        </div>
        </div>
        
    </div>
  )
}

export default Payment