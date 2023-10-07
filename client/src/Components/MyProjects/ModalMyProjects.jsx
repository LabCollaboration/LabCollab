import React from "react";
import Modal from "react-bootstrap/Modal";
import MyProjectsPopUp from "./MyProjectsPopUp";


export default function ModalMyProjects({show , onHide }) {
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="m"
            >

                <Modal.Body className="bg-tc1 rounded-xl">
                    <div
                        style={{
                            width: "100%",
                            height: "550px",
                        }}
                    >

                      <MyProjectsPopUp onHide={onHide}/>
                    </div>

                </Modal.Body>
            
            </Modal>
        </>
    )
}