import React, { useState, useEffect } from 'react'; // import useState and useEffect
import { Table, Button } from 'antd';
import { Getdata } from '../Apis/Getdata';
import { useSelector } from 'react-redux';

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

export default function History() {
    const token = useSelector(state=>state.user.Token)
  const [transformedArray, setTransformedArray] = useState([]); // initialize transformedArray as a state variable

  useEffect(() => { // use useEffect hook to fetch data and transform the array
    async function fetchData() {
      try {
        const result = await Getdata(token);
        const transformed = result.map((item, index) => {
          const firstWord = item.questions.split(' ')[0];
          return {
            key: index + 1,
            Title: firstWord,
            Date: item.date,
            Question: item.questions,
            description: item.answer,
          };
        });
        setTransformedArray(transformed); // set the transformed array as the state variable
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []); // call the effect only once on component mount

  return (
    <Table
      pagination={{ pageSize: 5 }}
      columns={columns}
      expandable={{
        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      dataSource={transformedArray}
    />
  );
}
