import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Col, Form } from 'react-bootstrap';
import { BASE_URL, headers, PATCH } from '../../../constants/api';
import Heading1 from '../../visitor/layout/headings/Heading1';
import AdminMenu from '../AdminMenu';
import DeleteButton from './DeleteButton';
import FormLabel from '../../visitor/contact/formStyles/FormLabel';
import Input from '../../visitor/contact/formStyles/Input';
import StyledSpinner from '../../visitor/layout/spinner/Spinner';

function DeleteAccommodation(){
    const defaultState = {
        name: "",
        email: "",
        image: "",
        price: "",
        description: "",
    };

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [accommodation, setAccommodation] = useState(defaultState);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const options = { headers };
    const deleteURL = BASE_URL + 'establisments/' + id;

    useEffect(() => {
        fetch(deleteURL, options)
            .then((response) => response.json())
            .then((json) => setAccommodation(json))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function onSubmit(data) {
        console.log("data", data);

        const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };

        await fetch(deleteURL, updateOptions);
        
        history.push("/admin/accommodationOverview");
    }

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return(
        <>
            <Container>
                <StyledSpinner />
                <Heading1 title="Delete Accommodation" />
                <AdminMenu  />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <FormLabel>Name</FormLabel>
                        <Input name="name" defaultValue={accommodation.name} placeholder="Accommodation name" ref={register}/>
                    </Form.Group>

                    <Form.Group>
                        <FormLabel>Email address</FormLabel>
                        <Input name="email" defaultValue={accommodation.email} placeholder="Email address" ref={register}/>
                    </Form.Group>

                    <Form.Group>
                        <FormLabel>Image</FormLabel>
                        <Input name="image" defaultValue={accommodation.image} placeholder="Link to image" ref={register}/>
                    </Form.Group>

                    <Form.Group>
                        <FormLabel>Price</FormLabel>
                        <Input name="price" defaultValue={accommodation.price} placeholder="Price per night" ref={register}/>
                    </Form.Group>

                    <Form.Group>
                        <FormLabel>Description</FormLabel>
                        <Input name="description" defaultValue={accommodation.description} placeholder="Description" ref={register}/>
                    </Form.Group>
                </Form>
                <Col className="text-right">
                    <DeleteButton id={id} />
                </Col>
            </Container>
        </>
    )
}

export default DeleteAccommodation;