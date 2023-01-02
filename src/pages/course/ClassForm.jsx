// import React from 'react'
// import { Button,
//   message,
//    Steps,
//     Breadcrumb,
//    Form, 
//    Input,
     
//       DatePicker, 
//        Select,  } from 'antd';
// function ClassForm() {
//   const [form] = Form.useForm();
//   const classForm = Form.useWatch("classForm", form);
  
//   return (
//     <div>
//       <Form form={form}>
//         <Form.Item label="Class" name={'classForm'}>
//           <Select
//           style={{width:"300px"}}
//           placeholder="Select Class"
//            options={[
//             {
//               label:'single class',
//               value:'single'
//             },
//             {
//               label:'multi class',
//               value:'multi'
//             },
//           ]}>

//           </Select>
//         </Form.Item>
        
//         {classForm==='multi'?
//         <Form.Item label="Class" name={'classForm'}>
//         <Select
//         style={{width:"300px"}}
//         placeholder="Select Class"
//          options={[
//           {
//             label:'two class',
//             value:'twoClass'
//           },
//           {
//             label:'three class',
//             value:'threeClass'
//           },
//           {
//             label:'four class',
//             value:'fourClass'
//           },
//           {
//             label:'Five Class',
//             value:'fiveClass'
//           },
//         ]}>

//         </Select>
//       </Form.Item>:null},
//         {classForm==='single'?
//         <Form.Item label='Enter Class Year' name={'specify'}>
//           <Input placeholder='please enter first class'/>
//         </Form.Item>
        
//         :null},
//         {classForm==='threeClass'?
//         <Form.Item label='third classes' name={'specify'}>
//           <Input placeholder='please enter 3rd classes'/>
//         </Form.Item>
        
//         :null},
//         {classForm==='threeClass'?
//         <Form.Item label='third classes four' name={'specify'}>
//           <Input placeholder='please enter 3rd classes four'/>
//         </Form.Item>
        
//         :null},
       
//       </Form>
//     </div>
//   )
// }

// export default ClassForm