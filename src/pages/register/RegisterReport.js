import React from "react";


import "antd/dist/reset.css";
import "./RegisterReport.css"
import { Button,
   
  Breadcrumb,
 Form, 
 Input,
 Table,
 DatePicker,
 Space,  Radio,
     
     Select,Modal  } from 'antd';

const RegisterReport = () => {
  const columns = [
   
    { 
      // title: "Addis Ababa Science and Technology University",
      title: <div style={{display:"flex", justifyContent:"center", fontSize:"24px"}}>Addis Ababa Science and Technology University</div>,

    children:[
          
          {
             title:"Class",
             dataIndex: 'class',
            key: 'class',
          },
          {
            title:"Male",
            dataIndex: 'male',
            key: 'male',
         },
         {
          title:"Female",
          dataIndex: 'female',
            key: 'female',
       },
       {
        title:"Total",
        dataIndex: 'total',
            key: 'total',
     },
    
     
      
    ]
   },
   
    
  ];

  const data = [
    {
      class: ' Class 1',
      
      male: '24',
      female: '27',
      total: '51',
      
      
    },
    {
      class: ' Class 2',
      
      male: '44',
      female: '37',
      total: '81',
      
      
    },
    {
      class: ' Class 3',
      
      male: '35',
      female: '47',
      total: '82',
      
      
    },
    {
      class: ' Class 4',
      
      male: '24',
      female: '27',
      total: '51',
      
      
    },
    {
      class: ' Class 5',
      
      male: '44',
      female: '37',
      total: '81',
      
      
    },
    {
      class: ' Class 6',
      
      male: '35',
      female: '47',
      total: '82',
      
      
    },
  ];

  return (
    <>
    <div className='attendanceTabs'>
      <Breadcrumb>
      <Breadcrumb.Item>
                   <a href="/loginreg">Register</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="/registerreporter">Database</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="/registerReport">Report</a>
                    </Breadcrumb.Item>
                        
                        
                </Breadcrumb>
      </div>
    <div 
    style={{
      display:"flex",
      marginLeft:"70%",
      marginTop:"20px",
      marginBottom:"20px"
      
  }}
    >
      
      <Form
      style={{display:"flex"}}
      >
      <Form.Item label="Year" name={'year'}>
                                  <Select
                                      style={{width:"250px",border:"none"}}
                                      placeholder="select Year"
                                      options={[
                                        {
                                          label:'2013',
                                          value:'2013'
                                        },
                                        {
                                          label:'2014',
                                          value:'2014'                  
                                        },
                                        {
                                          label:'2015',
                                          value:'2015'
                                        },
                                        
                                        
                                      ]}>

                                  </Select>
                          </Form.Item>
                          <Form.Item style={{marginLeft:"40px"}}>
                          <Button type="primary"
                          style={{
                            // backgroundColor: "#5b5f97",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            padding:"13px 30px"

                            }}>Print</Button>
                          </Form.Item>
      </Form>

    </div>
    <div className="tableCons">
    <Table
    
      columns={columns}
      dataSource={data}
      summary={() => <Summary />}
    ></Table>
    </div>
    </>
  );
};

const Summary = () => {
  return (
    <Table.Summary fixed="top">
      <Table.Summary.Row
      style={{
        backgroundColor: "#cacaca",
    color: "#5b5f97",
    fontSize: "23px",
      }}
      >
        <Table.Summary.Cell index={0} colSpan={1}>
          Total
        </Table.Summary.Cell>
        <Table.Summary.Cell index={1} colSpan={1}>
          381
        </Table.Summary.Cell>
        <Table.Summary.Cell index={2} colSpan={1}>
          220
        </Table.Summary.Cell>
        <Table.Summary.Cell index={3} colSpan={1}>
          601
        </Table.Summary.Cell>
      </Table.Summary.Row>
    </Table.Summary>
  );
};


export default RegisterReport;