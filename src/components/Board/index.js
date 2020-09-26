import React, { useState } from 'react';
import { statuses, leads } from '../../services/data';
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
            return [ ...newLeads ];
        });
    }
    const moveLead = (dragIndex, hoverIndex) => {
        const lead = leads[dragIndex];
        setLeads(prevState => {
            const newLeads = prevState.filter((i, idx) => idx !== dragIndex);
            newLeads.splice(hoverIndex, 0, lead);
            return  [ ...newLeads ];
        });
    };

    const createLead = (newLead) => {
        console.log(newLead);
        const id = leads.length+1;
        const {date, status, costumerTitle, costumerName, costumerPhone, constumerEmail, oportunities} = newLead;
        const newLeadToInclude = {id,date, status, costumerTitle, costumerName, costumerPhone, constumerEmail, oportunities};
        setLeads( [...leads,newLeadToInclude]);
        return;
    }

    return(
       
            <Container>
                {statuses.map((s) => 
                <DropWrapper key={s.status} onDrop={onDrop} status={s.status}>
                    <List status={s} createLead={createLead}>
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