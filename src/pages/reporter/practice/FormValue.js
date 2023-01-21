import React from 'react';
import "./FormValue.css";
import "antd/dist/reset.css";
import { Form, Input, Button} from "antd";
function FormValue() {
    const onFinish=(e)=>{
        console.log(e)
    }
  return (
    <div>
        <Form onFinish={onFinish}>
            <Form.Item label="User name" name="username">
                      <Input placeholder='User Name' style={{
                width:"400px"
            }}/>

            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input.Password placeholder='password'
                 style={{
                    width:"400px"
                }}
                />
            </Form.Item>
            <Form.Item>
                <Button
                style={{
                    width:"400px",
                    backgroundColor:"green",
                    marginLeft:"75px",
                    color:"#fff"
                }}
                type='primary'
                htmlType='submit'
                block
                >Login</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default FormValue