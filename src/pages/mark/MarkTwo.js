
import { Button,
   
    Breadcrumb,
   Form, 
   Input,
   Table,
   DatePicker,
   Space,  Radio,
       
       Select,  } from 'antd';
// import Highlighter from 'react-highlight-words';
import "./MarkTwo.css"

const columns = [
  {
    title: 'Name',
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
    title: 'Continuous Assessment',
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
    title: 'Exam(50)',
    render: (_, record)=>{
        return(
          <>
          <Input type="text" style={{width:"100%", fontSize:"18px"}}></Input>
          </>
        )
      }
    
  },
  {
    title: 'Total (100)',
   
    width: 120,
    fixed: 'right',
    
  },
];
const data = [
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


function MarkTwo (){
    return(
        <>
        <div className='markTabs'>
        <Breadcrumb>      <Breadcrumb.Item>
                        <a href="/mark">Mark report</a>
                        </Breadcrumb.Item>
                        
                        <Breadcrumb.Item>
                        <a href="/markReport">Mark report</a>
                        </Breadcrumb.Item>
                        
                        
                </Breadcrumb>

        </div>
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
        marginLeft:"40px"
    }}
    >Print Mark</Button>
    
  </Space>
           </div>
        </div>
    <div className='markTable'>
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="large"
    scroll={{
      x: 'calc(700px + 50%)',
      y: 400,
    }}
  />
  </div>
  </>
    )
};
export default MarkTwo;