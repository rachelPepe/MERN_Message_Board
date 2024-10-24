// This file acts as the main entry point for the React UI, provides routing structure, and ensures the right components are displayed based on the current URL path.
// also uses Bootstrap's container to maintain clean and responsive layout

import { Route, Routes } from "react-router-dom";   //help manage client-side routingand allow diff components to render based on url path
import Container from "react-bootstrap/Container";    // ensures consistent spacing and layout
import Header from "./components/Header"; 
import MessageList from "./components/MessageList";
import AddMessage from "./components/AddMessage";
import EditMessage from "./components/EditMessage"; 
    // components for different parts of the app

function App() {
  return (
    <Container className="mt-3">    
      <Header />
      <Routes>
        <Route path="/" element={<MessageList />} />
        <Route path="/add" element={<AddMessage />} />
        <Route path="/edit/:messageId" element={<EditMessage />} />
      </Routes>
    </Container>
  );
}
// <Container className="mt-3">: Wraps the entire app in a Bootstrap container with margin-top (mt-3) for spacing. This helps maintain a clean, centered layout.
// <Header />: This renders the header component containing Message Board Header and Add Message button next to eachother on a single row
/* <Routes>: A component that matches the current URL with one of the defined routes.
      <Route path="/" element={<MessageList />} />:
            Renders the MessageList component when the user visits the home page (/).
      <Route path="/add" element={<AddMessage />} />:
            Renders the AddMessage component when the user visits the add message page (/add).
      <Route path="/edit/:messageId" element={<EditMessage />} />:
            Renders the EditMessage component when the user visits the edit message page with a specific messageId (e.g., /edit/123).
*/ 



export default App;
