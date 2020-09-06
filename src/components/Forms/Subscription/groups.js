export const getGroupOptions = () => {
  return [
    {
      id: '2020201',
      leaders: 'Nogueira (7°, UFMG) e Thaís Pimenta (5°, FCMMG)',
      title: 'GEDAAM Pesquisa',
      specialty: ['Ciência, eventos científicos, escrita acadêmica'],
      description: `As reuniões irão abordar temas típicos do GEDAAM, como gestão de tempo, técnicas de estudos, raciocínio clínico, técnicas de apresentação e saúde mental. Além disso, será abordado o tema pesquisa, ocorrendo diversos encontros sobre sites para coleta de dados, softwares, conhecimento sobre metodologia científica, dicas para a escrita e leitura de artigos e sites para a divulgação de artigos.`,
      weekDay: 'Quinta-feira',
      startsAt: '19:00:00',
      endsAt: '21:00:00',
      lang: 'Português',
      preferenceByYear: { 1: [4, 5, 6], 2: [], 3: [], 4: [], 5: [1, 2, 3] },
      preferenceByCollege: { type: 'any', institutions: ['UFMG', 'FCMMG'] }
    },
    {
      id: '2020202',
      leaders: 'Lídia Duarte (7°, UFMG) e Eduardo Médici (8°, UFMG)',
      title: 'GEDAAM Raciocínio Clínico',
      specialty: [
        'Resolução de casos clínicos',
        'Medicina baseada em evidências, raciocínio clínico'
      ],
      description: `Discussão de caso clínico `,
      weekDay: 'Quinta-feira',
      startsAt: '18:00:00',
      endsAt: '19:00:00',
      lang: 'Português',
      preferenceByYear: { 1: [1, 2], 2: [], 3: [], 4: [], 5: [3, 4, 5, 6] },
      preferenceByCollege: { type: 'any', institutions: ['UFMG'] }
    },
    {
      id: '2020203',
      leaders: 'Eduardo Médici (8°, UFMG)',
      title: 'Incubadora de líderes',
      specialty: ['Liderança'],
      description: `Será um grupo dedicado à diretoria e aos coordenadores para desenvolverem conhecimentos de liderança e gestão de equipes.`,
      weekDay: 'Sexta-feira',
      startsAt: '18:00:00',
      endsAt: '19:00:00',
      lang: 'Português',
      preferenceByYear: { 1: [6], 2: [5], 3: [1], 4: [2, 3], 5: [4] },
      preferenceByCollege: { type: 'any', institutions: ['UFMG'] }
    } /* 
    {
      id: '2020204',
      leaders: 'Mari (5°, UEMG) e Maryana Tomas (7°, UEMG)',
      title: 'GEDAAM Regular',
      specialty: ['Resolução de casos clínicos', 'Técnicas de estudo', 'Gerenciamento de tempo'],
      description: `Grupo de estudos com enfoque em um melhor aproveitamento do curso por meio de técnicas de estudo e organização do tempo. O conhecimento médico deve ser abordado em encontros eventuais para discussão de casos clínicos.`,
      weekDay: 'Quarta-feira',
      startsAt: '17:00:00',
      endsAt: '18:20:00',
      lang: 'Português',
      preferenceByYear: { 1: [], 2: [1], 3: [2, 6], 4: [3, 4, 5], 5: [] },
      preferenceByCollege: { type: 'prefers', institutions: ['UEMG'] }
    }, */,
    {
      id: '2020205',
      leaders: 'João Duarte (3°, UFMG) e Isa Professora (5°, Universidade de Rio Verde)',
      title: 'USMLE Study Group',
      specialty: [
        'Resolução de casos clínicos',
        'Técnicas de estudo',
        'Preparação para avaliações (PSU/USP/USMLE/PLAB)'
      ],
      description: `Grupo focado nas peculiaridades do USMLE e outras oportunidades de residência e trabalho no exterior. `,
      weekDay: 'Sexta-feira',
      startsAt: '16:00:00',
      endsAt: '17:00:00',
      lang: 'Inglês',
      preferenceByYear: { 1: [], 2: [], 3: [1, 2, 3, 4, 5, 6], 4: [], 5: [] },
      preferenceByCollege: {
        type: 'any',
        institutions: ['UFMG', 'Universidade de Rio Verde']
      }
    },
    {
      id: '2020206',
      leaders: 'Thierry (5°, UFMG) e Pedro Cunha (5°, UFMG)',
      title: 'Soft Skills',
      specialty: [
        'Gerenciamento de tempo',
        'Técnicas de apresentação: visuais',
        'Técnicas de apresentação: oratória',
        'Liderança'
      ],
      description: `Nosso objetivo é proporcionar aos integrantes do grupo uma imersão nas chamadas soft skills. O nome pode confundir um pouco, mas na prática é bem simples! Elas são nada menos do que habilidades comportamentais, a exemplo da comunicação eficaz, da atitutude empática, da liderança da gestão de tempo e da capacidade de resolver problemas.`,
      weekDay: 'Terça-feira',
      startsAt: '11:00:00',
      endsAt: '12:00:00',
      lang: 'Português',
      preferenceByYear: { 1: [], 2: [], 3: [], 4: [1, 2, 4, 5, 6], 5: [3] },
      preferenceByCollege: { type: 'any', institutions: ['UFMG'] }
    },
    {
      id: '2020207',
      leaders: 'Ana Paula (6°, UniBH), Fernanda Melo (6°, UniBH) e Mariana Ferreira (6°, UniBH)',
      title: 'Grupo de Estudos, Técnicas de Apresentação e Raciocínio Clínico ',
      specialty: [
        'Resolução de casos clínicos',
        'Técnicas de estudo',
        'Gerenciamento de tempo',
        'Técnicas de apresentação: visuais'
      ],
      description: `O GETARC é um grupo direcionado ao aprendizado de metodologias de estudo, técnicas de apresentação e raciocínio clínico. Com base no princípio de que sempre podemos aprender com o outro, visamos, através de nosso grupo, proporcionar aos estudantes de variados períodos a possibilidade de compartilhar conhecimentos e experiências entre si! `,
      weekDay: 'Terça-feira',
      startsAt: '19:00:00',
      endsAt: '20:30:00',
      lang: 'Português',
      preferenceByYear: { 1: [5, 6], 2: [4], 3: [], 4: [3], 5: [1, 2] },
      preferenceByCollege: { type: 'restricts', institutions: ['UniBH'] }
    },
    {
      id: '2020208',
      leaders: 'Júlia Cerqueira (5°, UFMG) e Augusto Coimbra 156 (4°, UFMG)',
      title: 'GEDAAM Regular',
      specialty: [
        'Resolução de casos clínicos',
        'Técnicas de estudo',
        'Gerenciamento de tempo',
        'Arte'
      ],
      description: `Em nosso grupo falaremos sobre técnicas de estudo, manejo de tempo e resolveremos casos clínicos. Também é uma ótima oportunidade para aprender sobre técnicas de apresentação e treinar suas habilidades de oratória. Além disso, toda semana haverá uma intervenção artística proposta por um de nossos membros, pois entendemos que a arte é parte importante da nossa formação que frequentemente é negligenciada. `,
      weekDay: 'Sexta-feira',
      startsAt: '19:00:00',
      endsAt: '20:20:00',
      lang: 'Português',
      preferenceByYear: { 1: [], 2: [5, 6], 3: [], 4: [1, 2, 3, 4], 5: [] },
      preferenceByCollege: { type: 'prefers', institutions: ['UFMG'] }
    },
    {
      id: '2020209',
      leaders: 'Andre (5°, UFMG), Isabela MG (8°, UFMG) e Lucas Sampaio (3°, UFMG)',
      title: 'GEDAAM Regular',
      specialty: ['Resolução de casos clínicos', 'Técnicas de estudo'],
      description: `Um grupo para apresentar técnicas de estudo voltado para nossa realidade, aumentando a eficiência do estudante de medicina. Também serão discutidos e desenvolvidos habilidades de raciocínio por meio de casos clínicos.`,
      weekDay: 'Quinta-feira',
      startsAt: '18:00:00',
      endsAt: '19:30:00',
      lang: 'Português',
      preferenceByYear: { 1: [], 2: [5, 6], 3: [4], 4: [2, 3], 5: [1] },
      preferenceByCollege: { type: 'any', institutions: ['UFMG'] }
    },
    {
      id: '2020210',
      leaders: 'Larissa Marques (7°, UniBH) e Lavínia (7°, UniBH)',
      title: 'Raciocínio Clínico',
      specialty: [
        'Resolução de casos clínicos',
        'Medicina baseada em evidências, raciocínio clínico'
      ],
      description: `Grupo focado em discussão de casos clínicos para aprimorar o raciocínio clínico durante a formação acadêmica.  `,
      weekDay: 'Segunda-feira',
      startsAt: '19:00:00',
      endsAt: '20:00:00',
      lang: 'Português',
      preferenceByYear: { 1: [6], 2: [5], 3: [4], 4: [], 5: [1, 2, 3] },
      preferenceByCollege: { type: 'any', institutions: ['UniBH'] }
    },
    {
      id: '2020211',
      leaders: 'Wendel (8°, UFMG), Raquel Lemos (4°, UFMG) e Alair (9°, UFMG)',
      title: 'MINT Medicina, Informação e Tecnologia',
      specialty: ['Tecnologia, informação', 'Dados, estatística'],
      description: `O Mint é um espaço para discutir aplicações de programação e ciência de dados na saúde, voltado para o público com conhecimento prévio ou interesse de aprender mais sobre a área. Teremos instrução de estudantes com experiência nas áreas, mas o autodidatismo é essencial.`,
      weekDay: 'Quarta-feira',
      startsAt: '18:00:00',
      endsAt: '19:00:00',
      lang: 'Português',
      preferenceByYear: { 1: [], 2: [5, 6], 3: [4], 4: [1, 2, 3], 5: [] },
      preferenceByCollege: { type: 'any', institutions: ['UFMG'] }
    },
    {
      id: '2020212',
      leaders: 'Carol (5°, UFVJM), Luíza Coimbra (5°, UFVJM) e MarcD2 (2°, UFVJM)',
      title: 'GEDAAM Regular',
      specialty: [
        'Técnicas de estudo',
        'Gerenciamento de tempo',
        'Técnicas de apresentação: visuais',
        'Técnicas de apresentação: oratória'
      ],
      description: `Nosso grupo irá abordar técnicas de estudo, gestão de tempo, planejamento de carreira, técnicas de apresentação, soft skills e muitos outros assuntos importantíssimos para sua vida profissional! `,
      weekDay: 'Quarta-feira',
      startsAt: '19:00:00',
      endsAt: '20:30:00',
      lang: 'Português',
      preferenceByYear: { 1: [], 2: [4, 5, 6], 3: [], 4: [3], 5: [1, 2] },
      preferenceByCollege: { type: 'restricts', institutions: ['UFVJM'] }
    },
    {
      id: '2020213',
      leaders: 'Isabella (11°, Unipam), Vitoria (6°, Unipam) e João Gabriel (4°, Unipam)',
      title: 'GEDAAM na UNIPAM',
      specialty: ['Resolução de casos clínicos', 'Técnicas de estudo', 'Gerenciamento de tempo'],
      description: `Grupo destinado à masterização do aprendizado e da alta performance pessoal e profissional, com desenvolvimento ativo de técnicas de estudo, raciocínio clínico e gestão de tempo.`,
      weekDay: 'Sexta-feira',
      startsAt: '18:00:00',
      endsAt: '19:00:00',
      lang: 'Português',
      preferenceByYear: { 1: [], 2: [], 3: [5, 6], 4: [3, 4], 5: [1, 2] },
      preferenceByCollege: { type: 'prefers', institutions: ['Unipam'] }
    },
    {
      id: '2020214',
      leaders: 'Ronaldo Abreu (5°, UniBH) e Roger Savio (5°, UniBH)',
      title: 'GEDAAM Regular',
      specialty: [
        'Resolução de casos clínicos',
        'Técnicas de estudo',
        'Técnicas de apresentação: visuais',
        'Técnicas de apresentação: oratória'
      ],
      description: `Nosso grupo tem como foco principal  discussão de casos clínicos, as técnicas de estudo e também, as didáticas de apresentação. Além disso, como proposição do Gedaam, as demais necessidade e demandas dos componentes, associadas aos pilares do grupo. Por último, e não menos importante o raciocínio clínico médico.`,
      weekDay: 'Quinta-feira',
      startsAt: '19:00:00',
      endsAt: '20:30:00',
      lang: 'Português',
      preferenceByYear: { 1: [6], 2: [5], 3: [4], 4: [3], 5: [1, 2] },
      preferenceByCollege: { type: 'prefers', institutions: ['UniBH'] }
    },
    {
      id: '2020215',
      leaders: 'Grupo da Fernanda (5°, FCMMG) e Flávia Costa (5°, FCMMG)',
      title: 'GEDAAM Fernanda e Flávia',
      specialty: [
        'Resolução de casos clínicos',
        'Técnicas de apresentação: oratória',
        'Medicina baseada em evidências, raciocínio clínico',
        'Ciência, eventos científicos, escrita acadêmica'
      ],
      description: `Grupo destinado para a resolução de casos clínicos.`,
      weekDay: 'Terça-feira',
      startsAt: '18:00:00',
      endsAt: '19:20:00',
      lang: 'Português',
      preferenceByYear: { 1: [], 2: [], 3: [4, 5, 6], 4: [2, 3], 5: [1] },
      preferenceByCollege: { type: 'any', institutions: ['FCMMG'] }
    },
    {
      id: '2020216',
      leaders:
        'Lavínia (7°, Suprema) e Arthur Egidio (8°, Faculdade de Ciências Médicas e da Saúde de Juiz de Fora)',
      title: 'MedCases',
      specialty: [
        'Resolução de casos clínicos',
        'Medicina baseada em evidências, raciocínio clínico'
      ],
      description: `O MedCases é um grupo  da SUPREMA - JF, focado no estudo de raciocínio clínico a partir de relatos de caso e estímulo para eficiência e melhora do entendimento das patologias e especialidades que estudamos durante o curso! Sabemos que um bom raciocínio clínico é a base para o diagnóstico, e saber faze-lo exclui muitas vezes iatrogenias e procedimentos desnecessários! Vamos juntos estudar o ponto essencial da medicina para aprimorar cada vez mais nossa relação com os pacientes e suas patologias! Vem pro MedCases!`,
      weekDay: 'Quarta-feira',
      startsAt: '19:00:00',
      endsAt: '20:00:00',
      lang: 'Português',
      preferenceByYear: { 1: [1, 2, 3], 2: [4], 3: [5], 4: [], 5: [6] },
      preferenceByCollege: {
        type: 'prefers',
        institutions: ['Suprema', 'Faculdade de Ciências Médicas e da Saúde de Juiz de Fora']
      }
    },
    {
      id: '2020217',
      leaders:
        'Luiza Vilela (4°, PUC), Jéssica Aguilar (4°, PUC), Júlia Rocha (4°, PUC) e Bruna Martins (4°, PUC)',
      title: 'GEDAAM Regular',
      specialty: [
        'Resolução de casos clínicos',
        'Técnicas de estudo',
        'Técnicas de apresentação: visuais',
        'Técnicas de apresentação: oratória'
      ],
      description: `Abordará os principais pilares do GEDAAM, tais quais técnicas de estudo, técnicas de apresentação e resolução de casos clínicos.`,
      weekDay: 'Quinta-feira',
      startsAt: '19:00:00',
      endsAt: '20:30:00',
      lang: 'Português',
      preferenceByYear: { 1: [3, 4, 5, 6], 2: [], 3: [], 4: [], 5: [1, 2] },
      preferenceByCollege: { type: 'prefers', institutions: ['PUC'] }
    }
  ]
}

export const getGroups = () => {
  return {
    lists: {
      selected: {
        id: 'selected',
        title: 'Grupos escolhidos',
        groupIds: []
      },
      unselected: {
        id: 'unselected',
        title: 'Opções de grupos',
        groupIds: getGroupOptions()
          .map(g => g.id)
          .sort(() => 0.5 - Math.random())
      }
    },
    groups: getGroupOptions()
  }
}
