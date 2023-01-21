 import React from 'react'
 import "./TranscriptTenth.css";
 import danimage from "../../assets/img/danimage.jpg";
 import { Table} from 'antd';




 const data = [
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





 function TranscriptTenth() {
  // const subjects = data[0].performance;
  const columns = [
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
   return (
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
            <Table columns={columns}
             dataSource={data}
             scroll={{ y: 500 }} 
             rowClassName={() => "rowClassName1"} 
             bordered />,
            </div>
        </div>
     </div>
   )
 }
 
 export default TranscriptTenth