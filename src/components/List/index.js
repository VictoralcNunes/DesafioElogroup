import React, {useState} from 'react';

import { MdAdd } from 'react-icons/md';

import AddLead from '../AddLead';

import {Container, CantDropHere} from './styles';


function List({createLead, isOver, canDrop, status, children}){
    
    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);
    const onClose = () => setShow(false);

    return(
        <>
            <Container done={status.done}
            style={{ backgroundColor: isOver ? (canDrop?"#00aa55": "#ddd") : ""}}>
                <header>
                    <h2>{status.status}</h2>
                    {status.creatable && (
                        <>
                            <button type="button" onClick={onOpen}>
                                <MdAdd size={24} color="#FFF"/>
                            </button>
                            
                        </>
                    )}
                    
                </header>
                
                {(isOver && !canDrop) && (
                    <CantDropHere>
                        <span>Não pode colocar aqui!</span> 
                    </CantDropHere>
                )}
                <ul >
                    {children}
                </ul>
            </Container>
            <AddLead
                onClose={onClose}
                show={show}
                createLead={createLead}
            />
        </>
    );
}

export default List;