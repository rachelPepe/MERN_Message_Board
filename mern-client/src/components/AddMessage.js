/* 
This component renders a form that allows user to enter a username and message. the add button adds the message and navigates back to message list.
The cancel button navigates back to the message list without adding the message. The goBack() function calls navigate() to navigate the "/" route and the
React Routers useNavigate() hook returns function that allows app to control the browsers navigation programatically. 
*/



import { Form, Button } from "react-bootstrap";     // used to render styled forms and buttons
import { useState } from "react";      // react hook to manage component state(input values in this case)
import { useNavigate } from "react-router-dom";    // used to programatically navigate between routes
import { addMessage } from "../MessageApi";     // function from MessageApi that sends new message to the server




function AddMessage() {
   const navigate = useNavigate();     // sets navigate variable to call useNavigate in goBack function

   /* state variables, both initially set to empty strings 
   inputs: stores valuse of the 2 form inputs, username and messageText, setInputs function to update state when inputs change */
   const [inputs, setInputs] = useState({ username: "", messageText: "" }); 


   /* 
   function dynamically updates the state for the form inputs/ 
   name: name of the input field (username or messageText)
   value: value entered in the input field
   Spread syntax: (...values): keeps the existing state while updating the relevant field 
   (ex user types "Alice" in username, the state updates to { username: "Alice", messageText: ""})
   */
   function handleChange(name, value) {
      setInputs(values => ({ ...values, [name]: value }));
   }



   async function handleSubmit(event) {
      event.preventDefault();  // prevents page from refreshing when the form is submitted

      // creates new message object with entered username and message text
      const message = {
         username: inputs.username,
         text: inputs.messageText
      };

      await addMessage(message);    // calls api function to send message object to the back end (through MessageApi)
      goBack();      // after successfully adding, goBack() navigates user back to home page
   }


   // Uses navigate from react-router-dom to redirect the user to the home route (/)
   function goBack() {
      navigate("/");
   }


   // renders UI that allows the user to add a new message
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

         <Button variant="primary" type="submit" className="me-2">Add</Button>
         <Button variant="secondary" type="button" onClick={goBack}>Cancel</Button>
      </Form>
   );
}
/* 
- onSubmit: when user submits form, triggers handleSubmit
- username input field
      - Form.Group: groups label and input filed // styled with mb-3 for margin bottom, ID "username" which is used to pass name to handleChange function
      - value: bound to inputs.username which gets passed to handelChange 
      - onChange: updates the state whenever user types in the field 
- message Textarea 
      - works same as username input field but allows multi-line text input using textarea
      - uses as="textare" and row={} to set values 
- Submit and cancel buttons
      - Add Button: Triggers the form submission, styled to provide spacing on the right side (margin end)
      - cancel button: uses onClick to call goBack function and go back to home page without adding the message
*/

export default AddMessage;

/* 
The useState hook tracks the input values.
The user fills out the username and message fields.
handleChange dynamically updates the state as the user types.
On form submission, handleSubmit sends the message to the backend using the addMessage API function.
After adding the message, the goBack function redirects the user to the home page.
If the user clicks Cancel, the goBack function is triggered without submitting the form.
*/