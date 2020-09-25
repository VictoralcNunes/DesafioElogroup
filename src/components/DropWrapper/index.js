import React from 'react';
import {useDrop} from 'react-dnd';

import { statuses } from '../../services/data';

import { Container } from './styles';


function DropWrapper({onDrop, children, status}) {
    const [{isOver, canDrop}, drop] = useDrop({
        accept:'CARD',
        canDrop: (item, monitor) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            console.log(status, itemIndex, statusIndex);
            return (statusIndex>=itemIndex && (statusIndex - itemIndex<=1));

        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: monitor=>({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    })
    
    return(
            <Container ref={drop}>
                {React.cloneElement(children, {isOver, canDrop})}
            </Container>
    )
}

export default DropWrapper;