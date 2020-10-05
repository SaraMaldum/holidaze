import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import {moment} from 'react-moment';
import { Form, Container, Row, Col } from 'react-bootstrap';
import {BASE_URL, headers, POST} from '../../../constants/api';
import ErrorMsg from '../contact/error/ErrorMsg';
import Buttons from '../layout/buttons/Buttons';
import FormLabel from '../contact/formStyles/FormLabel';
import Input from '../contact/formStyles/Input';
import DatePicker from './DatePicker';

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

    const bookingURL = BASE_URL + 'enquiries';

    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    async function onSubmit( data ) {
        setEnquiryForm( false );
        console.log( 'The data that was submitted: ' + JSON.stringify( data ) );
        
        try {
            const updateOptions = {headers, method: POST, body: JSON.stringify(data)};

            await fetch(bookingURL, updateOptions);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setEnquiryForm( true );
         }
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