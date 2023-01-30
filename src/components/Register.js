import { Link} from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText, Button, Input, Label } from 'reactstrap'
import { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmationPassword, setConfirmationPassword] = useState('')
    return (
        <div>
            <Card
                className='auth_form'
            >
                <CardBody id=''>
                    <CardTitle tag="h3">
                        Register
                    </CardTitle>
                    <CardText className='inputs'>
                        <Label for='username' >Username</Label>
                        <Input name='username' type='text'  placeholder='Enter a username'  onChange={(e) => setUsername(e.target.value)} value={username}/>
                        <Label for='password'>Password</Label>
                        <Input name='password' type='password'  placeholder='Enter your password' />
                        <Label for='confirmpassword'>Confirm Password</Label>
                        <Input name='confirmpassword' type='password'  placeholder='Renter your password' />
                        <section id='link-container'>
                            <Link to='/'>Login</Link>
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

export default Register;