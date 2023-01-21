import React,{useRef,useState} from 'react'
import { SearchOutlined } from '@ant-design/icons';
import "./Attendance.css"

import { Button,
   
  Breadcrumb,
 Form, 
 Input,
 Table,
 DatePicker,
 Space,  Radio,
     
     Select,Modal  } from 'antd';
     import Highlighter from 'react-highlight-words';
//table data


const data = [
  
  {
    key: '1',
    fname: 'Daniel',
    lname: 'Shobe',
    id: 'ets1233/11'
    
   
    
  },
  {
    key: '2',
    fname: 'Eliyas',
    lname: 'Asefa',
    id: 'ets1237/11'
    
    
    
  },
  {
    key: '3',
    fname: 'Tesfaye',
    lname: 'Jama',
    id: 'ets1238/11'
   
    
  },
  {
    key: '4',
    fname: 'Mohammed',
    lname: 'Ahmed',
    id: 'ets1253/11'
    
  
    
  },
  {
    key: '5',
    fname: 'Daniel',
    lname: 'Shobe',
    id: 'ets1244/11'
    
   
    
  },
  {
    key: '6',
    fname: 'Wase',
    lname: 'Asegid',
    id: 'ets1253/11'
    
    
  },
 
];






function Attendance() {

//radio

const [value, setValue] = useState(1);
const onChanged = (e) => {
  console.log('radio checked', e.target.value);
  setValue(e.target.value);
};



//submit attendance modal
const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //submit modal ends here



  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

// tables
//select class
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const onChanges = (date, dateString) => {
  console.log(date, dateString);
};

//select class ends





  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div className='AttendanceContianer'
        style={{
          padding: 2,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            width: '300px',
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'fname',
      key: 'fname',
      width: '25%',
      ...getColumnSearchProps('fname'),
    },
    {
      title: 'Last Name',
      dataIndex: 'lname',
      key: 'lname',
      width: '25%',
      ...getColumnSearchProps('lname'),
    },
    {
      title: 'Student ID',
      dataIndex: 'id',
      key: 'id',
      width: '25%',
      ...getColumnSearchProps('lname'),
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
    
      render: (_, record)=>{
        return(
          <>
          <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>Present</Radio>
    <Radio value={2}>Absent</Radio>
    <Radio value={3}>Late</Radio>
    
  </Radio.Group>
          </>
        )
      }
    },
    
    
  ];

  return (
    <div className='attendanceContainer'>
      <div className='attendanceTabs'>
      <Breadcrumb>
      <Breadcrumb.Item>
                        <a href="/attendance">Attendance</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/schedule">Attendance report</a>
                        </Breadcrumb.Item>
                        
                        
                </Breadcrumb>
      </div>
      <div className='tabline'></div>
      <div className='attendanceSection'>
         <div className='attendanceAction'>
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
                          <Form.Item style={{marginLeft:"40px"}}>
                          <DatePicker onChange={onChange} />
                          </Form.Item>
                          <Form.Item style={{marginLeft:"40px"}}>
                          <Button type="primary"
                          style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            padding:"18px 30px"

                            }}>Filter</Button>
                          </Form.Item>
                          <Form.Item style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        marginLeft:"20px"

                        }}>
               <Button type="primary"
               style={{
               display:"flex",
              justifyContent:"center",
             alignItems:"center",
              padding:"18px 100px"

           }} onClick={showModal}>Submit Attendance</Button>
     </Form.Item>
     <div className='attendaceModal'>
     <Modal 
     mask={false}
     open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
     
     >
           <p>submit attendance</p>
      </Modal>
      </div>
             </Form>
         </div>
         {/* Attendance TABLES HERE */}
         <div className='attendanceTables'>
             
         <div>
      <div className='AattendContainer'>
      
  

      </div>
      <div className='attendanceTable'>
  <Table columns={columns} dataSource={data} style={{
    width: '85.2vw',
    
   
    
  }}/>
  </div>
  
  
  
  </div>
         </div>
      </div>
      
    </div>
  )
}




export default Attendance;




// function TableDatas(data){
//   const [value, setValue] = useState(1);
//   const onChange = (e) => {
//     console.log('radio checked', e.target.value);
//     setValue(e.target.value);
//   return(
//     <div>
//      console.log(data.attendance)
//     </div>
//   );
// }}
