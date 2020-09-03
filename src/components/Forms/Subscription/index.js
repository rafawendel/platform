import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FormField, FormTypes } from '../Fields'
import { PrimaryActionButton, SubmitButton, SecondaryActionButton } from '../Buttons'
import { validateCPFAsync } from '../../../utils/cpf'
import { DragAndDrop } from '../Fields/DragAndDrop'
import { QuoteApp } from '../Fields/tmp'

const getGroupOptions = () => {
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

const getGroups = () => {
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

const fields = [
  // {
  //   type: FormTypes.INPUT,
  //   name: 'medium',
  //   label: 'Como você chegou até o GEDAAM?',
  //   formType: 'text',
  //   placeholder: 'Facebook, Recepção de calouros...'
  // },
  {
    type: FormTypes.DRAG_AND_DROP,
    name: 'selectedGroup',
    options: getGroups(),
    withValuesOptionsCb: (values, options) => {
      // here add the logic that changes the options according to the values
      console.log(values)
      return options
    }
  }
]
export default function SubscriptionForm() {
  const [activeFieldIndex, setActiveFieldIndex] = useState(0)

  const advanceForm = () => setActiveFieldIndex(previous => previous + 1)
  const recedeForm = () => setActiveFieldIndex(previous => previous - 1)

  const onSubmit = values => {
    setTimeout(() => {
      alert(JSON.stringify(values))
    }, 2)
  }

  const keyPressHandler = isSubmitting => {
    if (!isSubmitting && activeFieldIndex >= fields.length - 1) {
      onSubmit()
    } else {
      advanceForm()
    }
  }

  return (
    <>
      <Formik
        initialValues={fields.reduce((values, { name, initialValue }) => {
          values[name] = initialValue || ''
          return values
        }, {})}
        validationSchema={Yup.object(
          fields.reduce((schema, { name, validator }) => {
            schema[name] = validator
            return schema
          }, {})
        )}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {fields.map((properties, i) => (
              // changing state will cause every field to re-render, which is not optimal
              <FormField
                key={properties.id || properties.name}
                id={i}
                activeFieldIndex={activeFieldIndex}
                keyPressHandler={keyPressHandler}
                isSubmitting={isSubmitting}
                autoFocus={i === 0}
                showSubmitButton={activeFieldIndex >= fields.length - 1}
                showRecedeButton={activeFieldIndex > 0}
                advanceForm={advanceForm}
                recedeForm={recedeForm}
                {...properties}
              />
            ))}
          </Form>
        )}
      </Formik>
    </>
  )
}
