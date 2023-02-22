import React from 'react'
import { Form, Input, Select, DatePicker, InputNumber, Button, validateMessages } from 'antd';

export default function Formtutor() {
    const [form] = Form.useForm()
    const handleFinish = (values) => {
        console.log(values)
    }
    const handleClear = () => {
        form.resetFields()
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
            <InputNumber min={1} max={5} defaultValue={1}/>
          </Form.Item>
          <div style={{textAlign: 'right'}}><Button type='primary' htmlType="submit">Submit</Button></div>
          <div style={{textAlign: 'right', marginTop: 20}}><Button type='primary' htmlType="button" onClick={handleClear}>Clear Form</Button></div>
        </Form>
  )
}
