import { get } from 'lodash'

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const changeLists = (originList, destinationList, startIndex, endIndex) => {
  const originIds = Array.from(originList)
  const destinationIds = Array.from(destinationList)
  const [removed] = originIds.splice(startIndex, 1)
  destinationIds.splice(endIndex, 0, removed)

  return [originIds, destinationIds]
}

export const moveInsideList = (startList, sourceIndex, destinationIndex) => {
  const newGroupIds = reorder(startList.groupIds, sourceIndex, destinationIndex)
  const newList = {
    ...startList,
    groupIds: newGroupIds
  }

  return newList
}

export const moveBetweenLists = (startList, finishList, sourceIndex, destinationIndex) => {
  const [newStartIds, newFinishIds] = changeLists(
    startList.groupIds,
    finishList.groupIds,
    sourceIndex,
    destinationIndex
  )

  const newStartList = {
    ...startList,
    groupIds: newStartIds
  }

  const newFinishList = {
    ...finishList,
    groupIds: newFinishIds
  }

  return [newStartList, newFinishList]
}

export const listComparisonByInclusion = (itemA, itemB, property, comparator) => {
  const listA = get(itemA, property)
  const listB = get(itemB, property)
  if (!listA || !listB || !comparator) return 0
  return listB.includes(comparator) - listA.includes(comparator)
}

export const listUpdateHandler = (lists, groups, { college, semester }) => {
  lists.unselected.groupIds.sort((groupIdA, groupIdB) => {
    const groupA = groups.find(({ id }) => id === groupIdA)
    const groupB = groups.find(({ id }) => id === groupIdB)
    return (
      listComparisonByInclusion(groupA, groupB, 'preferenceByCollege.institutions', college) ||
      listComparisonByInclusion(groupA, groupB, 'preferenceByYear.5', Math.ceil(semester / 2)) ||
      listComparisonByInclusion(groupA, groupB, 'preferenceByYear.4', Math.ceil(semester / 2))
    )
  })

  return lists
}
