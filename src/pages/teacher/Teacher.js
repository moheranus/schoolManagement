import React from 'react'
import "./Teacher.css";
import { Button, Form, Input,Select,  } from 'antd';





function Teacher() {
  const [form] = Form.useForm();
  const teacher = Form.useWatch("teacher", form);
  return (
    <div className="teachersectionContainer">
        <div className="teacherSections">
                <div className="addTeacherSection">
                     <div className="teacherInfo">
                            <h2>Add Teacher</h2>
                            <div className="teacherAction">
                                   <Form form={form} >
                                         <Form.Item name={'teacher'}>
                                         <Select
                                              style={{width:"300px",border:"none", marginLeft:"40px"}}
                                              placeholder="Teacher Registration"
                                              options={[
                                                {
                                                  label:'Register Teacher',
                                                  value:'registerTeacher'
                                                },
                                                {
                                                  label:'Assign Teacher',
                                                  value:'AssignTeacher'                  
                                                },
                                                
                                              ]}>

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

                     {teacher==='AssignTeacher'?
                                <Form.Item  name={'assignSection'}>
                                <Select
                                mode="multiple"
                                maxTagCount={3}
                                allowClear
                                style={{width:"300px",marginLeft:"40px"}}
                                placeholder="select section"
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
                                    label: 'C',
                                    value:'C',
                                  },
                                  {
                                    label: "D",
                                    value:"D"
                                  },
                                  {
                                    label:"E",
                                    value:'E',

                                  },
                                  {
                                    label: "F",
                                    value:"F",

                                  },
                                  {
                                    label:'G',
                                    value:'G',
                                  }

                                  
                                  
                                ]}>

                                </Select>
                     </Form.Item>:null}

                                   </Form>
                            </div>
                     </div>
                     <div className="teacherForm">
                      
                            {teacher==='registerTeacher'?
                          <Form.Item
                          label='First Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {teacher==='registerTeacher'?
                          <Form.Item
                          label='Last Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}



                       {teacher==='AssignTeacher'?
                          <Form.Item
                          label='First Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {teacher==='AssignTeacher'?
                          <Form.Item
                          label='Last Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {teacher==='registerTeacher'?
                          <Form.Item
                          label='Email/mail' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {teacher==='registerTeacher'?
                          <Form.Item
                          label='Phone_no' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {teacher==='registerTeacher'?
                                         <Form.Item>
                                          <Select mode="multiple"
                                          maxTagCount={2}
                                          allowClear
                                          placeholder="Courses"
                                          style={{width:"300px",border:"none", marginLeft:"75px"}}
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
                                         :null}
                        <Button type="primary" style={{
                      marginLeft:"70px",
                      width:"300px",
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
  )
}

export default Teacher