import React from 'react';
import "./Registration.css";
import { Button,
  Breadcrumb,
 Form, 
 Input, 
Select,  } from 'antd';
function Registration() {
  const [form] = Form.useForm();
  const registrationCourse = Form.useWatch("registrationCourse", form);
  return (
    <div className='registrationContainer'>
          <div className='registrationTabs'>
          <Breadcrumb>
                        <Breadcrumb.Item>Registrations</Breadcrumb.Item>
                        
                        <Breadcrumb.Item>
                        <a href="">Report</a>
                        </Breadcrumb.Item>
                        
                </Breadcrumb>
                <div className='registrationSections'>
                     <div className='addregisterSection'>
                           <div className='registrationsInfo'>
                                <h2>Student Registration</h2>
                                <div className='registrationAction'>
                                      <Form form={form}>
                                      <Form.Item label="Semister" name={'registrationSemister'}>
                                  <Select
                                      style={{width:"250px",border:"none", marginLeft:"30px"}}
                                      placeholder="Semister"
                                      options={[
                                        {
                                          label:'1st Semister',
                                          value:'firstSemister'
                                        },
                                        {
                                          label:'2nd Semister',
                                          value:'secondSemister'                  
                                        },
                                        
                                      ]}>

                                  </Select>
                            </Form.Item>
                                      <Form.Item label="Class" name={'registrationClass'}>
                                  <Select
                                      style={{width:"250px",border:"none",marginLeft:"50px"}}
                                      placeholder="Select class"
                                      options={[
                                        {
                                          label:'1',
                                          value:'1'
                                        },
                                        {
                                          label:'2',
                                          value:'2'                  
                                        },
                                        {
                                          label:'3',
                                          value:'3'
                                        },
                                        {
                                          label:'4',
                                          value:'4'                  
                                        },
                                        {
                                          label:'5',
                                          value:'5'
                                        },
                                        {
                                          label:'6',
                                          value:'6'                  
                                        },
                                      ]}>

                                  </Select>
                            </Form.Item>
                            <Form.Item label="Section" name={'registrationSection'}>
                                  <Select
                                      style={{width:"250px",border:"none", marginLeft:"40px"}}
                                      placeholder="Select Section"
                                      options={[
                                        {
                                          label:'A',
                                          value:'A'
                                        },
                                        {
                                          label:'B',
                                          value:'B'                  
                                        },
                                        {
                                          label:'C',
                                          value:'C'
                                        },
                                        {
                                          label:'D',
                                          value:'D'                  
                                        },
                                        {
                                          label:'E',
                                          value:'E'
                                        },
                                        {
                                          label:'F',
                                          value:'F'                  
                                        },
                                      ]}>

                                  </Select>
                            </Form.Item>
                            <Form.Item label="Course" name={'registrationCourse'}>
                                  <Select
                                      style={{width:"250px",border:"none",marginLeft:"40px"}}
                                      placeholder="Select Coursea"
                                      options={[
                                        {
                                          label:'Maths',
                                          value:'maths'
                                        },
                                        {
                                          label:'Physics',
                                          value:'physics'                  
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
                                        
                                      ]}>

                                  </Select>
                            </Form.Item>
                                      </Form>
                                </div>
                           </div>
                           <div className='registrationForm'>
                           {registrationCourse==='maths'?
                          <Form.Item
                          label='First Name:' name={'specify'}>
                            <Input placeholder='please enter first name'style={{width:"350px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {registrationCourse==='maths'?
                          <Form.Item
                          label='Last Name:' name={'specify'}>
                            <Input placeholder='please enter last name'style={{width:"350px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {registrationCourse==='maths'?
                          <Form.Item
                          label='Email/Mail:' name={'specify'}>
                            <Input placeholder='please enter student email'style={{width:"350px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {registrationCourse==='maths'?
                          <Form.Item
                          label='Phone_no:' name={'specify'}>
                            <Input placeholder='please enter student phone'style={{width:"350px"}}/>
                          </Form.Item>
        
        
                       :null}
                       <Button type="primary" style={{
                      marginLeft:"80px",
                      width:"350px",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                      marginBottom:"10px",
                      position:"absolute",
                      }}>
                       Submit
                  </Button>
                           </div>
                     </div>
                </div>
          </div>
    </div>
  )
}

export default Registration