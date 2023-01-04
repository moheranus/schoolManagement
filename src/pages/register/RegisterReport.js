import React,{useRef,useState} from 'react'
import { SearchOutlined } from '@ant-design/icons';
// import "./regisr.css"
import { Button,
   
  Breadcrumb,
 Form, 
 Input,
 Table,
 DatePicker,
 Space,  Radio,
     
     Select,  } from 'antd';
     import Highlighter from 'react-highlight-words';
//table data


const data = [
  
  {
    key: '1',
    class: 'class 1',
    male: '50',
    female: '27',
    total: '77',
    
  },
  {
    key: '2',
    class: 'class 2',
    male: '42',
    female: '37',
    total: '79',
    
  },
  {
    key: '3',
    class: 'class 3',
    male: '34',
    female: '34',
    total: '68',
    
  },
  {
    key: '4',
    class: 'class 4',
    male: '28',
    female: '32',
    total: '60',
    
  },
  {
    key: '5',
    class: 'class 5',
    male: '42',
    female: '37',
    total: '79',
    
  },
 
 
 
];






function RegisterReport() {
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
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
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
      title: ' Addis Ababa Science and Technology University',
      dataIndex: 'AASTU',
      key: 'AASTU',
      children:[
        {
         title: 'Class',
         dataIndex: 'class',
         key: 'class',
          
        },
        {
            title: 'Male',
            dataIndex: 'male',
            key: 'male',
             
           },
           {
            title: 'Female',
            dataIndex: 'female',
            key: 'female',
             
           },
           {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
             
           },


      ]
    },
    
       
        
      
      
   
    
    
    
  ];

  return (
    <div className='attendanceContainer'>
      <div className='attendanceTabs'>
      <Breadcrumb>
                        <Breadcrumb.Item>Register</Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="">Report</a>
                        </Breadcrumb.Item>
                        
                        
                </Breadcrumb>
      </div>
      <div className='tabline'></div>
      <div className='attendanceSection'>
         <div className='attendanceAction'>
             <Form>
                      <Form.Item label="Select Year" name={'ReportYear'}>
                                  <Select
                                      style={{width:"250px",border:"none"}}
                                      placeholder="Academic Year"
                                      options={[
                                        {
                                          label:'2020',
                                          value:'2020'
                                        },
                                        {
                                          label:'2023',
                                          value:'2023'                  
                                        },
                                        {
                                          label:'2024',
                                          value:'2024'
                                        },
                                        {
                                          label:'2025',
                                          value:'2025'                  
                                        },
                                        {
                                          label:'2026',
                                          value:'2026'
                                        },
                                    
                                        
                                      ]}>

                                  </Select>
                          </Form.Item>
                          
                          {/* <Form.Item  label='Select Month'style={{marginLeft:"40px"}}> */}
                          {/* <DatePicker onChange={onChange} picker="month" /> */}
                          {/* </Form.Item> */}
                          <Form.Item style={{marginLeft:"40px", marginRight:"-990px"}}>
                          <Button type="primary"
                          style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            padding:"18px 30px"

                            }}>Print</Button>
                          </Form.Item>
             </Form>
         </div>
         {/* Attendance TABLES HERE */}
         <div className='attendanceTables'>
             
         <div>
      <div className='AattendContainer'>
      
  

      </div>
  <Table columns={columns} dataSource={data} style={{
    width: '80vw',
    
   
    
  }}/>
  
  </div>
         </div>
      </div>
    </div>
  )
}

export default RegisterReport;