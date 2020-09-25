import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

// import BoardContext from '../Board/context';

import Window from '../Window';

import { Container } from './styles';

const Card = ({canDrop, lead, index, moveLead, status}) => {
    const ref= useRef();
    // const {move} = useContext(BoardContext);

    const [{ isDragging }, dragRef]= useDrag({
        item: {type: 'CARD', ...lead, index},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveLead(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    dragRef(dropRef(ref));

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);
    const onClose = () => setShow(false);


    return(
        <>
        <Container 
            ref={ref} 
            isDragging={isDragging}
            onClick={onOpen}
            canDrop={canDrop}>
            <p>{lead.costumerTitle}</p>
            
        </Container>
        <Window
            item={lead}
            onClose={onClose}
            show={show}
        />
        </>
    );
}

export default Card;