import React, { useState } from 'react';
import { Box, Button, Heading, Text, VStack, Input } from '@chakra-ui/react';
import './UploadResume.css';
import Navbar from "../Home/NavBar.jsx";

const UploadResume = () => {
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (event) => {
        setResume(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (resume) {
            // Handle file upload logic here
            setMessage("Resume uploaded successfully!");
        } else {
            setMessage("Please upload a resume.");
        }
    };

    return (
        <div>
        <Navbar />

    <Box className="upload-resume">
            <Heading className="upload-resume-heading">Upload Your Resume</Heading>
            <Text className="upload-resume-text">Please upload your resume to apply for jobs.</Text>
            <form onSubmit={handleSubmit} className="upload-resume-form">
                <VStack spacing={4}>
                    <Input
                        type="file"
                        onChange={handleFileChange}
                        className="upload-resume-input"
                        style={{ display: 'none' }}
                        id="resume-input"
                    />
                    <label htmlFor="resume-input" className="custom-file-upload">
                        Choose File
                    </label>
                    <Button type="submit" className="upload-resume-button">Upload</Button>
                </VStack>
            </form>
            {message && <Text className="upload-resume-message">{message}</Text>}
        </Box>
        </div>
    );
};

export default UploadResume;
