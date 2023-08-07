import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export default function Mynav() {
   const location = useLocation();
const [showClassDetails, setShowClassDetails] = useState(false);

const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

function handleLogout() {
  fetch('http://159.89.161.128:4444/logout', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.success === false) {
        localStorage.removeItem('token');
        window.location.href = '/';
        if (location.pathname === '/dashboard') {
          window.location.reload();
        }
      }
    })
    .catch((err) => console.log(err));
  }




const handleUserClick = () => {
setShowClassDetails(true);
};
const handleCloseClick = () => {
setShowClassDetails(false);
};
const handleShowDetailsClick = (e) => {
e.stopPropagation();
};
useEffect(() => {
    setShowClassDetails(false);
  }, [location.pathname]);

  return(
<>
      <div className="SiteNavbar d-flex justify-content-between">
         <div className="Logo">
            <img src="./images/logo-white.png" alt=""></img>
         </div>
         <div className="C-balance">
            <b>100</b>
         </div>
      </div>

      <div className="site-footer">
       
         <ul>
            <li className="text-center">
               <NavLink to="/dashbaord "><img src="./images/inplay.svg" alt=""></img> <span>In-Play</span></NavLink>
            </li>
            <li className="text-center">
               <NavLink to="/upcoming"><img src="./images/upcoming.svg" alt=""></img> <span>Upcoming</span></NavLink>
            </li>
            <li className="text-center">
               <NavLink to="/profit-loss"><img src="./images/profit-loss.svg" alt=""></img> <span>Profit & Loss</span></NavLink>
            </li>
            <li className="text-center">
               <NavLink to="#" >
                  <img src="./images/user.svg" alt="" onClick={handleUserClick}
                     />
                  <span>( CL12 )</span>
               </NavLink>
            </li>
         </ul>

      </div>

      {showClassDetails && (
      <div className="ShowClassDetails" onClick={handleCloseClick}>
         <div className="Close" onClick={handleCloseClick}>
            <i className="fa fa-times"></i>
         </div>
         <ul onClick={handleShowDetailsClick}>
          
            <li>
               <Link to="/myLedger">
               <i className="fa fa-address-book-o"></i> My Ledger
               </Link>
            </li>
            <li>
               <Link to="/mycommission">
               <i className="fa fa-support"></i> My Commission
               </Link>
            </li>
            <li>
               <Link to="/rules">
               <i className="fa fa-book"></i> Rules
               </Link>
            </li>
           
            
            <li>
               <Link to="/olddata">
               <i className="fa fa-address-book-o"></i> Old Data
               </Link>
            </li>

            <li>
               <Link onClick={handleShow}>
               <i className="fa fa-lock"></i> Change Password
               </Link>
               <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                     <Modal.Title text-center >Change Password</Modal.Title>
                     <Button variant="transparent" onClick={handleClose}>
                     <i className="fa fa-times"></i>
                     </Button>
                  </Modal.Header>
                  <Modal.Body>
                     <Form.Group className="mb-3" controlId="formBasicPassword1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm your Password !" />
                     </Form.Group>
                  </Modal.Body>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-warning mr-auto">Cancel <i className="fa fa-times"></i></button>
                    <button type="button" className="btn btn-success">Submit <i className="fa fa-check"></i></button>
                  </div>
               </Modal>
            </li>


            <li>
               <Link to="#" onClick={handleLogout}>
               <i className="fa fa-power-off"></i> Logout
               </Link>
            </li>
         </ul>
         </div>

      )
   }

</>
);
}