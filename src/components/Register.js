import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText, Button, Input, Label, FormFeedback, FormGroup, Form } from 'reactstrap'
import { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmationPassword, setConfirmationPassword] = useState(null)
    const [validated, setValidated] = useState(false);
    const [usernameTouched, setUsernameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

    const handleSubmit = (event) => {
        console.log(event)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true)
    };
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
                        <Form name='register-form' id='register-form' noValidate onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for='username' >Username</Label>
                                <Input
                                    name='username'
                                    id='username'
                                    type='text'
                                    placeholder='Enter a username'
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    onBlur={() => setUsernameTouched(true)}
                                    valid={username.length > 0 && usernameTouched}
                                    invalid={username.length == 0 && usernameTouched}
                                />
                                <FormFeedback valid>Username is valid</FormFeedback>
                                <FormFeedback invalid>Oops! You need to enter a username.</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input
                                    name='password'
                                    id='password'
                                    type='password'
                                    placeholder='Enter your password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    onBlur={() => setPasswordTouched(true)}
                                    minLength={8}
                                    valid={password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/) && passwordTouched}
                                    invalid={!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/) && passwordTouched}
                                />
                                <FormFeedback valid>Password meets all requirements.</FormFeedback>
                                <FormFeedback invalid>Oops! You need to meet all password requirements.</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for='confirmpassword'>Confirm Password</Label>
                                <Input
                                    name='confirmPassword'
                                    id='confirmPassword'
                                    type='password'
                                    value={confirmationPassword}
                                    onChange={(e) => setConfirmationPassword(e.target.value)}
                                    placeholder='Renter your password'
                                    required
                                    onBlur={() => setConfirmPasswordTouched(true)}
                                    minLength={8}
                                    valid={password.match(confirmationPassword) && confirmPasswordTouched}
                                    invalid={!password.match(confirmationPassword) && confirmPasswordTouched}
                                />
                                <FormFeedback valid>Passwords match you are all good</FormFeedback>
                                <FormFeedback invalid>Oops! You need to fix the passwords to match.</FormFeedback>
                            </FormGroup>
                        </Form>
                        <section id='link-container'>
                            <Link to='/'>Login</Link>
                        </section>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Button form='register-form' color='primary'>
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Register;