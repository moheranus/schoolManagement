import React from "react";

import { Table } from "antd";
import "antd/dist/reset.css";


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
      no: '1',
      name: 'Daniel',
      id: 'ets4545/11',
      grade: '7',
      average: '77.6',
      status: "passed",
      remark:"Good"
      
    },
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
      no: '1',
      name: 'Daniel',
      id: 'ets4545/11',
      grade: '7',
      average: '77.6',
      status: "passed",
      remark:"Good"
      
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      // summary={() => <Summary />}
    ></Table>
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