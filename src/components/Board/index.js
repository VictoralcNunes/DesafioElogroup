import React, { useState } from 'react';
import { statuses, leads } from '../../services/data';
// import produce from 'immer';

// import BoardContext from './context';
import List from '../List';
import Card from '../Card';
import DropWrapper from '../DropWrapper';
import { Container } from './styles';

const data = leads;

const Board = () =>{
    const [leads, setLeads] = useState(data);

    const onDrop = (item, monitor, status) => {
        setLeads(prevState => {
            const newLeads = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status });
            console.log(newLeads);
            return [ ...newLeads ];
        });
        // console.log(leads);
    }
    const moveLead = (dragIndex, hoverIndex) => {
        const lead = leads[dragIndex];
        setLeads(prevState => {
            const newLeads = prevState.filter((i, idx) => idx !== dragIndex);
            newLeads.splice(hoverIndex, 0, lead);
            return  [ ...newLeads ];
        });
    };
    // function move(fromList, toList, from, to){
    //     setLists(produce(lists, draft => {
    //         const dragged = draft[fromList].cards[from];

    //         draft[fromList].cards.splice(from,1);
            
    //         draft[toList].cards.length===0? 
    //             draft[toList].cards.splice(0,0,dragged):
    //             draft[toList].cards.splice(to,0,dragged);

    //     }))
    // }
    // function canMoveCard(draggedListIndex, targetListIndex){
    //     console.log(draggedListIndex, targetListIndex);
    //     return draggedListIndex<targetListIndex;
    // }

    return(
       
            <Container>
                {statuses.map((s) => 
                <DropWrapper key={s.status} onDrop={onDrop} status={s.status}>
                    <List status={s}>
                        {leads
                            .filter(i => i.status === s.status)
                            .map((i, idx) => <Card key={i.id} lead={i} index={idx} moveLead={moveLead} status={s} />)
                        }
                    </List>                    
                </DropWrapper>)}
            </Container>
    );
}

export default Board;