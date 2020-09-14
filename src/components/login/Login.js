import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ErrorMsg from '../contact/error/ErrorMsg';
import Buttons from '../layout/buttons/Buttons';
import styled from 'styled-components';
import Input from '../contact/input/Input';

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
            <h1>Log in</h1>
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

                <Buttons type="submit">Log in</Buttons>
            </Form>
        </Container>
    )
}

export default Login;