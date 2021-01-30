export const ListType = {
  selected: {
    id: '',
    title: '',
    groupIds: []
  },
  unselected: {
    id: '',
    title: '',
    groupIds: []
  }
}

export const GroupType = {
  id: 0,
  vacancies: 0,
  length: 0,
  selected: [],
  leaders: '',
  registers: [],
  title: '',
  specialty: [],
  description: '',
  weekDay: '',
  startsAt: '',
  endsAt: '',
  lang: '',
  preferenceByYear: '',
  preferenceByCollege: ''
}

export const getLists = () => ({
  lists: {
    selected: {
      id: 'selected',
      title: 'Grupos escolhidos',
      groupIds: []
    },
    unselected: {
      id: 'unselected',
      title: 'Opções de grupos',
      groupIds: ['0000']
    }
  },
  groups: [
    {
      ...GroupType,
      id: '0000',
      title: 'Carregando...'
    }
  ]
})
