import React from 'react';
import Modal from 'react-modal';

import { CloseBtn, CloseBtnCtn } from './styles';
import "./Modal.css";

Modal.setAppElement('#root');

const Window = ({ show, onClose, item }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}  
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <CloseBtnCtn>
                <h1 style={{flex:'1 90%'}}>{item.content}</h1>
                <CloseBtn onClick={onClose}>
                    X
                </CloseBtn>
            </CloseBtnCtn>
            <div>
                <h2>{item.content}</h2>
            </div>

        </Modal>
    )
}

export default Window;