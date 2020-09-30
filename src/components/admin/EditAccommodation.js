import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers, PATCH } from '../../constants/api';
import Heading1 from '../visitor/layout/headings/Heading1';
import AdminMenu from './AdminMenu';
import { Container, Col, FormLabel } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import DeleteAccommodation from './DeleteAccommodation';
import Input from '../visitor/contact/formStyles/Input';
import Buttons from '../visitor/layout/buttons/Buttons';

function EditAccommodation(){
    const defaultState = {
        name: "",
        email: "",
    };

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [accommodation, setAccommodation] = useState(defaultState);

    let { id } = useParams();

    const options = { headers };
    const editURL = BASE_URL + "establishments/" + id;

    console.log()

    useEffect(() => {
        fetch(editURL, options)
            .then((response) => response.json())
            .then((json) => setAccommodation(json))
            .catch((error) => console.log(error));
    }, [editURL, options]);

    async function onSubmit(data) {
        console.log("data", data);

        const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };

        await fetch(editURL, updateOptions);
        
        history.push("/admin/accommodationOverview");
    }

    return(
        <>
            <Container>
                <Heading1 title="Edit Accommodation" />
                <AdminMenu  />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <FormLabel>Name</FormLabel>
                        <Input name="name" defaultValue={accommodation.name} placeholder="Enter a name for the hotel" ref={register}/>
                    </Form.Group>

                    <Form.Group>
                        <FormLabel>Email address</FormLabel>
                        <Input name="email" defaultValue={accommodation.email} placeholder="Enter an email address" ref={register}/>
                    </Form.Group>
                </Form>
                <Col className="text-right">
                    <Buttons type="submit">Update</Buttons>
                    <DeleteAccommodation id={id} />
                </Col>
            </Container>
        </>
    )
}

export default EditAccommodation;