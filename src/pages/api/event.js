export function getEventProps() {
  const startDateAndTime = new Date('Mon Aug 10 2020 19:00:00 GMT-0300 (Brasilia Standard Time)')

  return {
    eventDidBegin: false, // eventSettings.day0TimeInMs > Date.now()
    durationInDays: 6,
    day0TimeInMs: startDateAndTime.getTime()
  }
}

export function getContent() {
  return {
    contentList: [
      {
        title: 'Quem somos?',
        details:
          'O Grupo de Estudos em Didática Aplicada ao Aprendizado de Medicina é um grupo de mentoria entre pares voltado para estudantes da áreas da saúde.',
        bubbleTailwindClass: 'bg-info',
        faIconClass: 'fas fa-coffee'
      },
      {
        title: 'Nossa origem',
        details:
          'O GEDAAM foi fundado em 2013 por estudantes da UFMG que acreditavam no potencial dos estudantes de promover o aprendizado mais eficiente do que os modelos tradicionais.',
        bubbleTailwindClass: 'bg-warning',
        faIconClass: ''
      },
      {
        title: 'Nossos objetivos',
        details:
          'O GEDAAM tem como fundamentos base técnicas de estudo, oratória, técnicas de apresentação e gestão do tempo. Mais recentemente, o grupo está promovendo encontros especializados, com temas como Pesquisa científica, tecnologia e grupos em Inglês',
        bubbleTailwindClass: 'bg-success',
        faIconClass: ''
      }
    ]
  }
}

export function getSponsors() {
  return {
    sponsorList: [
      {
        logo: 'https://pbs.twimg.com/profile_images/1098948672727990272/TtDcMwaR.jpg',
        alt: 'Sanarflix',
        href: ''
      },
      {
        logo: 'https://pbs.twimg.com/profile_images/1098948672727990272/TtDcMwaR.jpg',
        alt: 'Sanarflix',
        href: ''
      },
      {
        logo: 'https://pbs.twimg.com/profile_images/1098948672727990272/TtDcMwaR.jpg',
        alt: 'Sanarflix',
        href: ''
      },
      {
        logo: 'https://pbs.twimg.com/profile_images/1098948672727990272/TtDcMwaR.jpg',
        alt: 'Sanarflix',
        href: ''
      }
    ]
  }
}
