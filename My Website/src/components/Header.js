// import React from 'react';
// import logo from '../img/logo192.png'

// const Header = () => (
//     <>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar fixed-top shadow-sm">
//             <a className="pull-left" href="#"><img className="logoimg" src={logo} alt="logo" /></a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="#">
//                             <i className="fa fa-home"></i> Home <span className="sr-only">(current)</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">
//                             <i className="fa fa-tasks"></i> Our Works </a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#"><i className="fa fa-users"></i> About Us</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#"><i className="fa fa-book"></i> Contact </a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//         {/* <!-- // end of nav bar --> */}

//         {/* <!-- <div className="parallax"></div> --> */}

//         <div className="jumbotron parallax">
//             <br /><br /><br /><br />
//             <h1 className="display-3 text-white text-center">Welcome to Our Website!</h1>
//             <p className="lead text-white text-center">This is a simple hero unit, a simple jumbotron-style component for
//             calling extra attention to featured content or information.</p>
//             {/* <!-- <hr className="my-2 text-white text-center"> --> */}
//         </div>
//     </>
// )

// export default Header; 
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

class Header extends Component {
    render() {
        const appNavbar = (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><i className="fa fa-home"></i>Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
        return (
            <>
                <div>
                    {appNavbar}
                </div>

                <div className="jumbotron parallax">
                    <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br /><br /><br />
                    <h1 className="display-3 text-white text-center">Welcome to Our Website!</h1>
                    <p className="lead text-white text-center">This is a simple hero unit, a simple jumbotron-style component for
                calling extra attention to featured content or information.</p>
                </div>
            </>
        );
    }
}

export default Header;