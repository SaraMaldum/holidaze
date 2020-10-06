import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Form, Container, Col } from 'react-bootstrap';
import {BASE_URL, headers, POST} from '../../../constants/api';
import ErrorMsg from './error/ErrorMsg';
import Buttons from '../layout/buttons/Buttons';
import FormLabel from '../contact/formStyles/FormLabel';
import Input from './formStyles/Input';
import Heading1 from '../layout/headings/Heading1';
import SentMsg from './sentMsg/SentMsg';

const schema = yup.object().shape( {
    name: yup
        .string()
        .min( 4, 'Name has to be longer than 4 characters.' )
        .required(),
    email: yup
        .string()
        .email( 'Please enter a valid email.' )
        .required(),
    message: yup
        .string()
        .min( 10, 'Message needs to be longer than 10 characters.' )
        .required(),
} );

function Contact() {
    const [formSent, setFormSent] = useState( false ); //variable for sending validation message

    const contactMsgURL = BASE_URL + 'contacts';

    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    async function onSubmit( data ) {
        setFormSent( false );
        console.log( 'The data that was submitted: ' + JSON.stringify( data ) );
        
        try {
            const updateOptions = {headers, method: POST, body: JSON.stringify(data)};

            await fetch(contactMsgURL, updateOptions);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setFormSent( true );
         }
    }

    return (
        <Container>
            <Heading1 title="Contact us"/>
            <Form onSubmit={handleSubmit( onSubmit )}>
                {formSent && <SentMsg>Thank you for your message. We'll respond shortly.</SentMsg>}
                <Form.Group>
                    <FormLabel>Your name</FormLabel>
                    <Input type="text" name="name" placeholder="Your name" ref={register()} />
                    {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" placeholder="Email address" ref={register()} />
                    {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <FormLabel>Message</FormLabel>
                    <Input type="text" as="textarea" rows="3" name="message" placeholder="Your message" ref={register()} />
                    {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
                </Form.Group>

                <Col className="text-right">
                    <Buttons type="submit">Send</Buttons>
                </Col>

            </Form>
        </Container>
    )
}

export default Contact;