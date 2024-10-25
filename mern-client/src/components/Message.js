/* 
- Message: Renders a single message inside a Card component. A CloseButton component displays an X in the card's top-right corner, which deletes the message when clicked.
 A Link component displays a pencil icon that links to the edit route. The ReactTimeAgo component converts the posted date/time into a relative time like "2 minutes ago" or "3 days ago".
 - gets props from parent component MessageList
*/


import { Card, CloseButton } from "react-bootstrap";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";

function Message(props) {
   const message = props.value;     // MessageList uses value={message} to pass each message object via a prop to Message. Message then assigns a local message variable with props.value.
   const deleteMessage = props.delete;
   const editRoute = `/edit/${message._id}`;

   return (
    <Card className="mb-3">
        <Card.Body>
            <CloseButton className="float-end" onClick={() => deleteMessage(message._id)} />
            <Link to={editRoute} className="float-end">&#x270E;</Link>
            {message.text}
        </Card.Body>
        <Card.Footer className="text-mutded">
            {message.username}
            <ReactTimeAgo className="float-end" date={new Date(message.posted)} locale="en-US" />
        </Card.Footer>
    </Card>
   );
}

   export default Message;

   /* 
   - component expects 2 props: value (message object that contains details like text, username, timestamp(posted) 
   / delete (function to delete the message which is called when user clicks delete button)) 
   - editRoute - constructs the route URL for editing the message based in ID
   - Card: styled with margin-bottom-3, cerates bootstrap styled card for displaying the the message
        - <Card.Body> holds message text and controls (edit and delete)
            - CloseButton: styled to float to the right, triggers deleteMessage function with Id when clicked
                - onClick event triggers the arrow function which calls deleteMessage passing message._id
            -Link: displays pencil icon that links to the edit page for the message
            - {message.text}: Displays the content of the message
        - Card.Footer> : styled muted so text is lighhter - displays author and time since posting
            -{message.username}: Shows username of person who posted
            - <ReactTimeAgo>: styled to float far right, uses posted timestamp from the message object to render how long ago the message was posted
    */

    // component recieves message object (props.value) and a delete function (props.delete) from the parent component (MessageList)
    // when CloseButton clicked deleteMessage function called using messages id
    // Link component redirects user to /edit/:messageId route when clicked
    // focuses on rendering single message and its controls, parent component (MessageList) manages the list of messages and passes individual messages as props
    // reusable 


   
