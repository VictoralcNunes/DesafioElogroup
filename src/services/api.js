export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            status: 'Tarefas',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 2,
            content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
            status: 'Tarefas',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            status: 'Tarefas',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            status: 'Tarefas',
            labels: ['#54e1f7'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            status: 'Tarefas',
            labels: ['#54e1f7'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            status: 'Fazendo',
            labels: [],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            status: 'Pausado',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            status: 'Pausado',
            labels: ['#54e1f7'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            status: 'Pausado',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            status: 'Concluído',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            status: 'Concluído',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            status: 'Concluído',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }