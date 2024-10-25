/* 
Displays a form similar to AddMessage however it initially calls the MessageApi function getMessage() to fetch the message being edited so the messages username
and text can be displayed in the form. the editMessage() function is called when the form is submitted to save any changes to the message
*/


import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";     // useParams - extracts messageId from the url parameters 
import { getMessage, editMessage } from "../MessageApi";



function EditMessage() {
   const { messageId } = useParams();
   const navigate = useNavigate();
   const [inputs, setInputs] = useState({ username: "", messageText: "" });


   function handleChange(name, value) {
      setInputs(values => ({ ...values, [name]: value }));
   }   

   async function handleSubmit(event) {
      event.preventDefault();

      const messagePart= {
         usernmae: inputs.username,
         texxt: inputs.messageText
      };

      await editMessage(messageId, messagePart);
      goBack();
   }

   function goBack () {
      navigate("/");
   }


   useEffect(() => {
      async function loadMessage() {
         const message = await getMessage(messageId);
         setInputs({
            username: message.username,
            messageText: message.text
         });
      }
      loadMessage();
   }, [messageId]);


   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" value={inputs.username} onChange={(e) => handleChange("username", e.target.value)} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="messageText">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} value={inputs.messageText} onChange={(e) => handleChange("messageText", e.target.value)} />
         </Form.Group>
         <Button variant="primary" type="submit" className="me-2">Save</Button>
         <Button variant="secondary" type="button" onClick={goBack}>Cancel</Button>
      </Form>
   )
}

export default EditMessage;


/* 
This component has very similar functionality and structure as AddMessage - refer to that file for comments on detailed explanation on everything happening

This component -
   Loads the existing message based on the messageId from the URL.
   Pre-fills the form with the message’s data.
   Allows the user to edit the message.
   On form submission, sends the updated data to the server and redirects the user to the home page.
*/