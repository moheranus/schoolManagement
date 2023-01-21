import React from 'react'
import { Button,
 
    Breadcrumb,
   Form, 
   Input,
     
       
       Select,  } from 'antd';
  import "./Course.css"
function Course() {
  const [form] = Form.useForm();
  const courseForm = Form.useWatch("courseForm", form);
  // const sectionForm = Form.useWatch("sectionForm", form);
  return (
    <div className='courseSectioncontainer'>
      <div className='CourseTabs'>
                <Breadcrumb>
                <Breadcrumb.Item>
                        <a href="/course">Add Course</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/addclass">Add Class</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="">Report</a>
                        </Breadcrumb.Item>
                        
                </Breadcrumb>
                </div>
                <div className='coursesection'>
                      
                  <div className='addcourseSection'>
                    
                    <div className='courseInfo'>
                       <h2>Add courses</h2>
                        <div className='courseAction'>
                          <Form form={form}>
                          <Form.Item label="Semister" name={'courseSemister'}>
                                  <Select
                                      style={{width:"250px",border:"none",marginLeft:"30px"}}
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
                             <Form.Item label="Class/year" name={'courseForm'}>
                                  <Select
                                      style={{width:"250px",border:"none", marginLeft:"20px"}}
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
                            {courseForm==='1'?
                                <Form.Item label="type of form" name={'courseForm'}>
                                <Select
                                style={{width:"250px", marginLeft:"12px"}}
                                placeholder="select type of form"
                                options={[
                                  {
                                    label:'Single Form',
                                    value:'singleform'
                                  },
                                  {
                                    label:'Multiple form',
                                    value:'multiform'
                                  },
                                  
                                  
                                  
                                ]}>

                                </Select>
                     </Form.Item>:null}
                     {courseForm==='multiform'?
                                <Form.Item label="no_of Form" name={'courseForm'}>
                                <Select
                                style={{width:"250px",marginLeft:"20px"}}
                                placeholder="select number of forms"
                                options={[
                                  {
                                    label:'2',
                                    value:'2form'
                                  },
                                  {
                                    label:'3',
                                    value:'3form'
                                  },
                                  {
                                    label:'4',
                                    value:'4form'
                                  },
                                  {
                                    label:'5',
                                    value:'5form'
                                  },
                                  
                                  
                                  
                                  
                                ]}>

                                </Select>
                     </Form.Item>:null}
                          </Form>

                        </div>
                        
                    </div>
                    <div className='courseForm'>
                       {courseForm==='singleform'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {/* 2FORMS */}
                       {courseForm==='2form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='2form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}

                       {/* 3FORMS  */}
                       {courseForm==='3form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='3form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='3form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {/* 4FORMS  */}
                       {courseForm==='4form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='4form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='4form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='4form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {/* 5FORMS */}
                       {courseForm==='5form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='5form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='5form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='5form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                       {courseForm==='5form'?
                          <Form.Item
                          label='Course Name' name={'specify'}>
                            <Input placeholder='please enter course name'style={{width:"300px"}}/>
                          </Form.Item>
        
        
                       :null}
                        <Button type="primary" style={{
                      marginLeft:"90px",
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

export default Course