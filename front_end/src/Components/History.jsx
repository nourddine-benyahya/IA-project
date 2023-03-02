import React from 'react';
import { Table, Button } from 'antd';


const columns = [
    { title: 'Title', dataIndex: 'Title', key: 'Title' },
    { title: 'Date', dataIndex: 'Date', key: 'Date' },
    { title: 'Question', dataIndex: 'Question', key: 'Question' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];
  
  const data = [
    {
      key: 1,
      Title: 'morocco',
      Date: "2002/03/15 12:14:02",
      Question:"how can i .....ow can ow can ow can ow can ow can ow can ow can ow can ow can ow can ",
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },{
        key: 2,
        Title: 'morocco',
        Date: "2002/03/15 12:14:02",
        Question:"how can i .....",
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      }
  ];

export default function History() {
  return (
    <Table
        pagination={{ pageSize: 5 }}
      columns={columns}
      expandable={{
        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      dataSource={data}
    />
  );
}
