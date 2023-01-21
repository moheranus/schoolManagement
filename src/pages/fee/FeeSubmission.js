import React, {useRef, useState } from 'react';
import "./FeeSubmission.css"
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Layout, Menu, theme, Avatar, Button,Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Table} from 'antd';
const { Option } = Select;

const onFinish=(e)=>{
  console.log(e)
}

const data = [
  
  {
    key: '1',
    fname: 'Daniel',
    lname: 'Shobe',
    id: 'ets1233/11',
    status: 'Paid',
    leftAmount: '1500'
    
   
    
  },
  {
    key: '2',
    fname: 'Eliyas',
    lname: 'Asefa',
    id: 'ets1237/11',
    
    status: 'Not Paid',
    leftAmount: '3500'
    
  },
  {
    key: '3',
    fname: 'Tesfaye',
    lname: 'Jama',
    id: 'ets1238/11',
    status: 'Paid',
    leftAmount: '1500'
   
    
  },
  {
    key: '4',
    fname: 'Mohammed',
    lname: 'Ahmed',
    id: 'ets1253/11',
    status: 'Paid',
    leftAmount: '2500'
    
  
    
  },
  {
    key: '5',
    fname: 'Daniel',
    lname: 'Shobe',
    id: 'ets1244/11',
    status: 'Paid',
    leftAmount: '500'
    
   
    
  },
  
 
];






function FeeSubmission() {

  const [form] = Form.useForm();
  const feeType = Form.useWatch("feeType", form);





  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };



  const [payOpen, setPayOpen] = useState(false);
  const showPayDrawer = () => {
    setPayOpen(true);
  };
  const onPayClose = () => {
    setPayOpen(false);
  };



// REPORT TABLE COLUMN INFO






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
      width: '20%',
      ...getColumnSearchProps('fname'),
    },
    {
      title: 'Last Name',
      dataIndex: 'lname',
      key: 'lname',
      width: '20%',
      ...getColumnSearchProps('lname'),
    },
    {
      title: 'Student ID',
      dataIndex: 'id',
      key: 'id',
     
      ...getColumnSearchProps('lname'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
    
    },
    {
      title: 'Left Amount',
      dataIndex: 'leftAmount',
    
    },
    {
      title: 'Action',
      dataIndex:'action',
      render: (_, record)=>{
        return(
          <>
          <Button  type="primary" style={{padding:"2px 20px"}}onClick={showPayDrawer}>
                  Pay
          </Button>
          <Drawer
        title="Fee Submission Form for individual"
        width={720}
        onClose={onPayClose}
        open={payOpen}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onPayClose} style={{padding:"2px 20px"}} >Cancel</Button>
            <Button onClick={onPayClose} type="primary" style={{padding:"2px 20px"}}>
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark form={form}onFinish={onFinish}>
          
          <Row gutter={16}>
            
            <Col span={12}>
            <Form.Item
                name="section"
                label="Select Section"
                rules={[
                  {
                    required: true,
                    message: 'Please select student Section'
                  },
                ]}
              >
                <Select placeholder="Please select section"style={{
                  width:"300px",
                  marginTop:"10px",
                  
                  
                  // border:"none",
                  border: "2px solid #5b5f97",
                  borderRadius:"10px"
                }}
                name="section"
                >
                  <Option value="A">A</Option>
                  <Option value="B">B</Option>
                  <Option value="C">C</Option>
                  <Option value="D">D</Option>
                  <Option value="E">E</Option>
                  
                  
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="class"
                label="Select Class"
                rules={[
                  {
                    required: true,
                    message: 'Please select student class',
                  },
                ]}
              >
                <Select placeholder="Please select class"style={{
                  width:"300px",
                  marginTop:"10px",
                  
                  
                  // border:"none",
                  border: "2px solid #5b5f97",
                  borderRadius:"10px"
                }}
                name="class"
                >
                  <Option value="1st">1st</Option>
                  <Option value="2nd">2nd</Option>
                  <Option value="3rd">3rd</Option>
                  <Option value="4th">4th</Option>
                  <Option value="5th">5th</Option>
                  <Option value="6th">6th</Option>
                  <Option value="7th">7th</Option>
                  <Option value="8th">8th</Option>
                  
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={'feeType'}
                label="payment method"
                rules={[  
                  {
                    required: true,
                    message: 'Please choose payment type',
                  },
                ]}
              >
                <Select placeholder="Please choose payment type "name={'feeType'}style={{
                  width:"300px",
                  marginTop:"10px",
                  
                  
                  // border:"none",
                  border: "2px solid #5b5f97",
                  borderRadius:"10px"
                  }}>
                  <Option value="cash">Cash</Option>
                  <Option value="bank">Bank</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
            {
              feeType==='cash'?
              <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="amount"
                label=" Amount"
                rules={[
                  {
                    required: true,
                    message: 'Please enter amount in number',
                  },
                ]}
              >
                <Input placeholder="Please enter amount in number "style={{width:"300px",
                  marginTop:"10px",
                  
                  
                  // border:"none",
                  border: "2px solid #5b5f97",
                  borderRadius:"10px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter description',
                  },
                ]}
              >
                <Input.TextArea rows={2} placeholder="" 
                style={{
                  width:"300px",
                  marginTop:"10px",
                 
                  
                  // border:"none",
                  border: "2px solid #5b5f97",
                  borderRadius:"10px"
                }}
                />
              </Form.Item>
            </Col>
          </Row>
            </Col>
          </Row>:null
            }
           {
              feeType==='bank'?
              <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="transaction"
                label="Transaction ID"
                rules={[
                  {
                    required: true,
                    message: 'Please enter transaction Id',
                  },
                ]}
              >
                <Input placeholder="Please enter transaction id"style={{width:"300px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
              
              name="amounts"
              label="Amount"
              rules={[
                {
                  required: true,
                  message: 'Please enter amount',
                },
              ]}
            >
              <Input placeholder="Please enter amount"style={{width:"300px"}} />
            </Form.Item>
            </Col>
          </Row>
             :null
            }

            {feeType==='bank'?
             <Row gutter={16}>
             <Col span={24}>
               <Form.Item
                 name="description"
                 label="Description"
                 
               >
                 <Input.TextArea rows={4} placeholder="Please enter description" />
               </Form.Item>
             </Col>
           </Row>

              :null
            }
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
          </>
        )
      }
    }
    
    
  ];




  return (
    <div className='feeContainer'>
         <div className='feeButton'> 
         
             <Button  type="primary" style={{padding:"2px 20px"}}onClick={showDrawer}>
                  Fee Form
             </Button>
             <Drawer
        title="Fee Submission Form"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose} style={{padding:"2px 20px"}} >Cancel</Button>
            <Button onClick={onClose} type="primary" style={{padding:"2px 20px"}}>
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="fname"
                label=" First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter student first name',
                  },
                ]}
              >
                <Input placeholder="Please enter student first name"style={{width:"300px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
              
              name="lname"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: 'Please enter student last name',
                },
              ]}
            >
              <Input placeholder="Please enter student last name"style={{width:"300px"}} />
            </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="phone"
                label="Phone number"
                rules={[
                  {
                    required: true,
                    message: 'Please enter student name',
                  },
                ]}
              >
                <Input placeholder="Enter phone number"style={{width:"300px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="section"
                label="Select Section"
                rules={[
                  {
                    required: true,
                    message: 'Please select student Section'
                  },
                ]}
              >
                <Select placeholder="Please select section"style={{width:"300px",
                  marginTop:"10px",
                  
                  
                  // border:"none",
                  border: "2px solid #5b5f97",
                  borderRadius:"10px"}}>
                  <Option value="A">A</Option>
                  <Option value="B">B</Option>
                  <Option value="C">C</Option>
                  <Option value="D">D</Option>
                  <Option value="E">E</Option>
                  
                  
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="class"
                label="Select Class"
                rules={[
                  {
                    required: true,
                    message: 'Please select student class',
                  },
                ]}
              >
                <Select placeholder="Please select class"style={{width:"300px",
                  marginTop:"10px",
                  
                  
                  // border:"none",
                  border: "2px solid #5b5f97",
                  borderRadius:"10px"}}>
                  <Option value="1st">1st</Option>
                  <Option value="2nd">2nd</Option>
                  <Option value="3rd">3rd</Option>
                  <Option value="4th">4th</Option>
                  <Option value="5th">5th</Option>
                  <Option value="6th">6th</Option>
                  <Option value="7th">7th</Option>
                  <Option value="8th">8th</Option>
                  
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={'feeType'}
                label="payment method"
                rules={[  
                  {
                    required: true,
                    message: 'Please choose payment type',
                  },
                ]}
              >
                <Select placeholder="Please choose payment type "name={'feeType'}style={{width:"300px",
                  marginTop:"10px",
                  
                  
                  // border:"none",
                  border: "2px solid #5b5f97",
                  borderRadius:"10px"}}>
                  <Option value="cash">Cash</Option>
                  <Option value="bank">Bank</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
            {
              feeType==='cash'?
              <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="amount"
                label=" Amount"
                rules={[
                  {
                    required: true,
                    message: 'Please enter amount in number',
                  },
                ]}
              >
                <Input placeholder="Please enter amount in number "style={{width:"300px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter description',
                  },
                ]}
              >
                <Input.TextArea rows={2} placeholder="" />
              </Form.Item>
            </Col>
          </Row>
            </Col>
          </Row>:null
            }
           {
              feeType==='bank'?
              <Row gutter={16}>
            <Col span={12}>
              <Form.Item
              
                name="transaction"
                label="Transaction ID"
                rules={[
                  {
                    required: true,
                    message: 'Please enter transaction Id',
                  },
                ]}
              >
                <Input placeholder="Please enter transaction id"style={{width:"300px"}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
              
              name="amounts"
              label="Amount"
              rules={[
                {
                  required: true,
                  message: 'Please enter amount',
                },
              ]}
            >
              <Input placeholder="Please enter amount"style={{width:"300px"}} />
            </Form.Item>
            </Col>
          </Row>
             :null
            }

            {feeType==='bank'?
             <Row gutter={16}>
             <Col span={24}>
               <Form.Item
                 name="description"
                 label="Description"
                 
               >
                 <Input.TextArea rows={4} placeholder="Please enter description" />
               </Form.Item>
             </Col>
           </Row>

              :null
            }
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
         {/* FEE BUTTON END */}
         
         <div className='feeReportContainer'>
          
             <div className='stat'>
              <div className='totalMoney'>
                <div className='tit'>
                    <p>Total Money</p>
                </div>
                <div className='amount'>
                     <p>5300</p>
                </div>
                
              </div>
              <div className='totalStudent'>
              <div className='tit'>
                    <p>Total Student</p>
                </div>
                <div className='amount'>
                     <p>300</p>
                </div>
                </div>
              </div>
              <div className='reportAction'>
                   <div className='feeReportAction'>
                    <div className='reportActionTitle'>
                        <p>View list of student who paid</p>
                    </div>
                    <div className='reportFilter'>
                    <Form>
                      <Form.Item label="Class" name={'class'}style={{marginLeft:"30px"}}>
                                  <Select
                                      style={{width:"170px",
                                      border:"2px solid #5b5f97",
                                      borderRadius:"7px",
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
                          </Form.Item>
                          <Form.Item label="Section" name={'section'} style={{marginLeft:"30px"}}>
                                  <Select
                                      style={{width:"170px",
                                      border:"2px solid #5b5f97",
                                      borderRadius:"7px",
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
                          </Form.Item>
                          <Form.Item label="Month" name={'month'} style={{marginLeft:"30px"}}>
                                  <Select
                                      style={{width:"170px",border:"2px solid #5b5f97",
                                      borderRadius:"7px",}}
                                      placeholder="select month"
                                      options={[
                                        {
                                          label:'Jan',
                                          value:'jan'
                                        },
                                        {
                                          label:'Feb',
                                          value:'feb'                  
                                        },
                                        {
                                          label:'Mar',
                                          value:'mar'
                                        },
                                        {
                                          label:'Apr',
                                          value:'apr'                  
                                        },
                                        {
                                          label:'May',
                                          value:'may'
                                        },
                                        {
                                          label:'Jun',
                                          value:'jun'                  
                                        },
                                        {
                                          label:'Jul',
                                          value:'jul'
                                        },
                                        {
                                          label:'Aug',
                                          value:'aug'                  
                                        },
                                        {
                                          label:'Sept',
                                          value:'sept'
                                        },
                                        {
                                          label:'Oct',
                                          value:'oct'                  
                                        },
                                        {
                                          label:'Nov',
                                          value:'nov'
                                        },
                                        {
                                          label:'Dec',
                                          value:'dec'                  
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

                            }}>Search</Button>
                          </Form.Item>
                </Form>
                    </div>
                   </div>
                   
              </div>
              
              
         </div>
         <div className='reportTables'>
         <div className='tabline'></div>
          <div className='tableCont'>
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

export default FeeSubmission