import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { oportunities } from '../../services/data';

import { CloseBtn, CloseBtnCtn } from './styles';
import "./AddLead.css";

Modal.setAppElement('#root');

const AddLead = ({ createLead, show, onClose }) => {

    const [newLead, setNewLead] = useState({
        id: '',
        date: '01/01/2020',
        status: 'Cliente em Potencial',
        costumerTitle: '',
        costumerName: '',
        costumerPhone: '',
        constumerEmail: '',
        oportunities:[],
    });
    const [selectedOportunities, setSelectedOportunities] = useState([]);

    const [allOportunities, setAllOportunities] = useState(false);
    const [canUncheck, setCanUncheck] = useState(false);

    useEffect(()=>{
        if(allOportunities){
            setSelectedOportunities(()=>{
                const op = oportunities.map(o => o.job);
                return [...op];
            });
        }
        else{
            if(canUncheck && selectedOportunities.length>0){
                return;
            }
            setSelectedOportunities([]);
            
        }
    },[allOportunities]);

    useEffect(()=>{
        if(selectedOportunities.length===oportunities.length){
            setAllOportunities(true);
        }
        else{
            setAllOportunities(false);
            setCanUncheck(true);
        }
    },[selectedOportunities]);

    function handleInput(event){
        let nam = event.target.name;
        let val = event.target.value;
        console.log(nam, val);
        setNewLead({...newLead, [nam]: val});
      }

    function handleCheckbox(op){
        if(op==="all"){
            setAllOportunities(!allOportunities);
            setCanUncheck(false);
            return;
        }
        const alreadySelected = selectedOportunities.findIndex( item => item === op );

        if (alreadySelected >= 0){
            const filteredItens = selectedOportunities.filter(item => item !== op);
            setSelectedOportunities([filteredItens]);
            
        }else {
            setSelectedOportunities([...selectedOportunities, op]);
        }
    }

    function handleSubmit (event) {
        event.preventDefault();
        let oportunities = [...selectedOportunities];
        setNewLead({...newLead, oportunities});
        createLead(newLead);
        onClose();
    }


    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}  
            className={"add-lead-modal"}
            overlayClassName={"overlay"}
        >
            <CloseBtnCtn>
                <h1 style={{flex:'1 90%'}}>Novo Lead</h1>
                <CloseBtn onClick={onClose}>
                    <MdClose/>
                </CloseBtn>
            </CloseBtnCtn>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>Nome do contato:</p>
                    <input
                        type='text'
                        name='costumerName'
                        onChange={handleInput}
                        required
                    />
                    <p>Nome Fantasia *</p>
                    <input
                        type='text'
                        name='costumerTitle'
                        onChange={handleInput}
                        required
                    />
                    <p>Email *</p>
                    <input
                        type='text'
                        name='costumerEmail'
                        onChange={handleInput}
                        placeholder='email@email.com'
                        required
                    />
                    <p>Telefone *</p>
                    <input
                        type='text'
                        name='costumerPhone'
                        onChange={handleInput}
                        placeholder='xx xxxxx-xxxx'
                        required
                    />
                    <p>Oportunidades:</p>
                    
                    <input
                        name="all"            
                        type="checkbox"
                        checked={allOportunities}
                        onChange={()=>handleCheckbox("all")} 
                    />
                    <label name="all">Selecionar Todos</label>
                    <ul className="items-grid">
                        {oportunities.map((item,index) => (
                            <li key={"job"+index} 
                                onClick={() => handleCheckbox(item.job)}
                                className={selectedOportunities.includes(item.job) ? "selected":""}
                            >
                                <span>{item.job}</span>
                            </li>
                        ))}
                    </ul>

                    <br/>
                    <br/>
                    <input type='submit' value="Salvar"/>
                </form>
            </div>

        </Modal>
    )
}

export default AddLead;