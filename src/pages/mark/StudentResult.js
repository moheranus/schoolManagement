import React from 'react'
import "./StudentResult.css"
import { Button, Input , Divider, Tabs,Select,Space,Table, Drawer} from 'antd';
import { useMemo, useState } from 'react';
import { DownOutlined } from '@ant-design/icons'
import danimage from "../../assets/img/danimage.jpg";
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };


//marksheet columan data starts here


const markshetColumns = [
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
    // width: 100,
    fixed: 'left',
    children:[
        {
         title:"First Name",
         dataIndex: 'fname',
        },
        {
            title:"Last Name",
            dataIndex: 'lname',
        }
    ]
    
    
  },
  {
    title: ' CONTINUOUS ASSESSMENT',
    children: [
      {
        title: 'CA(5)',
        render: (value)=>{
            return(
              <>
              <Input type="text" style={{width:"100%", fontSize:"18px"}}
              
              ></Input>
              </>
            )
          }
          
       
      },
      {
        title: 'CA(5)',
        render: (_, record)=>{
            return(
              <>
              <Input type="text" style={{width:"100%", fontSize:"18px"}}></Input>
              </>
            )
          }
       
      },    
      {
        title: 'CA(10)',
        render: (_, record)=>{
            return(
              <>
              <Input type="text" style={{width:"100%", fontSize:"18px"}}></Input>
              </>
            )
          }
       
      },
      {
        title: 'CA(10)',
        render: (_, record)=>{
            return(
              <>
              <Input type="text" style={{width:"100%", fontSize:"18px"}}></Input>
              </>
            )
          }
       
      },
      {
        title: 'CA(10)',
        render: (_, record)=>{
            return(
              <>
              <Input type="text" style={{width:"100%", fontSize:"18px"}}></Input>
              </>
            )
          }
       
      },
      {
        title: 'CA(10)',
        render: (_, record)=>{
            return(
              <>
              <Input type="text" style={{width:"100%", fontSize:"18px"}}></Input>
              </>
            )
          }
       
      },
      
    ],
  },
  {
    title: 'EXAM(50)',
    render: (_, record)=>{
        return(
          <>
          <Input type="text" style={{width:"100%", fontSize:"18px"}}></Input>
          </>
        )
      }
    
  },
  {
    title: 'TOTAL (100)',
   
    width: 120,
    fixed: 'right',
    render: (_, record)=>{
      return(
        <>
        <Input type="text" style={{width:"100%", fontSize:"18px"}} readOnly></Input>
        </>
      )
    }
    
  },
];


//marksheet columan data ends here



//marksheet data starts here


const marksheetData = [
  {
      key: '1',
      fname: 'Daniel',
      lname: 'Shobe',
      
      
    },
    {
      key: '2',
      fname: 'Eliyas',
      lname: 'Asefa',
      
    },
    {
      key: '3',
      fname: 'Mamme',
      lname: 'Fasil',
      
    },
    {
      key: '4',
      fname: 'Tsige',
      lname: 'Tesema',
     
    },
   
];



//marksheet data ends here

  const data = [
    {
      key: 0,
      fname: "Eliyas",
      lname: "Asefa",
      gender:"M",
      class:"1",
      section:"A",
      sum:"1130",
  
      ave:"95.75",
      rank:"1"
     
    },
    {
      key: 1,
      fname: "Mohammed",
      lname: "Aman",
      gender:"M",
      class:"1",
      section:"A",
      sum:"1100",
      
      ave:"93.75",
      rank:"2"
     
    },
    
    {
      key: 2,
      fname: "Daniel",
      lname: "Shobe",
      gender:"M",
      class:"1",
      section:"A",
      sum:"1097",
      
      ave:"90.1",
      rank:"3"
     
    },
    {
      key: 3,
      fname: "Hanna",
      lname: "Amanuel",
      gender:"F",
      class:"1",
      section:"A",
      sum:"1080",
      
      ave:"88.9",
      rank:"4"
     
    },
    {
      key: 4,
      fname: "Almaz",
      lname: "Fite",
      gender:"F",
      class:"1",
      section:"A",
      sum:"1070",
      
      ave:"88",
      rank:"5"
     
    },
    {
      key: 5,
      fname: "Tesfa",
      lname: "Aman",
      gender:"M",
      class:"1",
      section:"A",
      sum:"890",
      
      ave:"75",
      rank:"10"
     
    },
    
   
   
  ];


//report card data start

const reportCardData = [
  {
    key: 0,
    subject: "AFAN OROMO",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "AMHARIC",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "ENGLISH",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "MATHEMATICS",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "PHYSICS",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "CHEMISTERY",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave:"91"
   
  },
  
  
 
 
];



// report card data end here


  
  
function StudentResult() {

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

//report card column data starts here

const reportCardColumns = [
  {
    title: "Subject",
    dataIndex:"subject"
  },
  {
    title: "Semister",
    dataIndex: "semister",
   

    children:[

      {
        title:" 1st Semister",
        dataIndex:"first"
      },
      {
        title:"2nd Semister",
        dataIndex:"second",
      },
      {
        title:"Average",
        dataIndex:"ave"
      }
    ]
  }
];

//report card column data end here



  const columns = [
    {
      title: "STUDENT INFORMATION",
      children:[
        {
          title:"First Name",
          dataIndex:"fname",
          width: "20%"
        },
        {
          title:"Last Name",
          dataIndex:"lname",
          width: "20%"
        },
        {
          title:"Gender",
          dataIndex:"gender",
          width: 100
        },
      ]
    },
    {
      title:"ClASS INFO",
      children:[
        {
          title:"Class",
          dataIndex:"class",
          width: 100
        },
        {
          title:"Section",
          dataIndex:"section",
          width: 100
        },
      ]

    },
    {
      title: "MARK REPORT",
      dataIndex: "mark",
     

      children:[

        {
          title:"SUM",
          dataIndex:"sum",
          
        },
        {
          title:"AVE",
          dataIndex:"ave",
          
        },
        {
          title:"Rank",
          dataIndex:"rank",
          
        }
      ]
    },
    {
      title:"ACTION",
      width: "15%",
      render:()=>{
        return(
          <>
          <Button type="primary"
            style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              padding:"18px 60px",
              backgroundColor:"#2155CD",
              
              fontFamily: "'Ubuntu', sans-serif",
	            fontWeight: "700"
              

              }}
              onClick={showDrawer}
              >View Details</Button>
              <div className='cardDrawer'>
              <Drawer
              mask={false}
              placement={placement}
              width={"calc(100% - 250px)"}
              onClose={onClose}
              open={open}
              extra={
                <Space>
                  <Button onClick={onClose}
                   style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    fontWeight:"900"
                  }}
                  >CLOSE</Button>
                  <Button type="primary" onClick={onClose}
                  style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    fontWeight:"900"
                  }}
                  >
                    PRINT
                  </Button>
                </Space>
              }
            >
        <div className='drawCont'>
        <div className='transcriptTenth'>
       <div className='transcriptLeft'>
        <br/>
        <div className='studentPhoto'><img src={danimage}alt='student'/></div>
        <div className='studentInfo'>
            <div className='heading'>
                 <p>STUDENT INFORMATION</p>
            </div>
            <div className='infoList'>
                <div className='infoType'>
                  <p>Full Name:</p>
                  <p>Gender:</p>
                  <p>Age:</p>
                  <p>Grade:</p>
                  <p>Section:</p>
                  <p>Year:</p>
                

                </div>
                <div className='infoName'>
                  <p>Daniel Shobe</p>
                  <p>Male</p>
                  <p>17</p>
                  <p>9th</p>
                  <p>B</p>
                  <p>2009.EC</p>
                </div>
            </div>
          



        </div>
        <div className='studentInfo'>
            <div className='heading'>
                 <p>STUDENT REPORT</p>
            </div>
            <div className='infoList'>
                <div className='infoType'>
                  <p>SUM:</p>
                  <p>AVE:</p>
                  <p>RANK:</p>
                  <p>CONDUCT:</p>
                  
                

                </div>
                <div className='infoName'>
                  <p>1097</p>
                  <p>89.9</p>
                  <p>2</p>
                  <p>A</p>
                  
                </div>
            </div>
          


          
        </div>
           
       </div>
        <div className='transcriptRight'>
            <div className='reportHeader'>
                  <div className='headerTitle'>
                    <p>STUDENT REPORT CARD</p>
                  </div>
                  
            </div>
            <div className='reportHeaderName'>
                <div className='schoolName'>
                        <p>ABC HIGH SCHOOL</p>
                </div>
            </div>
            <div className='cardTable'>
            <Table columns={reportCardColumns}
             dataSource={reportCardData}
             scroll={{ y: 500 }} 
             rowClassName={() => "rowClassName1"} 
             bordered />,
            </div>
        </div>
     </div>
        </div>
      </Drawer>
              </div>
             
          </>
        )
      }
    }
  ];
  return (
    <div className='studentResult'>
        <div className='studentTabs'>
       <Tabs>
          <Tabs.TabPane tab='Mark Sheet'key='tab 1'>
              <div className='markSheet'>
              <div className='markActions'>
           <div className='ActionCon'>
            <p>Class:</p>
           <Select
    showSearch
    style={{
      width: 300,
      marginRight:40,
      
    }}
    placeholder=" Select Class"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1st',
        label: '1st',
      },
      {
        value: '2nd',
        label: '2nd',
      },
      {
        value: '3rd',
        label: '3rd',
      },
      {
        value: '4th',
        label: '4th',
      },
      {
        value: '5th',
        label: '5th',
      },
      {
        value: '6th',
        label: '6th',
      },
    ]}
  />
  <p>Section:</p>
           <Select
    showSearch
    style={{
      width: 300,
      marginRight:40,
      
    }}
    placeholder=" Select Section"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: 'A',
        label: 'A',
      },
      {
        value: 'B',
        label: 'B',
      },
      {
        value: 'C',
        label: 'D',
      },
      {
        value: 'E',
        label: 'E',
      },
      
    ]}
  />
   <Space wrap>
    <Button type="primary"
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"50px",
        fontSize:"19px"
    }}
    >Submit Mark</Button>
    
  </Space>
  <Space wrap>
    <Button type="primary"
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"50px",
        fontSize:"19px",
        marginLeft:"40px",
        fontFamily: 'Ubuntu', 
	      fontWeight: '700'
    }}
    >Print Mark</Button>
    
  </Space>
           </div>
        </div>
    <div className='markTable'>
  <Table
    columns={markshetColumns}
    dataSource={marksheetData}
    bordered
    size="large"
    scroll={{
      x: 'calc(700px + 50%)',
      y: 400,
    }}
  />
  </div>
              </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab='Student Result'key='tab 2'>
          <div className='tabOneContainer'>
                <div className='studentResultAction'>
                    <div className='actionCont'>
                    <Space wrap>
    <Select
    suffixIcon={<DownOutlined style={{
        marginTop:"10px",
        fontSize:"22px",
        color: "#0002A1",
    }}onChange={handleChange}/>}
      defaultValue="Class 1"
      style={{
        width: 220,
      }}
      onChange={handleChange}
      options={[
        {
          value: '1st',
          label: 'Class 1',
        },
        {
          value: '2nd',
          label: 'Class 2',
        },
        {
          value: '3rd',
          label: 'Class 3',
        },
        {
          value: '4th',
          label: 'Class 4',
        },
        {
            value:"5th",
            label:"Class 5"
        }
      ]}
    />
  </Space>
  <Space wrap style={{
      marginLeft:"30px"
  }}>
    <Select
    suffixIcon={<DownOutlined style={{
        marginTop:"10px",
        fontSize:"22px",
        color: "#0002A1",
        
    }}onChange={handleChange}/>}
      defaultValue=" Section A"
      style={{
        width: 220,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'A',
          label: 'Section A',
        },
        {
          value: 'B',
          label: 'Section B',
        },
        {
          value: 'C',
          label: ' Section C',
        },
        {
          value: 'D',
          label: 'Section D',
        },
        {
            value:"E",
            label:"Section E"
        }
      ]}
    />
  </Space>
                    </div>
                 </div>
                 <div className='studentResultTable'>
                 <Table columns={columns}
                    dataSource={data}
                    scroll={{ y: 496 }} 
                    rowClassName={() => "rowClassName1"} 
                    bordered />,

                  </div>
                </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab='Tab 3'key='tab 3'>
                <div>tab three</div>
          </Tabs.TabPane>
       </Tabs>
        </div>
      
    </div>
  )
}

export default StudentResult