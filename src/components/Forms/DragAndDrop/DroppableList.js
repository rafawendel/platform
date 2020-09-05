import { Droppable } from 'react-beautiful-dnd'
import Group from './DraggableGroup'

export default function List({ list, groups, isDropDisabled }) {
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
