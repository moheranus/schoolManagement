import React from "react";

import { Table, Breadcrumb,Form, Button, Select } from "antd";
import "antd/dist/reset.css";

import "./Mark.css"
const MarkReport = () => {
  const columns = [
   
    { 
      // title: "Addis Ababa Science and Technology University",
      title: <div style={{display:"flex", justifyContent:"center", fontSize:"24px"}}>Addis Ababa Science and Technology University</div>,
    children:[
      {
        title:<div style={{display:"flex", justifyContent:"center", fontSize:"20px"}}>Student status summary according to class</div>,
        children:[
          {
            title:"No",
            dataIndex: 'no',
            key: 'no',

          },
          {
             title:"Name",
             dataIndex: 'name',
            key: 'name',
          },
          {
            title:"ID",
            dataIndex: 'id',
            key: 'id',
         },
         {
          title:"Grade",
          dataIndex: 'grade',
            key: 'grade',
       },
       {
        title:"Average",
        dataIndex: 'average',
            key: 'average',
     },
     {
      title:"Status",
      dataIndex: 'status',
            key: 'status',
   },
   {
    title:"Remark",
    dataIndex: 'remark',
            key: 'remark',
 },

        ]
       
      },
     
      
    ]
   },
    
  ];

  const data = [
    {
      no: '1',
      name: 'Daniel',
      id: 'ets4545/11',
      grade: '7',
      average: '77.6',
      status: "passed",
      remark:"Good"
      
    },
    {
      no: '2',
      name: 'Daniel',
      id: 'ets4545/11',
      grade: '7',
      average: '77.6',
      status: "passed",
      remark:"Good"
      
    },
    {
      no: '3',
      name: 'Daniel',
      id: 'ets4545/11',
      grade: '7',
      average: '77.6',
      status: "passed",
      remark:"Good"
      
    },
    {
      no: '4',
      name: 'Daniel',
      id: 'ets4545/11',
      grade: '7',
      average: '77.6',
      status: "passed",
      remark:"Good"
      
    },
  ];

  return (
    <>
    <div className='attendanceTabs'>
      <Breadcrumb>
      <Breadcrumb.Item>
                        <a href="/mark">Mark report</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/markReport">Mark report</a>
                        </Breadcrumb.Item>
                        
                        
                </Breadcrumb>
      </div>
      <div className='tabline'></div>
      <div className='markReportAction'>
             <Form>
                      <Form.Item label="Class" name={'class'}>
                                  <Select
                                      style={{width:"250px",border:"none"}}
                                      placeholder="select Class"
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
                          <Form.Item label="Section" name={'section'} style={{marginLeft:"30px"}}>
                                  <Select
                                      style={{width:"250px",border:"none"}}
                                      placeholder="select Class"
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
                          {/* <Form.Item  label='Select Month'style={{marginLeft:"40px"}}> */}
                          {/* <DatePicker onChange={onChange} picker="month" /> */}
                          {/* </Form.Item> */}
                          <Form.Item style={{marginLeft:"40px"}}>
                          <Button type="primary"
                          style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            padding:"18px 30px"

                            }}>Filter</Button>
                          </Form.Item>
             </Form>
         </div>
         <div className="markReporter">
    <Table
      columns={columns}
      dataSource={data}
      // summary={() => <Summary />}
    ></Table>
    </div>

    </>
  );
};

// const Summary = () => {
//   return (
//     <Table.Summary fixed="top">
//       <Table.Summary.Row>
//         <Table.Summary.Cell index={0} colSpan={2}>
//           total
//         </Table.Summary.Cell>
//         <Table.Summary.Cell index={1} colSpan={2}>
//           total
//         </Table.Summary.Cell>
//       </Table.Summary.Row>
//     </Table.Summary>
//   );
// };


export default MarkReport;