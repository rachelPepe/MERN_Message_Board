// Header component is rendered by App at the top of every screen. Uses Row and Col components from React Bootstrap
// to place "Meassage Board" header and "Add Message" button next to eachother on single row 

import { LinkContainer } from "react-router-bootstrap"; // allows button component to work with the React Router
import { Button, Row, Col } from "react-bootstrap"; // imports Button Row and Col components


function Header() {
    return (
        <Row>
            <Col>
                <h1>Message Board</h1>
            </Col>
            <Col>
                <LinkContainer to="/add">
                    <Button className="float-end">Add Message</Button>
                </LinkContainer>
            </Col>
        </Row>
    )
}
// Header renders 2 col components and Row component creates CSS flexbox conatiner that allows all col components to render on same row
// className="float-end": react bootstrap class that aligns the Button on the right side of the column
// The LinkContainer specifies to="/add" to specify the Button's route. App defines a /add route that displays the AddMessage component

export default Header;