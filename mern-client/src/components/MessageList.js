/* 
Fetches messages from a server using getMessages() from the MessageApi.
Manages the loading state with a spinner while waiting for data.
Renders a list of individual Message components once data is loaded.
Deletes messages from the list when requested, both on the server and in the UI state.
*/

import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Message from "./Message";    // child component Message.js - sends props 
import { getMessages, deleteMessage } from "../MessageApi";    // allows component to fetch messages from server using getMessages() from MessageApi component




function MessageList() {
   // state variables
   const [messages, setMessages] = useState([]);   // stores the list of messages fetched from server
   const [isLoading, setIsLoading] = useState(true);   // tracks wether the messages are still loading, ensures component shows a spinner till data arives


   function deleteFromList(messageId) {
      // deletes message from the database, 
      deleteMessage(messageId);

      // update local state to remove the deleted message from the list
      // filter creates a new array with only the messages that dont match the delted messages id
      setMessages(prevMessages => prevMessages.filter(message => messageId._id !== messageId));
   }

      // fetching messages, useEffect hook ensures function runs only once, when component first renders since dependancy array is empty
      useEffect(() => {
         /* async function calls getMessages() to fetch list of messages from the server (calls function getMessage MessageApi)
         once retrieved stored in the state via setMessages(messages), and the loading state is set to false  to indicate the data is ready*/
         async function getAllMessages() {
            const messages = await getMessages();
            setMessages(messages);
            setIsLoading(false);
         }

         getAllMessages(); // calls the async function on mount
      }, []);
   


   // rendering the UI
   return (
      <>
         {isLoading 
            ? (<Spinner animation="boarder" role="status">
                  <span className="visually-hidden">Loading...</span>
               </Spinner>)
            : messages.map(message => (
               <Message key={message._id} value={message} delete ={deleteFromList} /> // map() function creates props passed to Message component
            ))}
      </>
   )
   // conditional rendering with {isLoading?...:...}: - if isLoading is true, spinner is displayed - if false, mesasges are rendered using .map() function
   /* messages.map(): for eah message, a Message component is created / props passed to Message: value={message} passes entire message object as value, 
   delete{deleteFromList} passes the deleteFromList function so that the Message component can call it when user clicks delete button */
   /* how delete flow works: 
      - user clicks close botton in a Message component
      - the onCLick handler in Message triggers
      - this calls the delteFromList function from MessageList component 
         - in deleteFromList - API request is made to delete message from server, state is updated locally to remove message from list 
      - react re renders the component with the updated list */

   }


export default MessageList;



/* 
Summary of the Component Flow:
   - Mount: When the component mounts, it fetches the messages from the server. (useEffect() async function)
   - Loading Spinner: While waiting for the data, the spinner is shown.
   - Display Messages: Once the messages are loaded, they are rendered.
   - Delete Message: If a user deletes a message:
      It is removed both from the server and the state.
      The UI re-renders with the updated message list.

This component provides a simple, efficient way to manage and display a list of messages with CRUD (Create, Read, Update, Delete) functionality.
*/