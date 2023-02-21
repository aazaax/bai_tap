import React from 'react';
import { Form, Input, Select, DatePicker, InputNumber, Button, Table, Tag } from 'antd';

export default function Home() {
 const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: '1',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: '2',
  },
  {
    title: 'Birth',
    dataIndex: 'birth',
    key: '3',
  },
  {
    title: 'Experience',
    dataIndex: 'experience',
    key: '4',
  },
  {
    title: 'Action',
    key: '5',
    dataIndex: 'action',
    render: (value, record) =>{
      return ( <>
        <Tag color="blue" style={{cursor:"pointer"}} onClick={()=>{}}>Edit</Tag>
        <Tag color="red" style={{cursor:"pointer"}} onClick={()=>{}}>Delete</Tag>
        </>
      )
    }
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    gender: 'Bigender',
    birth: '1949-06-21',
    experience: '3'
  },
  {
    key: '2',
    name: 'Jim Green',
    gender: 'Female to male trans-sexual man',
    experience: '2',
    birth: '1949-06-21'
  },
  {
    key: '3',
    name: 'Joe Black',
    gender: 'Cisgender',
    experience: '5',
    birth: '1949-06-21'
  },
  {
    key: '4',
    name: 'Brown John',
    gender: 'MALE',
    birth: '1949-06-21',
    experience: '55',
  },
];
  return (
    <>
      <div>
        <Form style={{width: 500, margin: "0 auto"}}  labelCol={{span: 6}} wrapperCol={{span: 18}}>
          <Form.Item label="Name" >
            <Input/>
          </Form.Item>
          <Form.Item label="Gender">
            <Select placeholder="Select gender"
              options={[
                {
                  value: 'male',
                  label: 'Male'
                },
                {
                  value: 'female',
                  label: 'Female'
                },
                {
                  value: 'other',
                  label: 'Other'
                }
              ]}
            />
          </Form.Item>
          <Form.Item label="Birth">
            <DatePicker/>
          </Form.Item>
          <Form.Item label="Experience">
            <InputNumber min={1} max={5} defaultValue={1}/>
          </Form.Item>
          <div style={{textAlign: 'right'}}><Button type='primary'>Submit</Button></div>
        </Form>
      </div>
        <Table style={{paddingTop: 50, maxWidth: 1260, margin: "0 auto"}} columns={columns} dataSource={data} />
    </>
  )
}
