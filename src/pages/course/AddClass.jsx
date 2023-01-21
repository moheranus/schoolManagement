import React, { useState } from 'react';
import "./AddClass.css";
import { Button,
  
    Breadcrumb,
   Form, 
   Input,
     
     
       Select,  } from 'antd';
// import {Routes, Route, useNavigate} from "react-router-dom"


function AddClass() {
  const [form] = Form.useForm();
  const classForm = Form.useWatch("classForm", form);
  const sectionForm = Form.useWatch("sectionForm", form);

  return (
    <>
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
    <div className='classSection'>
      
    <div className='addClassSection'>
        <div className='classInfo'>
             <div className='classAction' >
             {/* <Button type="primary">
              Add Class
             </Button>
             <Button type="primary" >
              Add Section
           </Button> */}
           <div className='formActions'>
                 
           </div>
             
             
           <Form form={form}>
        <Form.Item label=" Add Class" name={'classForm'}>
          <Select
          style={{width:"250px",border:"none"}}
          placeholder="Select number of class"
           options={[
            {
              label:'single class',
              value:'single'
            },
            {
              label:'multi class',
              value:'multi'                  
            },
          ]}>

          </Select>
        </Form.Item>
        <Form.Item label=" Assign Section" name={'sectionForm'}>
          <Select
          style={{width:"250px",border:"none"}}
          placeholder="Select number of section"
           options={[
            {
              label:'Single Section',
              value:'singlesection'
            },
            {
              label:'Multiple Section',
              value:'multisection'                  
            },
          ]}>

          </Select>
        </Form.Item>
        
        {classForm==='multi'?
        <Form.Item label="multiple Class" name={'classForm'}>
        <Select
        style={{width:"250px"}}
        placeholder="select number of classes"
         options={[
          {
            label:'2',
            value:'twoClass'
          },
          {
            label:'3',
            value:'threeClass'
          },
          {
            label:'4',
            value:'fourClass'
          },
          {
            label:'5',
            value:'fiveClass'
          },
          
          
        ]}>

        </Select>
      </Form.Item>:null}
      {sectionForm==='multisection'?
        <Form.Item label="Select class" name={'sectionForm'}>
        <Select
        style={{width:"250px"}}
        placeholder="select classe"
         options={[
          {
            label:'1',
            value:'classone'
          },
          {
            label:'2',
            value:'classtwo'
          },
          {
            label:'3',
            value:'classthree'
          },
          {
            label:'4',
            value:'classfour'
          },
          {
            label:'5',
            value:'classfive'
          }
          
          
        ]}>

        </Select>
      </Form.Item>:null}
      {sectionForm==='classone'?
        <Form.Item label="no_of Section" name={'sectionForm'}>
        <Select
        style={{width:"250px"}}
        placeholder="select class"
         options={[
          {
            label:'1',
            value:'onesection'
          },
          {
            label:'2',
            value:'twosection'
          },
          {
            label:'3',
            value:'threesection'
          },
          {
            label:'4',
            value:'foursection'
          },
          {
            label:'5',
            value:'fivesection'
          }
          
          
        ]}>

        </Select>
      </Form.Item>:null}
      {sectionForm==='singlesection'?
        <Form.Item label="Select Class" name={'sectionForm'}>
        <Select
        style={{width:"250px"}}
        placeholder="Select available classes"
         options={[
          {
            label:'1',
            value:'one'
          },
          {
            label:'2',
            value:'two'
          },
          {
            label:'3',
            value:'three'
          },
          {
            label:'4',
            value:'four'
          },
          {
            label:'5',
            value:'five'

          },
          {
            label:'6',
            value:'six'
          },
          {
            label: '7',
            value:'seven'
          },
          {
            label:'8',
            value:'eight'
          }
          
          
        ]}>

        </Select>
      </Form.Item>:null}
        
       
       
      </Form>
                
             </div>
        </div>
        <div className='classForm'>
        {classForm==='single'?
        <Form.Item
         label='Class Name' name={'specify'}>
          <Input placeholder='please enter first class'style={{width:"300px"}}/>
        </Form.Item>
        
        
        :null}
        
        {/* THREE CLASS START */}
         {classForm==='threeClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}

        {classForm==='threeClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {classForm==='threeClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {/* <Button type="primary" style={{
          marginLeft:"90px",
          width:"300px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginBottom:"10px",
          position:"absolute",
          }}>
              Add Class
             </Button> */}
        {/* THREE CLASS END */}
           {/* TWO CLASS START */}
        {classForm==='twoClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {classForm==='twoClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {/* <Button type="primary" style={{
          marginLeft:"90px",
          width:"300px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginBottom:"10px",
          position:"absolute",
          }}>
              Add Class
             </Button> */}
          {/* TWO CLASS END */}
          {/* FOUR CLASS START */}
          {classForm==='fourClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {classForm==='fourClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {classForm==='fourClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {classForm==='fourClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {/* <Button type="primary" style={{
          marginLeft:"90px",
          width:"300px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginBottom:"10px",
          position:"absolute",
          }}>
              Add Class
             </Button> */}
          {/* FOUR CLASS ENDS */}
          {/* FIVE CLASS START */}
          
        {classForm==='fiveClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {classForm==='fiveClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {classForm==='fiveClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {classForm==='fiveClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {classForm==='fiveClass'?
        <Form.Item label='Class Name' name={'specify'}>
          <Input placeholder='please enter class name'style={{width:"300px"}}/>
        </Form.Item>
        
        :null}
        {/* <Button type="primary" style={{
          marginLeft:"90px",
          width:"300px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginBottom:"10px",
          position:"absolute",
          }}>
              Add Class
             </Button> */}
          {/* FIVE CLASS ENDS */}

                  {/* ADD CLASS SECTION */}

                  {/* SINGLE SECTION FOR THE SELECTED CLASSES */}
                    {sectionForm==='one'?
                     <Form.Item label="Section name" name={'specify'}>
                      <Input placeholder="Assign single section for class one"style={{width:"300px"}}/>
                     </Form.Item>
                   :null }

                  {/* 2 SECTIONS FOR THE SELECTED CLASSES  */}
                  {sectionForm==='two'?
                     <Form.Item label="Section name" name={'specify'}>
                      <Input placeholder="Assign single section for class two"style={{width:"300px"}}/>
                     </Form.Item>
                   :null }
                   {sectionForm==='three'?
                     <Form.Item label="Section name" name={'specify'}>
                      <Input placeholder="Assign single section for class three"style={{width:"300px"}}/>
                     </Form.Item>
                   :null }
                    {sectionForm==='four'?
                     <Form.Item label="Section name" name={'specify'}>
                      <Input placeholder="Assign single section for class four"style={{width:"300px"}}/>
                     </Form.Item>
                   :null }
                    {sectionForm==='five'?
                     <Form.Item label="Section name" name={'specify'}>
                      <Input placeholder="Assign single section for class five"style={{width:"300px"}}/>
                     </Form.Item>
                   :null }


                   {/* NUMBER OF SECTIONS TO BE ASSIGNED INTO THE SELCTED CLASSES */}
                   {/* SIGNLE SECTION FOR THE GIVEN CLASSES */}

                   {sectionForm==='onesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {/* TWO SECTION FOR THE SELECTED CLASSES */}
                   {sectionForm==='twosection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {sectionForm==='twosection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {/* ADD THREE SECTIONS FOR THE SELECTED CLASSES */}
                   {sectionForm==='threesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {sectionForm==='threesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                    {sectionForm==='threesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {/* ADD FOUR SECTIONS FOR THE SELECTED CLASSES */}
                   {sectionForm==='foursection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {sectionForm==='foursection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                    {sectionForm==='foursection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {sectionForm==='foursesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {/* ADD FIVE SECTIONS  FOR THE SELECTED CLASSES */}
                   {sectionForm==='fivesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {sectionForm==='fivesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                    {sectionForm==='fivesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                   {sectionForm==='fivesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
                   </Form.Item>
                   :null}
                    {sectionForm==='fivesection'?
                   <Form.Item label="section name" name={'specify'}>
                    <Input placeholder='section name'style={{width:"300px"}}/>
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
    </>
  )
}


export default AddClass