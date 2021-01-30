import { Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import GroupModal from './GroupModal'

function DragHandle({ ...props }) {
  return (
    <div {...props}>
      <div className="flex items-center justify-center z-10 h-full">
        <div className="flex flex-col -mt-6 opacity-75 text-sm tracking-tighter">
          <div>&bull;&nbsp;&bull;</div>
          <div>&bull;&nbsp;&bull;</div>
          <div>&bull;&nbsp;&bull;</div>
          <style jsx>{`
            div {
              height: 0.45rem;
              letter-spacing: -0.1em;
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}

export default function Group({ group, index, isOrdered }) {
  const [showModal, setShowModal] = useState(false)
  const clickHandler = () => {
    setShowModal(true)
  }

  return (
    <div className="my-2">
      <GroupModal show={showModal} setActive={setShowModal} {...group} />
      <Draggable draggableId={String(group.id)} index={index}>
        {(provided, snapshot) => (
          <>
            <div
              className={`border-2 border-darker ${
                snapshot.isDragging ? 'text-light font-medium bg-darker' : 'bg-lighter'
              } rounded transition-colors duration-50 ease-out select-none`}
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              <div
                role="button"
                onClick={clickHandler}
                tabIndex={0}
                // onKeyPress={clickHandler}
                className="flex h-full w-full px-6 pl-8 py-2 overflow-hidden"
              >
                <DragHandle className="w-8 -ml-6" {...provided.dragHandleProps} />
                <div className="flex flex-wrap lg:flex-no-wrap justify-between flex-auto">
                  <div className="text-left">
                    <h6>
                      {isOrdered && <b>{`${index + 1}. `}</b>}
                      {group.title}
                    </h6>
                    <small className="opacity-75">{group.leaders}</small>
                  </div>
                  <p className="text-right">
                    <b>{group.weekDay}</b> {group.startsAt}
                  </p>
                </div>
              </div>
            </div>
            {isOrdered && (
              <div className="border-b border-current text-darker">
                {index === 0 ? 'Primeira' : 'Segunda'} opção
              </div>
            )}
          </>
        )}
      </Draggable>
    </div>
  )
}
