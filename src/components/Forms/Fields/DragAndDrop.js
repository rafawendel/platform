import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState, useEffect } from 'react'

function DragHandle(props) {
  return (
    <>
      <div className="h-10 w-10 -mt-2 -ml-8 absolute z-10" {...props} />
      <div className="absolute -ml-4 flex flex-col justify-center">
        <span className="h-1 text-sm">&bull;&bull;</span>
        <span className="h-1 text-sm">&bull;&bull;</span>
        <span className="h-1 text-sm">&bull;&bull;</span>
      </div>
    </>
  )
}
export function Group({ group, index, isOrdered }) {
  const clickHandler = () => {
    alert(group.details)
  }

  return (
    <div className="my-2">
      <Draggable draggableId={group.id} index={index}>
        {(provided, snapshot) => (
          <div
            type="button"
            className={`border-2 border-darker ${
              snapshot.isDragging ? 'text-light font-medium bg-darker' : 'bg-light'
            } rounded transition-colors duration-50 ease-out select-none`}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div role="button" onClick={clickHandler} className="text-left px-6 pl-8 py-2 ">
              <DragHandle {...provided.dragHandleProps} />
              <h6>
                {isOrdered && <strong>{`${index + 1}. `}</strong>}
                {group.label}
              </h6>
            </div>
          </div>
        )}
      </Draggable>
    </div>
  )
}

export function List({ list, groups }) {
  return (
    <div className="w-full py-2 flex flex-col">
      <Droppable
        droppableId={list.id}
        isDropDisabled={list.id === 'selected' && list.groupIds.length >= 2}
      >
        {(provided, snapshot) => (
          <>
            <div
              className={`${
                snapshot.isDraggingOver ? 'bg-secondary' : 'bg-dark'
              } rounded transition-colors duration-100 ease-out p-4`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h5 className="text-light pb-2">{list.title}</h5>
              {list.groupIds.map((groupId, index) => {
                const group = groups.find(g => g.id === groupId)
                return (
                  group && (
                    <Group
                      key={group.id}
                      group={group}
                      index={index}
                      isOrdered={list.id === 'selected'}
                    />
                  )
                )
              })}
              {provided.placeholder}
            </div>
            <style jsx>{`
              div {
                min-height: 8rem;
              }
            `}</style>
          </>
        )}
      </Droppable>
    </div>
  )
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const changeLists = (originList, destinationList, startIndex, endIndex) => {
  const originIds = Array.from(originList)
  const destinationIds = Array.from(destinationList)
  const [removed] = originIds.splice(startIndex, 1)
  destinationIds.splice(endIndex, 0, removed)

  return [originIds, destinationIds]
}
export function DragAndDrop({ options }) {
  const [lists, setLists] = useState(options.lists)
  const [groups, setGroups] = useState(options.groups)

  const onDragEnd = result => {
    const { destination, source } = result
    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const startList = lists[source.droppableId]
    const finishList = lists[destination.droppableId]

    if (startList === finishList) {
      const newGroupIds = reorder(startList.groupIds, source.index, destination.index)
      const newList = {
        ...startList,
        groupIds: newGroupIds
      }

      setLists(l => ({
        ...l,
        [newList.id]: newList
      }))
    } else {
      const [newStartIds, newFinishIds] = changeLists(
        startList.groupIds,
        finishList.groupIds,
        source.index,
        destination.index
      )

      const newStartList = {
        ...startList,
        groupIds: newStartIds
      }

      const newFinishList = {
        ...finishList,
        groupIds: newFinishIds
      }

      setLists(l => ({
        ...l,
        [newStartList.id]: newStartList,
        [newFinishList.id]: newFinishList
      }))
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.values(lists).map(list => (
        <List key={list.id} list={list} groups={groups} />
      ))}
    </DragDropContext>
  )
}
