import React from "react";
import { Container, FormContent, FormWrap, Form, FormH1, FormLabel, FormInput, FormButton, Text, Icon } from "./SigninElements";


const SignIn = () =>{
    return(
        <Container>
            <FormWrap>
                <Icon to="/"></Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn;