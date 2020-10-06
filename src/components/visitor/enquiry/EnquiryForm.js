import React, {useState }from 'react';
import { useForm } from 'react-hook-form';
import { useHistory} from 'react-router-dom';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { BASE_URL, headers } from '../../../constants/api';
import Buttons from '../layout/buttons/Buttons';
import FormLabel from '../contact/formStyles/FormLabel';
import Input from '../contact/formStyles/Input';
import SentMsg from '../contact/sentMsg/SentMsg';

function EnquiryForm({Accommodation}) {
    const [enquiryForm, setEnquiryForm] = useState( false ); //variable for sending validation message
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    async function onSubmit( data ) {
        const enquiryURL = BASE_URL + 'enquiries';

        console.log( 'The data that was submitted: ' + JSON.stringify( data ) );
        const enquiryOptions = {
            headers,
            method: "POST",
            body: JSON.stringify(data),
          };
      
          await fetch(enquiryURL, enquiryOptions);
      
          history.go();

          setEnquiryForm(true);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
            {enquiryForm && <SentMsg>Thank you for your booking. We're looking forward seeing you.</SentMsg>}  
                <Row>
                    <Col md={12}>
                        <Form.Group>
                            <FormLabel>Accommodation name</FormLabel>
                            <Input
                                name="establishmentId"
                                defaultValue={Accommodation}
                                ref={register}
                                placeholder="Enter accommodation name"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group>
                            <FormLabel>Full name</FormLabel>
                            <Input
                                name="name"
                                placeholder="Enter your full name"
                                ref={register}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group>
                            <FormLabel>Email</FormLabel>
                            <Input
                                name="email"
                                placeholder="Enter an email address"
                                ref={register}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={6} sm={12}>
                        <Form.Group>
                            <FormLabel>Check in</FormLabel>
                            <Input
                                name="checkIn"
                                type="date"
                                ref={register}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} sm={12}>
                        <Form.Group>
                            <FormLabel>Check out</FormLabel>
                            <Input
                                name="checkOut"
                                type="date"
                                ref={register}
                            />
                        </Form.Group>
                    </Col>
                  
                <Col className="text-right">
                    <Buttons type="submit">Book now</Buttons>
                </Col>
                </Row>
        </Form>
        </Container>
    )
}

export default EnquiryForm;

