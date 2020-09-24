import React from 'react';

import { MdAdd } from 'react-icons/md';

import {Container} from './styles';

function List({isOver, status, children}){
    

    return(
        <Container done={status.done}
        style={{ backgroundColor: isOver ? "#00aa55" : "" }}>
            <header>
                <h2>{status.status}</h2>
                {status.creatable && (
                    <button type="button">
                    <MdAdd size={24} color="#FFF"/>
                </button>
                )}
                
            </header>
            <ul >
                {children}
            </ul>
        </Container>
    );
}

export default List;