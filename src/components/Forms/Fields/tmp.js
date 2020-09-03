import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
  const custom = {
    id: `id-${k}`,
    content: `Quote ${k}`
  }

  return custom
})

const grid = 8
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const QuoteItem = props => {
  return (
    <>
      <div {...props} />
      <style jsx>{`
        div {
          width: 200px;
          border: 1px solid grey;
          margin-bottom: 8px;
          background-color: lightblue;
          padding: ${grid}px;
        }
      `}</style>
    </>
  )
}

function Quote({ quote, index }) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {provided => (
        <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {quote.content}
        </QuoteItem>
      )}
    </Draggable>
  )
}

const QuoteList = React.memo(function QuoteList({ quotes }) {
  return quotes.map((quote, index) => <Quote quote={quote} index={index} key={quote.id} />)
})

export function QuoteApp() {
  const [state, setState] = useState({ quotes: initial })

  function onDragEnd(result) {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const quotes = reorder(state.quotes, result.source.index, result.destination.index)

    setState({ quotes })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <QuoteList quotes={state.quotes} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
