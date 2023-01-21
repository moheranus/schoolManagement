import {useState} from 'react'
import {Form, Input, Steps, Button} from "antd"
function StepValue() {
    const [current, setCurrent] = useState(0);
    const [loginDetails, setLoginDetails] = useState(null)
    const [profileDetails, setProfileDetails] = useState(null)
    const [finish, setFinish] = useState(null)

    const onFinishLoginForm=(values)=>{
        setLoginDetails(values);
        setCurrent(1 )
        console.log(values)
    }

    const onFinishProfile=(values)=>{
        setProfileDetails(values);
        console.log(values)
        setCurrent(2 )
    }
    const onFinishs=(values)=>{
        setFinish(values);
        console.log(values)
        setCurrent(3 )
    }

const forms=[
    <LoginForm onFinish={onFinishLoginForm}/>,
    <Profile onFinish={onFinishProfile}/>,
    <Finish onFinish={onFinishs}/>
] 
  return (
    <div>
        <Steps 
        style={{
            padding:"40px 60px"
        }}
        onChange={setCurrent}
        current={current}
        
        >
            <Steps.Step title="Login"/>
            <Steps.Step title="Profile"/>
            <Steps.Step title="Finish"/>
        </Steps>
       {forms[current]}
    </div>
  )
}

function LoginForm({onFinish}){
    return <Form onFinish={onFinish}>
        <Form.Item label="Email" type="email" name="name" rule={[{
            required: true,
            message:'Please enter valid email address'
        }]}>
            <Input stye={{
                width:"400px"
            }}/>

        </Form.Item>
        <Form.Item label="Password" name="password" rule={[{
            required:true,
            message:"Please enter your password"
        }]}
        stye={{
            width:"400px"
        }}
        >
          <Input.Password 
          stye={{
            width:"400px"
        }}
          />
        </Form.Item>
        <Button type='primary' htmlType='submit'>Continue</Button>
    </Form>
}


function Profile ({onFinish}){
    return <Form onFinish={onFinish}>
        <Form.Item label="First Name" name="fname" rule={[{
            required: true,
            message:"Please enter your first name"
        }]}>
            <Input
            stye={{
                width:"400px"
            }}
            />
           
        </Form.Item>
        <Form.Item label="Last Name" name={'lname'} rule={[{
            required: true,
            message: 'Please enter your last name'
        }]}>
            <Input 
            stye={{
                width:"400px"
            }}
            />

        </Form.Item>
        <Button type='primary' htmlType='submit'>Continue</Button>
    </Form>
}
function Finish ({onFinish}){
    return (
        <>
        <h2>You are all set</h2>
        <Button type='primary'>Finish</Button>
        </>
    )
}

export default StepValue