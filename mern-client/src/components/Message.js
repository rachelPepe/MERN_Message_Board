import { Card, CloseButton } from "react-bootstrap";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";

function Message(props) {
   const message = props.value;
   const deleteMessage = props.delete;
   const editRoute = `/edit/${message._id}`;

   return (
      <Card className="mb-3">
         <Card.Body>
            <CloseButton className="float-end"
               onClick={() => deleteMessage(message._id)} />
            <Link to={editRoute} className="float-end">&#x270E;</Link>
            {message.text}
         </Card.Body>
         <Card.Footer className="text-muted">
            {message.username}
            <ReactTimeAgo className="float-end" 
               date={new Date(message.posted)} locale="en-US" />
         </Card.Footer>
      </Card>
   );
}

export default Message;