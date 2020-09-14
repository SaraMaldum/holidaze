import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Form from 'react-bootstrap/Form';
import ErrorMsg from './error/ErrorMsg';
import Buttons from '../layout/buttons/Buttons';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Input from './input/Input';

const StyledLabel = styled( Form )`
    color: ${({theme}) => theme.colors.mainBlue};
    font-weight: bold;
`;

const schema = yup.object().shape( {
    name: yup
        .string()
        .min( 4, 'Name has to be longer than 4 characters' )
        .required( "Please enter your full name, at least 4 characters" ),
    email: yup
        .string()
        .email( "Please enter a valid email" )
        .required( "Please enter your email address" ),
    message: yup
        .string()
        .min( 10, 'Message needs to be longer than 10 characters.')
        .required("Please enter a message longer than 10 characters."),
} );

function Contact() {
    const [formSent, setFormSent] = useState( false ); //variable for sending validation message

    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    function onSubmit( data ) {
        setFormSent( true );
        console.log( 'The data that was submitted: ' + JSON.stringify( data ) );
    }

    return (
        <Container>
            <h1>Contact form</h1>
            <Form onSubmit={handleSubmit( onSubmit )}>
                {formSent && <p>Thank you for your message. We'll respond shortly.</p>}
                
                <Form.Group>
                    <StyledLabel>Your name</StyledLabel>
                    <Input type="text" name="nameame" placeholder="Your name" ref={register()} />
                    {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <StyledLabel>Email</StyledLabel>
                    <Input type="email" name="email" placeholder="Email address" ref={register()} />
                    {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <StyledLabel>Message</StyledLabel>
                    <Input type="text" as="textarea" rows="3" name="message" placeholder="Your message" ref={register()} />
                    {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
                </Form.Group>

                <Buttons type="submit">Send</Buttons>
            </Form>
        </Container>
    )
}

export default Contact;