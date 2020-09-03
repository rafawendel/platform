export const getGroupOptions = () => {
  return [
    {
      id: '2020201',
      label: 'Hello',
      details: 'fuck yea'
    },
    {
      id: '2020202',
      label: 'Hello2',
      details: 'fuck yea'
    },
    {
      id: '2020203',
      label: 'Hello3',
      details: 'fuck yea'
    },
    {
      id: '2020204',
      label: 'Hello4',
      details: 'fuck yea'
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
        groupIds: getGroupOptions().map(g => g.id)
      }
    },
    groups: getGroupOptions()
  }
}
