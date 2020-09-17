import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import ErrorMsg from '../../visitor/contact/error/ErrorMsg';
import Buttons from '../../visitor/layout/buttons/Buttons';
import styled from 'styled-components';
import Input from '../../visitor/contact/input/Input';
import Heading1 from '../../visitor/layout/headings/Heading1';

const StyledLabel = styled( Form )`
    color: ${({theme}) => theme.colors.mainBlue};
    font-weight: bold;
`;

const schema = yup.object().shape( {
    userName: yup
        .string()
        .min( 4, 'Username has to be longer than 4 characters.' )
        .required( 'Username has to be longer than 4 characters.'),
    password: yup
        .string()
        .min(8, "Please enter your password, longer than 8 characters." )
        .required( "Password is required." ),
} );

function Login() {
    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    function onSubmit( data ) {
        console.log("data", data );
    }

    return (
        <Container>
            <Heading1 title="Log in" />
            <Form onSubmit={handleSubmit( onSubmit )}>                
                <Form.Group>
                    <StyledLabel>User name</StyledLabel>
                    <Input type="text" name="userName" placeholder="User name" ref={register()} />
                    {errors.userName && <ErrorMsg>{errors.userName.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <StyledLabel>Password</StyledLabel>
                    <Input type="password" name="password" placeholder="Password" ref={register()} />
                    {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
                </Form.Group>
            </Form>
            
            <Col className="text-right">
            <Buttons type="submit">Log in</Buttons>
            </Col>
        </Container>
    )
}

export default Login;