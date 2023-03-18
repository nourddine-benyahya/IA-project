<?xml version="1.0" encoding="UTF-8"?>
<root>
  <title>Voice-Enabled Chatbot with OpenAI API</title>
  <description>
    This is a web application built using the MERN stack that uses OpenAI's API to create a chatbot that supports both text and speech input/output. The program allows users to interact with the chatbot using their voice and provides a history of the conversation.
  </description>
  <technologies>
    <technology>MongoDB Atlas for the database</technology>
    <technology>ExpressJS to link the database and frontend with API</technology>
    <technology>ReactJS for the frontend</technology>
    <library>@ant-design/icons: 5.0.1</library>
    <library>@emotion/styled: 11.10.6</library>
    <library>@mui/material: 5.11.11</library>
    <library>@reduxjs/toolkit: 1.9.1</library>
    <library>antd: 5.1.6</library>
    <library>axios: 1.2.4</library>
    <library>framer-motion: 8.5.0</library>
    <library>openai: 3.1.0</library>
    <library>react-dom: 18.2.0</library>
    <library>react-icons: 4.7.1</library>
    <library>react-redux: 8.0.5</library>
    <library>react-router-dom: 6.7.0</library>
    <library>react-speech: 1.0.2</library>
    <library>react-toastify: 9.1.1</library>
    <library>uuid: 9.0.0</library>
  </technologies>
  <how-to-run>
    <step>Clone the repository to your local machine:</step>
    <code>git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPOSITORY].git</code>
    <step>Install the dependencies for the backend by running the following command:</step>
    <code>cd back_end
npm install</code>
    <step>Start the backend server:</step>
    <code>npm start</code>
    <step>Install the dependencies for the frontend by running the following command:</step>
    <code>cd ../front_end
npm install</code>
    <step>Start the frontend server:</step>
    <code>npm start</code>
    <step>Open your browser and go to http://localhost:3000 to access the application.</step>
  </how-to-run>
  <notes>
    <note>Before running the project, you need to provide your own MongoDB Atlas database credentials and OpenAI API key. You can replace the mongoURI and OPENAI_API_KEY variables in the .env file with your own credentials.</note>
  </notes>
</root>
