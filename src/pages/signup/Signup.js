import React from 'react';
import "./Signup.css"
import { Button,
  message,
  Steps,
  Breadcrumb,
  Form, 
  Input,
  DatePicker, 
  Select,  } from 'antd';

function Signup() {
  const onFinish=(e)=>{
    console.log(e)
  }
  const [form] = Form.useForm();
  const teacher = Form.useWatch("teacher", form);
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
                    <p>Add Teacher</p>
                      <Form form={form} onFinish={onFinish}>
                      <Form.Item
      label={<label style={{ 
        color: "#fff",
         fontSize:"19px", 
         marginTop:"10px",
         marginLeft:"-2px" 
        }}
        name={'teacher'}
        >Add/Assign</label>}

      >
        <Select placeholder="Add/Assign Teacher"required
            size="large"
            style={{
              width:"300px",
              marginLeft:"10px",
              border:"2px solid #5b5f97",
              borderRadius:"5px",
              
                
            }}>
              
              <Select.Option value="registerTeacher">Add Teacher</Select.Option>
              <Select.Option value="assignTeacher">Assign Teacher</Select.Option>
              
            </Select>
          
      </Form.Item>
      {teacher==='AssignTeacher'?
                                <Form.Item  name={'assign'}>
                                <Select
                                mode="multiple"
                                maxTagCount={3}
                                allowClear
                                style={{width:"300px",marginLeft:"40px"}}
                                placeholder="select class"
                                options={[
                                  {
                                    label:'1',
                                    value:'1st'
                                  },
                                  {
                                    label:'2',
                                    value:'2nd'
                                  },
                                  {
                                    label: '3',
                                    value:'3rd',
                                  },
                                  {
                                    label: "4",
                                    value:"4th"
                                  },
                                  {
                                    label:"5",
                                    value:'5th',

                                  },
                                  {
                                    label: "6",
                                    value:"6th",

                                  },
                                  {
                                    label:'7',
                                    value:'7th',
                                  }

                                  
                                  
                                ]}>

                                </Select>
                     </Form.Item>:null}

     
    
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
                        <Input placeholder="Enter teacher first name"required
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
                        <Input placeholder="Enter teacher last name"required
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
                        }}>Teacher Email</label>}
                      name={'tmail'}
                      >
                        <Input placeholder="Type teacher email"
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
                      
                      name={'tphone'}
                      >
                        <Input placeholder="Type teacher phone "required
                            style={{
                              width:"400px",
                              height:"50px",
                              fontSize:"20px"
                              }}
                        />
                      </Form.Item>
                      <Form.Item
                      
                      >
                                          <Select mode="multiple"
                                          maxTagCount={2}
                                          allowClear
                                          size="large"
                                          placeholder="Select Courses"
                                          style={{width:"400px",
                                          
                                          border:"2px solid #5b5f97",
                                          borderRadius:"5px",
                                           marginLeft:"138px",
                                          }}
                                          options={[
                                            {
                                              label:'Maths',
                                              value:'maths'
                                            },
                                            {
                                              label:'physics',
                                              value:'phsics'                  
                                            },
                                            {
                                              label:'Chemistry',
                                              value:'chemistry'
                                            },
                                            {
                                              label:'English',
                                              value:'english'                  
                                            },
                                            {
                                              label:'Biology',
                                              value:'biology'
                                            },
                                            {
                                              label:'General Science',
                                              value:'science'                  
                                            },
                                            {
                                              label:'Sport',
                                              value:'sport'
                                            },
                                            {
                                              label:'Art',
                                              value:'art'                  
                                            },
                                            
                                          ]}
                                          >

                                          </Select>
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

export default Signup