import { dateDiffInDays } from '../utils/date'

export function getEventProps() {
  const startDateAndTime = new Date('Mon Aug 10 2020 07:00:00 GMT-0300 (Brasilia Standard Time)')

  return {
    eventDidBegin: Date.now() > startDateAndTime.getTime(),
    openingVideoId: '1',
    durationInDays: 6,
    day0TimeInMs: startDateAndTime.getTime(),
    currentEventDay: dateDiffInDays(new Date(), startDateAndTime)
  }
}

export function getContent() {
  return {
    contentList: [
      {
        title: 'Quem somos?',
        details: 'O GEDAAM é uma comunidade de alunos inquietos. Quer juntar-se a nós?',
        bubbleTailwindClass: 'bg-secondary',
        faIconClass: 'fas fa-graduation-cap text-gray-400',
        href: 'https://gedaam.now.sh/'
      },
      {
        title: 'Comunidade',
        details: 'Montamos uma comunidade exclusiva no Discord, venha participar!',
        bubbleTailwindClass: 'bg-indigo-900',
        faIconClass: 'fab fa-discord text-gray-400',
        href: 'https://discord.gg/y96hfmU'
      }
      // {
      //   title: 'Materiais',
      //   details: 'Aqui estão as apostilas que a equipe GEDAAM preparou com carinho!',
      //   bubbleTailwindClass: 'bg-pink-800',
      //   faIconClass: 'fas fa-book-medical text-gray-400',
      //   href: ''
      // }
    ]
  }
}

export function getSponsors() {
  return {
    sponsorList: [
      {
        logo:
          'https://www.medicina.ufmg.br/wp-content/themes/medicinaufmg_2019/img/logos/med-cabecalho.png',
        alt: 'Faculdade de Medicina da UFMG',
        href: 'https://www.medicina.ufmg.br/',
        stylingClass: 'py-2'
      },
      {
        logo: 'https://dexpertio.com.br/wp-content/uploads/2020/07/dexpertio-logo_transparente.png',
        alt: 'Dexpertio',
        href: 'https://dexpertio.com.br/',
        stylingClass: 'py-3'
      },
      {
        logo: 'https://www.wemeds.com.br/wp-content/uploads/2020/03/wemeds-logo-semihor.png',
        alt: 'WeMEDS',
        href: 'https://www.wemeds.com.br/',
        stylingClass: 'py-4'
      },
      {
        logo: 'https://sanarflix.com.br/home/images/sanarflix_logo.svg',
        alt: 'Sanarflix',
        href: 'https://sanarflix.com.br/',
        stylingClass: 'py-5'
      },
      {
        logo: 'https://drive.google.com/uc?export=view&id=1pli_UpF2CIRjUrJv-gvrMG7GWPtBZ3Th',
        alt: 'MedBeta',
        href: 'https://medbeta.com.br/',
        stylingClass: 'py-3'
      }
    ]
  }
}
