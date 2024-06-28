import {useAuth} from "./AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Flex, Heading, Image, Link, Stack, Text} from "@chakra-ui/react";
import CreateVolunteerForm from "../volunteer/CreateVolunteerForm.jsx";
import logoImage from "../../assets/logo.png";
import {Overlay, OverlayContainer, Paragraph, RightOverlayPanel, Title} from "../Styles.js";

const Signup = () => {
    const { volunteer, setVolunteerFromToken } = useAuth();
    const navigate = useNavigate();
    const [signIn, setSignIn] = useState(true);

    useEffect(() => {
        if (volunteer) {
            navigate("/home");
        }
    })

    return (
        <Stack minH={'100vh'} direction={{base: 'column', md: 'row'}}>
            <Flex p={8} flex={1} alignItems={'center'} justifyContent={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>

                    <div style={{position: 'absolute', top: '20px', left: '20px'}}>
                        <img src={logoImage} alt="Logo" style={{width: '100px', height: 'auto'}}/>
                    </div>
                    <Heading fontSize={'2xl'} mb={15}>Register for an account</Heading>
                    <CreateVolunteerForm onSuccess={(token) => {
                        localStorage.setItem("access_token", token)
                        setVolunteerFromToken()
                        navigate("/dashboard");
                    }}/>
                    <Link color={"blue.500"} href={"/login"}>
                        Have an account? Login now.
                    </Link>
                </Stack>
            </Flex>
            <Flex
                flex={1}
                p={10}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <OverlayContainer signinIn={signIn}>
                    <Overlay signinIn={signIn}>
                        <RightOverlayPanel signinIn={signIn}>
                            <Title>Hello, Friend!</Title>
                            <Paragraph>
                                Enter Your personal details and start volunteering!
                            </Paragraph>
                        </RightOverlayPanel>
                    </Overlay>
                </OverlayContainer>
            </Flex>
        </Stack>
    );
}

export default Signup;