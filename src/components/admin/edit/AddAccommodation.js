import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from '../../../constants/api';
import { Form, Col } from 'react-bootstrap';
import FormLabel from '../../visitor/contact/formStyles/FormLabel';
import Input from '../../visitor/contact/formStyles/Input';
import Heading1 from '../../visitor/layout/headings/Heading1';
import Buttons from '../../visitor/layout/buttons/Buttons';
import StyledContainer from '../../visitor/layout/containerStyle/StyledContainer';
import AdminMenu from '../AdminMenu';
import ErrorMsg from '../../visitor/contact/error/ErrorMsg';

function AddAccommodation() {
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    async function onSubmit(data) {
        console.log('data', data);

        const AddAccommodationURL = BASE_URL + 'establishments';

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        await fetch (AddAccommodationURL, options);

        history.push("/admin/");
    }

    return(
        <StyledContainer>
            <Heading1 title="Add accommodation" />
            <AdminMenu />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <FormLabel>Accommodation name*</FormLabel>
                    <Input placeholder="Accommodation name" name="name" ref={register({required: true, minLength: 4})}/>
                    {errors.name && <ErrorMsg>Hotel name is required.</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <FormLabel>Email address*</FormLabel>
                    <Input placeholder="Email address" name="email" ref={register({required: true, minLength: 4})}/>
                    {errors.email && <ErrorMsg>Email address is required.</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <FormLabel>Image</FormLabel>
                    <Input placeholder="Image link" name="image" ref={register}/>
                </Form.Group>
                
                <Form.Group>
                    <FormLabel>Price*</FormLabel>
                    <Input placeholder="Price" type="number" name="price" ref={register({required: true})}/>
                </Form.Group>

                <Form.Group>
                    <FormLabel>Description</FormLabel>
                    <Input placeholder="Description" name="description" as="textarea" rows="3" ref={register}/>
                </Form.Group>

                <p>* are required fields.</p>
                <Col className="text-right">
                    <Buttons type="submit" >Add Accommodation</Buttons>
                </Col>
            </Form>
        </StyledContainer>
    )
}

export default AddAccommodation;
