import React, {useState }from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Form, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import { BASE_URL, headers } from '../../../constants/api';
import ErrorMsg from '../contact/error/ErrorMsg';
import Buttons from '../layout/buttons/Buttons';
import FormLabel from '../contact/formStyles/FormLabel';
import Input from '../contact/formStyles/Input';
import ResultMsg from '../contact/resultMsg/ResultMsg';
import StyledContainer from '../layout/containerStyle/StyledContainer';

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
    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    const { id } = useParams();
    const history = useHistory();

    async function onSubmit( data ) {
        const enquiryURL = BASE_URL + 'enquiries';

        console.log( 'The data that was submitted: ' + JSON.stringify( data ) );
        const enquiryOptions = { headers, method: "POST", body: JSON.stringify(data)};
      
          await fetch(enquiryURL, enquiryOptions);
      
          history.go();

          setEnquiryForm(true);
    }

    return (
        <StyledContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
            {enquiryForm && <ResultMsg>Thank you for your booking. We're looking forward seeing you.</ResultMsg>}  
                <Row>
                    <Input name="establishmentId" defaultValue={id} type="hidden" ref={register}/>
                    <Col md={12}>
                        <Form.Group>
                            <FormLabel>Full name</FormLabel>
                            <Input name="name" placeholder="Enter your full name" ref={register}/>
                            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group>
                            <FormLabel>Email</FormLabel>
                            <Input name="email" placeholder="Enter an email address" ref={register}/>
                            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                        </Form.Group>
                    </Col>

                    <Col md={6} sm={12}>
                        <Form.Group>
                            <FormLabel>Check in</FormLabel>
                            <Input name="checkIn" type="date" ref={register}/>
                        </Form.Group>
                    </Col>
                    <Col md={6} sm={12}>
                        <Form.Group>
                            <FormLabel>Check out</FormLabel>
                            <Input name="checkOut" type="date" ref={register}/>
                        </Form.Group>
                    </Col>
                  
                <Col className="text-right">
                    <Buttons type="submit"><FaCalendarAlt /> Book now</Buttons>
                </Col>
                </Row>
        </Form>
        </StyledContainer>
    )
}

export default EnquiryForm;

//<DatePicker type="date" name="date" date={date} onChange={e => setDate(e.target.value)} />
