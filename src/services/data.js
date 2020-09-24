const leads = [{
    id:1,
    date: '01/01/2020',
    status: 'Cliente em Potencial',
    costumerTitle: 'Joao S/A',
    costumerName: 'João',
    costumerPhone: '99999-9999',
    constumerEmail: 'joao@joao.com.br',
    oportunities:['RPA', 'Produto Digital', 'Analytics', 'BPM'],
},{
    id:2,
    date: '01/01/2020',
    status: 'Cliente em Potencial',
    costumerTitle: 'Pedro S/A',
    costumerName: 'Pedro',
    costumerPhone: '99999-9999',
    constumerEmail: 'pedro@pedro.com.br',
    oportunities:['RPA'],
},{
    id:3,
    date: '01/01/2020',
    status: 'Dados Confirmados',
    costumerTitle: 'Lucas S/A',
    costumerName: 'Lucas',
    costumerPhone: '99999-9999',
    constumerEmail: 'lucas@lucas.com.br',
    oportunities:['BPM'],
},{
    id:4,
    date: '01/01/2020',
    status: 'Reunião Agendada',
    costumerTitle: 'Tiago S/A',
    costumerName: 'Tiago',
    costumerPhone: '99999-9999',
    constumerEmail: 'tiago@tiago.com.br',
    oportunities:['RPA', 'Analytics'],
}]
const statuses =[{
    status:'Cliente em Potencial',
    creatable:true,
},{
    status:'Dados Confirmados',
    creatable:false,
},{
    status:'Reunião Agendada',
    creatable:false,
},{
    status:'Cliente Convertido',
    creatable:false,
    done: true,
},{
    status:'Cliente Descartado',
    creatable:false,
    done: true,
}];

export {leads, statuses};