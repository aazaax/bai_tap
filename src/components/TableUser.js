import { useGetUsersQuery } from '@/redux/Slicer/slice.user';
import { Table, Tag } from 'antd';
import React from 'react'

export default function TableUser() {
    const {data, isLoading} = useGetUsersQuery()
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
    ]
  return (
    <div>
        <Table style={{paddingTop: 50, maxWidth: 1580, margin: "0 auto"}} columns={columns} dataSource={data} loading={isLoading} />
    </div>
  )
}
