import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../assets/scss/dashboard.scss';

const Side = (props) => {

    return (
        <>
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };

  //You can get access to the history object’s properties and the closest <Route>'s match
  //via the withRouter higher-order component. withRouter will pass updated match, location, 
  //and history props to the wrapped component whenever it renders.
  const Sidebar = withRouter(Side);
  export default Sidebar
M