import React from 'react';
import {
    Box,
    Button,
    Flex,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
} from '@chakra-ui/react';
import logoImage from "../../assets/logo.png";
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Box>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </Box>
    );
};

const LoginForm = () => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={
                Yup.object({
                    username: Yup.string()
                        .email("Must be a valid email")
                        .required("Email is required"),
                    password: Yup.string()
                        .required("Password is required")
                })
            }
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    navigate("/home"); // Navigate only after successful form submission
                }, 400);
            }}>

            {({ isValid, isSubmitting }) => (
                <Form>
                    <Stack spacing={4}>
                        <MyTextInput
                            label={"Email"}
                            name={"username"}
                            type={"email"}
                            placeholder={"Enter your email"}
                        />
                        <MyTextInput
                            label={"Password"}
                            name={"password"}
                            type={"password"}
                            placeholder={"Enter your password"}
                        />

                        <Button
                            type={"submit"}
                            isDisabled={!isValid || isSubmitting}>
                            Login
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

const Login = () => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} alignItems={'center'} justifyContent={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                        <img src={logoImage} alt="Logo" style={{ width: '100px', height: 'auto' }} />
                    </div>
                    <Heading fontSize={'2xl'} mb={15}>Sign in to your account</Heading>
                    <LoginForm />
                    <Link color={"blue.500"} href={"/signup"}>
                        Don't have an account? Sign up now.
                    </Link>
                </Stack>
            </Flex>
        </Stack>
    );
};

export default Login;
