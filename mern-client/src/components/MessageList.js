import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Message from "./Message";
import { getMessages, deleteMessage } from "../MessageApi";

function MessageList() {
   const [messages, setMessages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   function deleteFromList(messageId) {
      // Delete message from database
      deleteMessage(messageId);

      // Delete message from message list
      setMessages(prevMessages => prevMessages.filter(
         message => message._id !== messageId));
   }

   useEffect(() => {
      async function getAllMessages() {
         const messages = await getMessages();
         setMessages(messages);
         setIsLoading(false);
      }

      getAllMessages();
   }, []);

   return (
      <>
         {isLoading
            ? (
               <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </Spinner>
            ) : messages.map(message => (
               <Message key={message._id} value={message}
                  delete={deleteFromList} />
            ))
         }
      </>
   );
}

export default MessageList;