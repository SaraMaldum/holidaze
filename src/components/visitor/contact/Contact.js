import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Form from 'react-bootstrap/Form';
import ErrorMsg from './error/ErrorMsg';
import Buttons from '../layout/buttons/Buttons';
import FormLabel from '../contact/formStyles/FormLabel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Input from './formStyles/Input';
import Heading1 from '../layout/headings/Heading1';
import { useHistory } from 'react-router-dom';
import {BASE_URL, headers, POST} from '../../../constants/api';

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
    const [sendMsg, setSentMsg ] = useState([])

    const options = { headers };
    const contactMsgURL = BASE_URL + 'contacts';

    let history = useHistory();

    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    useEffect(() => {
        fetch(contactMsgURL, options)
        .then((response) => response.json())
        .then((json) => {setFormSent(json)
            setSentMsg(json)
        })
        .catch((error) => console.log(error));
    }, [contactMsgURL, options]);

    async function onSubmit( data ) {
        setFormSent( true );
        console.log( 'The data that was submitted: ' + JSON.stringify( data ) );
        
        const updateOptions = {headers, method: POST, body: JSON.stringify(data)};

        await fetch(contactMsgURL, updateOptions);

        history.push("/contact")
    }

    return (
        <Container>
            <Heading1 title="Contact us"/>
            <Form onSubmit={handleSubmit( onSubmit )}>
                {formSent && <p>Thank you for your message. We'll respond shortly.</p>}
                
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