import React from 'react';
import { Form, Input, Button } from 'antd';

function Register() {
    return (
        <>
            <div className='container'>
                <Form
                    name="wrap"
                    labelCol={{ flex: '110px' }}
                    labelAlign="left"
                    labelWrap
                    colon={false}
                >
                    <Form.Item label="Email" name="username" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">
                            Daftar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Register