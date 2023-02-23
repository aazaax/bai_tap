import { useDeleteUserMutation, useGetUsersQuery } from '@/redux/Slicer/slice.user';
import { parseDate } from '@/utils/parseDate';
import { message, Spin, Table, Tag } from 'antd';
import React from 'react'

export default function TableUser() {
    const {data, isLoading} = useGetUsersQuery()
    const [useDelete, { isLoading: isLoadingDelete }] = useDeleteUserMutation()
    const HandleDelete = (id) => {
        console.log(id)
        useDelete(id).unwrap().then(res => {
            message.success("User deleted")
        }).catch(err => {
            message.error("Failed to update user")
        })
    }
    const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: "30%",
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: "15%",
    },
    {
        title: 'Birth',
        dataIndex: 'birth',
        key: 'birth',
        width: "25%",
        render: (value, record) => {
            return <>
                {parseDate(value)}
            </>
        }
    },
    {
        title: 'Experience',
        dataIndex: 'experience',
        key: 'experience',
        width: "15%",
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        width: "15%",
        render: (value, record) =>{
        return ( <>
            <Tag color="blue" style={{cursor:"pointer"}} onClick={()=>{}}>Edit</Tag>
            <Tag color="red" style={{cursor:"pointer"}} onClick={()=> HandleDelete(record.id)}>Delete</Tag>
            </>
        )
        }
    },
    ]
  return (
    <div>
        <Spin spinning= {isLoadingDelete}>    
            <Table style={{paddingTop: 50, maxWidth: 1580, margin: "0 auto"}} columns={columns} dataSource={data} loading={isLoading} />
        </Spin>
    </div>
  )
}
