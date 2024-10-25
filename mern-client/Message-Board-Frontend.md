# MERN client 

This folder creates the front end of the message board app using React with bootstrap



PRIMARY FILES


- src/App.js:
    // This file acts as the main entry point for the React UI, provides routing structure, and ensures the right components are displayed based on the current URL path.
    // also uses Bootstrap's container to maintain clean and responsive layout


- src/index.js
    // this file acts as the main point of entry for the react application, responsible for rendering the root component and setting up essential libraries


- src/MessageApi.js
    // This file organizes all the API requests into a single module. Functions use fetch() to send API requests to the web server (mern-server)


- public/index.html: 
    // This file creates single HTML page for a Single Page Application - this is the only html file that is used and is dynamically updated by react using JS and react components
    // react injects or renders the entire react app in the <div> element with root ID
    // starting point for the browser


- src/components/Header.js
    // Header component is rendered by App at the top of every screen. Uses Row and Col components from React Bootstrap
    // to place "Meassage Board" header and "Add Message" button next to eachother on single row 


- src/components/Message.js
    // Message: Renders a single message inside a Card component. A CloseButton component displays an X in the card's top-right corner, which deletes the message when clicked.
    // A Link component displays a pencil icon that links to the edit route. The ReactTimeAgo component converts the posted date/time into a relative time like 
        "2 minutes ago" or "3 days ago".
    //gets props from parent component MessageList


- src/components/MessageList.js
    // Fetches messages from a server using getMessages() from the MessageApi.
    // Manages the loading state with a spinner while waiting for data.
    // Renders a list of individual Message components once data is loaded.
    // Deletes messages from the list when requested, both on the server and in the UI state.


- src/components/AddMessage.js
    // This component renders a form that allows user to enter a username and message. the add button adds the message and navigates back to message list.
    // The cancel button navigates back to the message list without adding the message. The goBack() function calls navigate() to navigate the "/" route and the
    // React Routers useNavigate() hook returns function that allows app to control the browsers navigation programatically. 


- src/components/EditMessage.js
    // Displays a form similar to AddMessage however it initially calls the MessageApi function getMessage() to fetch the message being edited so the messages username
        and text can be displayed in the form. the editMessage() function is called when the form is submitted to save any changes to the message