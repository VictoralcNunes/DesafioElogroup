import React from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

import { CloseBtn, CloseBtnCtn } from './styles';
import "./Modal.css";

Modal.setAppElement('#root');

const AddLead = ({ createLead, show, onClose }) => {
    // const opKey = (op, id = item.id) => {
    //     return op.concat(id)
    // }
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}  
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <CloseBtnCtn>
                <h1 style={{flex:'1 90%'}}>haha</h1>
                <CloseBtn onClick={onClose}>
                    <MdClose/>
                </CloseBtn>
            </CloseBtnCtn>
            <div>
                
            </div>

        </Modal>
    )
}

export default AddLead;