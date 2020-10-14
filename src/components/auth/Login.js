import React from "react";
import { useForm } from "react-hook-form";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import StyledContainer from '../visitor/layout/containerStyle/StyledContainer';
import Heading1 from '../visitor/layout/headings/Heading1';
import FormLabel from "../visitor/contact/formStyles/FormLabel";
import Input from "../visitor/contact/formStyles/Input";
import Buttons from '../visitor/layout/buttons/Buttons';

function Login() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <>
            <StyledContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Heading1 title="Log in" />
                    <Form.Group>
                        <FormLabel>Name</FormLabel>
                        <Input name="username" type="text" placeholder="Enter your username" ref={register} />
                    </Form.Group>

                    <Form.Group>
                        <FormLabel>Password</FormLabel>
                        <Input name="password" type="password" placeholder="Enter your password" ref={register} />
                    </Form.Group>

                    <Col className="text-right">
                        <Buttons type="submit">Log in</Buttons>
                    </Col>
                </Form>
            </StyledContainer>
        </>
    );
}

export default Login;