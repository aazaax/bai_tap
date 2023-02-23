import React from 'react'
import { Form, Input, Select, DatePicker, InputNumber, Button, message } from 'antd';
import { useAddUserMutation } from '@/redux/Slicer/slice.user';
import { validateMessages } from '@/utils/requireMessage'

export default function Formtutor() {
    const [addUser, {isLoading}] = useAddUserMutation()
    const [form] = Form.useForm()
    const handleFinish = (values) => {

      addUser(values).unwrap().then(res => {
        message.success("User added")
        form.resetFields()
      }).catch(err => {
        console.log(err)
        message.error("Failed to add user")
      })
      console.log(values)
    }

  return (
    <Form style={{width: 500, margin: "0 auto"}}  labelCol={{span: 6}} wrapperCol={{span: 18}} form={form} onFinish={handleFinish} validateMessages = {validateMessages}>
          <Form.Item label="Name" name="name" rules={[{required: true}]}>
            <Input/>
          </Form.Item>
          <Form.Item label="Gender" name="gender" rules={[{required: true}]}>
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
          <Form.Item label="Birth" name="birth" rules={[{required: true}]}>
            <DatePicker/>
          </Form.Item>
          <Form.Item label="Experience" name="experience" rules={[{required: true}]}>
            <InputNumber min={0} max={5} defaultValue={0}/>
          </Form.Item>
          <div style={{textAlign: 'right'}}><Button type='primary' htmlType="submit" loading={isLoading}>Submit</Button></div>
        </Form>
  )
}
