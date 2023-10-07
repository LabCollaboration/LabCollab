
import React from "react";
// import {Modal} from "react-bootstrap";
// import LoginForm from "./LoginForm";
// import {
//   TERipple,
//   TEModal,
//   TEModalDialog,
//   TEModalContent,
//   TEModalHeader,
//   TEModalBody,
//   TEModalFooter,
// } from "tw-elements-react";

export default function ModalForm({ show, onHide }) {

  return (
    <>
      {/* <Modal
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="m"
      >
    

        <Modal.Body  className="bg-gray-900 text-white pb-3">
          <div
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <div
              onClick = {onHide}
              className="flex justify-end text-gray-300 mb-2"
            >
              <i className="fa fa-close"></i>
            </div>
            <LoginForm />
          </div>

        </Modal.Body>

      </Modal> */}
    </>
  )
}
