import React,{useRef,useState} from 'react'
import { SearchOutlined } from '@ant-design/icons';
import "./RegisterReporter.css"
import { Input, Breadcrumb, Select, Table, Drawer, Space, Button, Col, Row,Form, DatePicker} from 'antd';
import Highlighter from 'react-highlight-words';
import { EditOutlined } from '@ant-design/icons';



const { Option } = Select;
const { Search } = Input;

const onSearch = (value) => console.log(value);
const onFinish=(e)=>{
    console.log(e)
}
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

function RegisterReporter() {

    const [openDrawer, setOpenDrawer] = useState(false);
    const viewDrawer = () => {
      setOpenDrawer(true);
    };
    const onClose = () => {
      setOpenDrawer(false);
    };




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
        <div className='registerReporter'
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

//TABLE COLUMANS


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
          title: 'Action',
          dataIndex: 'action',
        
          render: (_, record)=>{
            return(
              <>
              <Button type='primary'
               onClick={viewDrawer}
              icon={<EditOutlined />}
              style={{
                width:"100px",
                backgroundColor:"#5b5f97"
              }}
              >Edit</Button>

       <div className='drawerHolder'>
              <Drawer
              visible mask={false} height="80px" key="key"
        title="Edit Student Info"
        width={720}
        onClose={onClose}
        open={openDrawer}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#eb2445",
                color:"#fff",
                width: "100px"

            }}
            >Cancel</Button>
            {/* <Button htmlType='submit' type="primary" block
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#5b5f97 ",
                width: "150px"

            }}
            >
              Submit
            </Button> */}
          </Space>
        }
    
      >
        
        <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
        <div className='editTitle'>
            <h2>Student Detail</h2>

        
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="fname"
                label=" First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter first name',
                  },
                ]}
              >
                <Input placeholder="Please enter first name"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="Lname"
                label=" Last Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter last name',
                  },
                ]}
              >
                <Input placeholder="Please enter last name"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="studentemail"
                label="Email"
                rules={[
                  {
                    required: false,
                    message: 'Please enter email',
                  },
                ]}
              >
                <Input placeholder="Please enter email"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="studentphone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please enter phone number',
                  },
                ]}
              >
                <Input placeholder="Please enter phone number"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: 'Please select gender',
                  },
                ]}
              >
                <Select placeholder="Please select gender"
                style={{
                    border: '2px solid #5b5f97',
                    borderRadius:"7px",
                 }}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                  
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="birthDate"
                label="Birth Date"
                rules={[
                  {
                    required: true,
                    message: 'Please choose birth date',
                  },
                ]}
              >
                <DatePicker
                  style={{
                    border: '2px solid #5b5f97',
                    borderRadius:"7px",
                    width: '100%',
                  }}
                  
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="class"
                label="Assign Class"
                rules={[
                  {
                    required: true,
                    message: 'Please select class',
                  },
                ]}
              >
                <Select placeholder="Please select class"
                style={{
                    border: '2px solid #5b5f97',
                    borderRadius:"7px",
                 }} 
                >
                  <Option value="1st">1st Class</Option>
                  <Option value="2nd">2nd Class</Option>
                  <Option value="3rd">3rd Class</Option>
                  <Option value="4th">4th Class</Option>
                  <Option value="5th">5th Class</Option>
                  <Option value="6th">6th Class</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="section"
                label="Assign Section"
                rules={[
                  {
                    required: true,
                    message: 'Please select section',
                  },
                ]}
              >
                 <Select placeholder="Please select class"
                 style={{
                    border: '2px solid #5b5f97',
                    borderRadius:"7px",
                 }}
                 >
                  <Option value="A">A</Option>
                  <Option value="B">B</Option>
                  <Option value="C">C</Option>
                  <Option value="D">D</Option>
                  <Option value="E">E</Option>
                  <Option value="F">F</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          </div>
          <div className='editTitle'>
            <h2>Emeregency Contact</h2>
            <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="efname"
                label=" First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter first name',
                  },
                ]}
              >
                <Input placeholder="Please enter first name"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="elname"
                label=" Last Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter last name',
                  },
                ]}
              >
                <Input placeholder="Please enter last name"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="emeregencyemail"
                label="Email"
                rules={[
                  {
                    required: false,
                    message: 'Please enter email',
                  },
                ]}
              >
                <Input placeholder="Please enter email"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="emeregencyphone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please enter phone number',
                  },
                ]}
              >
                <Input placeholder="Please enter phone number"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
          </Row>

        </div>
        <div className='editTitle'>
        <h2>Address</h2>

        <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="city"
                label="City/Town"
                rules={[
                  {
                    required: true,
                    message: 'Please enter city name',
                  },
                ]}
              >
                <Input placeholder="Please enter city name"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="street"
                label=" Street Name"
                rules={[
                  {
                    required: false,
                    message: 'Please enter street name',
                  },
                ]}
              >
                <Input placeholder="Please enter street name"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="kebele"
                label="Kebele"
                rules={[
                  {
                    required: true,
                    message: 'Please kebele number',
                  },
                ]}
              >
                <Input placeholder="Please enter kebele number"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="house"
                label="House Number"
                rules={[
                  {
                    required: true,
                    message: 'Please enter House number',
                  },
                ]}
              >
                <Input placeholder="Please enter house number"
                style={{
                    width:"330px"
                }}
                 />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <Button htmlType='submit' type="primary" block
            style={{
                float:"right",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#5b5f97 ",
                width: "100%"

            }}
            >
              Submit
            </Button>
          
        </Form>
        
      </Drawer>
      </div>
      
              
              </>
            )
          }
        },
        
        
      ];
    
  return (
    <div>
        <div className='regTabs'>
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
        <div className='tabline'></div>
        <div className='registerTableHolder'>
            
            <div className='registerAction'>
            <Search placeholder="Enter name"
             onSearch={onSearch} enterButton 
             style={{
                width:"300px",
                

             }}
             />
             <Select
                        style={{
                            marginTop:"10px",
                            width:"300px",
                            // border:"none",
                            border: "2px solid #5b5f97",
                            borderRadius:"10px",
                            marginLeft:"40px",

                        }}
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
                 <Select
                        style={{
                            marginTop:"10px",
                            marginLeft:"40px",
                            width:"300px",
                            // border:"none",
                            border: "2px solid #5b5f97",
                            borderRadius:"10px"

                        }}
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
            </div>
            <div className='tableborder'>
            <Table columns={columns} dataSource={data} style={{
             width: '85vw',
             border: "2px solid #5b5f97",
             borderTopLeftRadius:"15px",
             borderTopRightRadius:"15px"
             

            }}/>
            </div>
        </div>
    </div>
  )
}

export default RegisterReporter