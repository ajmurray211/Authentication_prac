import '../App.css';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText, Button, Input, Label, FormGroup, Form, FormFeedback } from 'reactstrap'
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameTouched, setUsernameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        console.log(event)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    };


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
                        <Form name='login-form' id='login-form' noValidate validated={validated} onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for='username' >Username</Label>
                                <Input
                                    type='text'
                                    name="username"
                                    id="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder='Enter a username'
                                    required
                                    value={username}
                                    onBlur={() => setUsernameTouched(true)}
                                    invalid={username.length == 0 && usernameTouched}
                                />
                                <FormFeedback invalid>Oops! You cannot leve username blank.</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input
                                    name='password'
                                    id='password'
                                    onBlur={() => setPasswordTouched(true)}
                                    type='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter your password'
                                    required
                                    value={password}
                                    invalid={password.length == 0 && passwordTouched}
                                />
                                <FormFeedback invalid>Oops! You cannot leve password blank.</FormFeedback>
                            </FormGroup>
                        </Form>
                        <section id='link-container'>
                            <Link to='/register'>Register Account</Link>
                        </section>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Button form='login-form' color='primary' type='submit'>
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Login;