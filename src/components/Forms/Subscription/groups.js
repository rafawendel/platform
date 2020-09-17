export const getLists = () => {
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
        groupIds: []
      }
    },
    groups: []
  }
}
