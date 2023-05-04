// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const Profile = () => {
   const { user, updateUserProfile } = useContext(AuthContext);
   const [show, setShow] = useState(false);
   const [err, setErr] = useState("");

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handelUpdateProfile = (e) => {
      e.preventDefault();
      setErr("");
      const form = e.target;
      const name = form.name.value || user.displayName;
      const url = form.url.value || user.photoURL;
      console.log(name, url);
      updateUserProfile(name, url)
         .then(() => {
            toast.success("Profile Update successfully");
            form.reset();
            handleClose();
         })
         .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
         });
   };

   return (
      <Container className="my-5">
         <img src={user.photoURL} alt="" className="mb-3" style={{ height: "300px", maxWidth: "400px" }} />
         <h2>{user.displayName}</h2>
         <p>Email: {user.email}</p>
         <h4>Update Profile By Clicking Update Button</h4>
         <div>
            <Modal
               show={show}
               onHide={handleClose}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
            >
               <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">Update Your Profile</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <h4>Input Your Information Bellow</h4>
                  <Form
                     className=" px-5 py-4 mx-auto"
                     style={{ maxWidth: "500px" }}
                     onSubmit={handelUpdateProfile}
                  >
                     <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Enter Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" name="name" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Photo URL" name="url" />
                     </Form.Group>
                     <p className="text-danger">{err}</p>
                     <Button variant="danger" type="submit" className="mt-4 w-100">
                        Update
                     </Button>
                  </Form>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="warning" onClick={handleClose}>
                     Close
                  </Button>
               </Modal.Footer>
            </Modal>
         </div>
         <Button variant="danger" onClick={handleShow}>
            Update
         </Button>
      </Container>
   );
};

export default Profile;
