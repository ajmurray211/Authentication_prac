import '../App.css';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText, Button, Input, Label } from 'reactstrap'
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login">
            <Card
                className='auth_form'
            >
                <CardBody id=''>
                    <CardTitle tag="h3">
                        Log In
                    </CardTitle>
                    <CardText className='inputs'>
                        <Label for='username' >Username</Label>
                        <Input name='username' type='text' onChange={(e) => setUsername(e.target.value)} placeholder='Enter a username' />
                        <Label for='password'>Password</Label>
                        <Input name='password' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                        <section id='link-container'>
                            <Link to='/register'>Register Account</Link>
                            {/* <Link to='/forgotUsername'>Forgot Username</Link> */}
                        </section>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Button color='primary'>
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Login;