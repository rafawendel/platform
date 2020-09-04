import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState, useCallback, useEffect } from 'react'
import { ErrorMessage } from 'formik'
import PlainModal from '../../common/Modals/PlainModal'

function DragHandle({ ...props }) {
  return (
    <div {...props}>
      <div className="absolute -ml-4">
        <div className="opacity-75 text-sm align-top">
          <div>&bull;&bull;</div>
          <div>&bull;&bull;</div>
          <div>&bull;&bull;</div>
          <style jsx>{`
            div {
              height: 0.4rem;
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}
export function Group({ group, index, isOrdered }) {
  const [showModal, setShowModal] = useState(false)
  const clickHandler = () => {
    setShowModal(true)
  }

  return (
    <div className="my-2">
      <PlainModal
        title={group.title}
        subtitle={group.leaders}
        show={showModal}
        setActive={setShowModal}
      >
        <div className="mb-3">
          <h6>Horários</h6>
          <p>
            {group.weekDay}: {group.startsAt} - {group.endsAt}
          </p>
        </div>
        <div className="mb-3">
          <h6>Especialidade</h6>
          <ul>
            {group.specialty.map((spec, i) => (
              <li key={`specialty-${i + 1}`}>
                <p>{spec}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-3">
          <h6>Descrição</h6>
          <p>{group.description}</p>
        </div>
        <div className="mb-3">
          <h6>Descrição</h6>
          <p>{group.description}</p>
        </div>
      </PlainModal>
      <Draggable draggableId={group.id} index={index}>
        {(provided, snapshot) => (
          <div
            type="button"
            className={`border-2 border-darker ${
              snapshot.isDragging ? 'text-light font-medium bg-darker' : 'bg-lighter'
            } rounded transition-colors duration-50 ease-out select-none`}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              role="button"
              onClick={clickHandler}
              className="h-full px-6 pl-8 py-2 overflow-hidden"
            >
              <DragHandle className="h-6" {...provided.dragHandleProps} />
              <div className="text-left flex-1 flex items-stretch">
                <h6 className="">
                  {isOrdered && <b>{`${index + 1}. `}</b>}
                  {group.title}
                </h6>
              </div>
              <small className="text-right opacity-75 flex-1">{group.leaders}</small>
            </div>
            {isOrdered && <hl className="border-2 border-lighter mt-2 w-full" />}
          </div>
        )}
      </Draggable>
    </div>
  )
}

export function List({ list, groups, isDropDisabled }) {
  return (
    <div className="w-full py-2 flex flex-col">
      <Droppable droppableId={list.id} isDropDisabled={isDropDisabled}>
        {(provided, snapshot) => (
          <>
            <div
              className={`${
                isDropDisabled ? 'bg-primary' : snapshot.isDraggingOver ? 'bg-secondary' : 'bg-dark'
              } rounded transition-colors duration-100 ease-out p-4`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h5 className="text-white pb-2">{list.title}</h5>
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
export function DragAndDrop({ options, helper, meta }) {
  const [lists, setLists] = useState(options.lists)
  const [groups, setGroups] = useState(options.groups)
  const [draggableOrigin, setDraggableOrigin] = useState(null)

  useEffect(() => {
    helper.setValue(lists.selected.groupIds)
  }, [lists.selected.groupIds])

  const onDragStart = start => {
    setDraggableOrigin(start.source.droppableId)
  }

  const onDragEnd = useCallback(
    result => {
      setDraggableOrigin(null)

      const { destination, source } = result
      if (!destination) return
      if (destination.droppableId === source.droppableId && destination.index === source.index)
        return

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
    },
    [lists]
  )

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      {Object.values(lists).map(list => (
        <List
          key={list.id}
          list={list}
          groups={groups}
          isDropDisabled={
            list.id === 'selected' && list.groupIds.length >= 2 && draggableOrigin !== 'selected'
          }
        />
      ))}
      <div className="ml-px w-full h-12 md:h-6">
        {(meta.value || meta.touched) && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
      </div>
    </DragDropContext>
  )
}
