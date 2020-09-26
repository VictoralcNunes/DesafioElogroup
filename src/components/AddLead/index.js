import React, { useState } from 'react';
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
    // const opKey = (op, id = item.id) => {
    //     return op.concat(id)
    // }

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

    function handleInput (event){
        let nam = event.target.name;
        let val = event.target.value;
        console.log(nam, val);
        setNewLead({...newLead, [nam]: val});
      }

    function handleCheckbox (op){
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
                    {/* <h1>Hello {this.state.username} {this.state.age}</h1> */}
                    {/* // id:4,
                    // date: '01/01/2020',
                    // status: 'Reunião Agendada',
                    // costumerTitle: 'Tiago S/A',
                    // costumerName: 'Tiago',
                    // costumerPhone: '99999-9999',
                    // constumerEmail: 'tiago@tiago.com.br',
                    // oportunities:['RPA', 'Analytics'], */}
                    <p>Nome do contato:</p>
                    <input
                        type='text'
                        name='costumerName'
                        onChange={handleInput}
                    />
                    <p>Nome Fantasia:</p>
                    <input
                        type='text'
                        name='costumerTitle'
                        onChange={handleInput}
                    />
                    <p>Email:</p>
                    <input
                        type='text'
                        name='costumerEmail'
                        onChange={handleInput}
                    />
                    <p>Telefone:</p>
                    <input
                        type='text'
                        name='costumerPhone'
                        onChange={handleInput}
                    />
                    <p>Oportunidades:</p>
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