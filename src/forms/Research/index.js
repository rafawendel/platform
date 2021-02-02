import { reduce } from 'lodash'
import Form from '../wrapper'
import * as fields from './fields'

export default function ResearchForm(props) {
  const form = {
    id: 'research',
    fields: reduce(fields, (acc, curr) => [...acc, ...curr], []),
    title: 'Motirõ GEDAAM',
    displayTitle: 'Motirõ GEDAAM'
  }

  return <Form form={form} {...props} />
}
