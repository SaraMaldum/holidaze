import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormLabel from '../visitor/contact/formStyles/FormLabel';
import Input from '../visitor/contact/formStyles/Input';
import Heading1 from '../visitor/layout/headings/Heading1';
import Col from 'react-bootstrap/Col';
import Buttons from '../visitor/layout/buttons/Buttons';
import AdminMenu from './AdminMenu';

function AddAccommodation() {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    async function onSubmit(data) {
        console.log("data", data);

        const AddAccommodationURL = BASE_URL + "establishments";

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        await fetch (AddAccommodationURL, options);

        history.push("/admin/accommodationOverview");
    }

    return(
        <Container>
            <Heading1 title="Add accommodation" />
            <AdminMenu />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <FormLabel>Accommodation name</FormLabel>
                    <Input placeholder="Accommodation name" name="name" ref={register}/>
                </Form.Group>

                <Form.Group>
                    <FormLabel>Email address</FormLabel>
                    <Input placeholder="Email address" name="email" ref={register}/>
                </Form.Group>

                <Form.Group>
                    <FormLabel>Image</FormLabel>
                    <Input placeholder="Link to image" name="image" ref={register}/>
                </Form.Group>

                <Form.Group>
                    <FormLabel>Price</FormLabel>
                    <Input placeholder="Price per night" name="price" ref={register}/>
                </Form.Group>
                
                <Form.Group>
                    <FormLabel>Description</FormLabel>
                    <Input placeholder="Description" type="text" as="textarea" rows="3" name="description" ref={register}/>
                </Form.Group>

                <Col className="text-right">
                    <Buttons type="submit" >Add Accommodation</Buttons>
                </Col>
            </Form>

            
        </Container>
    )

}

export default AddAccommodation;
