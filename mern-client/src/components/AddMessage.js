import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMessage } from "../MessageApi";

function AddMessage() {
   const navigate = useNavigate();
   const [inputs, setInputs] = useState({ username: "", messageText: "" });

   function handleChange(name, value) {
      setInputs(values => ({ ...values, [name]: value }));
   }

   async function handleSubmit(event) {
      event.preventDefault();

      const message = {
         username: inputs.username,
         text: inputs.messageText
      };

      await addMessage(message);
      goBack();
   }

   function goBack() {
      navigate("/");
   }

   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text"
               value={inputs.username}
               onChange={(e) => handleChange("username", e.target.value)} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="messageText">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3}
               value={inputs.messageText}
               onChange={(e) => handleChange("messageText", e.target.value)} />
         </Form.Group>
         <Button variant="primary" type="submit" className="me-2">
            Add
         </Button>
         <Button variant="secondary" type="button" onClick={goBack}>
            Cancel
         </Button>
      </Form>            
   );
}

export default AddMessage;