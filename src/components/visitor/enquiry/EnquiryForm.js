import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Form from 'react-bootstrap/Form';
import ErrorMsg from '../contact/error/ErrorMsg';
import Buttons from '../layout/buttons/Buttons';
import FormLabel from '../contact/formStyles/FormLabel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Input from '../contact/formStyles/Input';
import DatePicker from './DatePicker';
import {moment} from 'react-moment';
import { Row } from 'react-bootstrap';

const schema = yup.object().shape( {
    name: yup
        .string()
        .min( 4, 'Name has to be longer than 4 characters' )
        .required( "Please enter your full name, at least 4 characters" ),
    email: yup
        .string()
        .email( "Please enter a valid email" )
        .required( "Please enter your email address" ),
} );

function EnquiryForm() {
    const [enquiryForm, setEnquiryForm] = useState( false ); //variable for sending validation message
    const [date, setDate] = useState(moment);

    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    function onSubmit( data ) {
        setEnquiryForm( true );
        console.log( 'The data that was submitted: ' + JSON.stringify( data ) );
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit( onSubmit )}>
                {enquiryForm && <p>Thank you for your booking. We're looking forward seeing you.</p>}
                
                <Row>
                    <Col md={6} sm={12}>
                        <Form.Group>
                            <FormLabel>Your name</FormLabel>
                            <Input type="text" name="name" placeholder="Your name" ref={register()} />
                            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                        </Form.Group>
                    </Col>

                    <Col md={6} sm={12}>
                        <Form.Group >
                            <FormLabel>Email</FormLabel>
                            <Input type="email" name="email" placeholder="Email address" ref={register()} />
                            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group>
                            <FormLabel>Choose dates</FormLabel>
                            <DatePicker date={date} onChange={e => setDate(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                

                <Col className="text-right">
                    <Buttons type="submit">Book now</Buttons>
                </Col>

            </Form>
        </Container>
    )
}

export default EnquiryForm;