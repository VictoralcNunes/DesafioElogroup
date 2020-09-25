import React from 'react';
import Modal from 'react-modal';
import {MdClose} from 'react-icons/md';

import { CloseBtn, CloseBtnCtn } from './styles';
import "./Modal.css";

Modal.setAppElement('#root');

const Window = ({ show, onClose, item }) => {
    const opKey = (op, id = item.id) => {
        return op.concat(id)
    }
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
                    <MdClose/>
                </CloseBtn>
            </CloseBtnCtn>
            <div>
                <h2>{item.costumerTitle}</h2>
                <p>Nome: {item.costumerName}</p>
                <p>Email: {item.costumerEmail}</p>
                <p>Telefone: {item.costumerPhone}</p>
                <p>Oportunidades:</p>
                <ul>
                    {item.oportunities.map(oportunity => (
                        
                        <li key={opKey(oportunity)}>{oportunity}</li>
                    ))}
                </ul>
            </div>

        </Modal>
    )
}

export default Window;