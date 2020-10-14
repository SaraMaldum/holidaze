import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Col, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AutContext";
import StyledContainer from "../visitor/layout/containerStyle/StyledContainer";
import Heading1 from '../visitor/layout/headings/Heading1';
import FormLabel from "../visitor/contact/formStyles/FormLabel";
import Input from "../visitor/contact/formStyles/Input";
import Buttons from '../visitor/layout/buttons/Buttons';
import ErrorMsg from '../visitor/contact/error/ErrorMsg';

function Register() {
    const { register, handleSubmit, errors } = useForm();

    const { registerUser } = useContext(AuthContext);

    const history = useHistory();

    function onSubmit(data) {
        console.log("data", data);
        registerUser(data.username, data.password);
        history.push("/admin");
    }

    return (
        <>
            <StyledContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Heading1 title="Log in" />
                    <Form.Group>
                        <FormLabel>Name</FormLabel>
                        <Input name="username" type="text" placeholder="Enter your username" ref={register({required: true, minLength: 4})} />
                        {errors.username && <ErrorMsg>User name has to be longer than 4 characters.</ErrorMsg>}
                    </Form.Group>

                    <Form.Group>
                        <FormLabel>Password</FormLabel>
                        <Input name="password" type="password" placeholder="Enter your password" ref={register({required: true, minLength: 5})} />
                        {errors.password && <ErrorMsg>Password has to be longer than 5 characters.</ErrorMsg>}
                    
                    </Form.Group>

                    <Col className="text-right">
                        <Buttons type="submit">Log in</Buttons>
                    </Col>
                </Form>
            </StyledContainer>
        </>
    );
}

export default Register;