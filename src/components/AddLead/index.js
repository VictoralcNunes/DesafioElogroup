import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { oportunities } from '../../services/data';

import { CloseBtn, CloseBtnCtn } from './styles';
import "./AddLead.css";
import analytics from '../../assets/profits.svg';
import rpa from '../../assets/robotic-arm.svg';
import bpm from '../../assets/user.svg';
import dp from '../../assets/macbook-pro.svg';

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
    // function handleCheckboxAll(state){
    //     if(allOportunities){
    //         setSelectedOportunities(()=>{
    //             const op = oportunities.map(o => o.job);
    //             return [...op];
    //         });
    //     }
    //     else{
    //         if(state){
    //             return;
    //         }
    //         setSelectedOportunities([]);
    //     }
    // }

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
            // handleCheckboxAll(true);
            return;
        }
        const alreadySelected = selectedOportunities.findIndex( item => item === op );

        if (alreadySelected >= 0){
            const filteredItens = selectedOportunities.filter(item => item !== op);
            setSelectedOportunities(filteredItens);
            
        }else {
            setSelectedOportunities([...selectedOportunities, op]);
        }
    }

    function handleImage(job){
        let image;
        switch(job){
            case "RPA":
                image = rpa;
                return image;
            
            case "Analytics":
                image = analytics;
                return image;
            
            case "BPM":
                image = bpm;
                return image;

            case "Produto Digital":
                image = dp;
                return image;
            default:
                return "";
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
                        required
                    />
                    <p>Telefone *</p>
                    <input
                        type='text'
                        name='costumerPhone'
                        onChange={handleInput}
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
                                <img src={handleImage(item.job)} alt={item.job}/>
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