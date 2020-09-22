import React, {useContext} from 'react';
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
import {AuthContext } from '../../../context/AuthContext';

const StyledLabel = styled( Form.Label )`
    color: ${({theme}) => theme.colors.mainBlue};
    font-weight: bold;
`

const schema = yup.object().shape( {
    userName: yup
        .string()
        .min( 4, 'Username has to be longer than 4 characters.' )
        .required( 'Username has to be longer than 4 characters.'),
    password: yup
        .string()
        .min(8, "Password has to be longer than 8 characters." )
        .required( "Password is required." ),
} );

function Login() {
    
    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    function onSubmit( data ) {
        console.log("Log in information: ", data );
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Heading1 title="Log in" />
                <Form.Group>
                    <StyledLabel>Name</StyledLabel>
                    <Input name="userName" placeholder="Enter your username" ref={register()} />
                    {errors.userName && <ErrorMsg>{errors.userName.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <StyledLabel>Password</StyledLabel>
                    <Input name="password" placeholder="Enter your password" type="password" ref={register()} />
                    {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
                </Form.Group>

                <Col className="text-right">
                    <Buttons type="submit" href="/admin">Submit</Buttons>
                </Col>
            </Form>
        </Container>
    )
}

export default Login;