import Form from '../wrapper'
import { primary as fields } from './fields'

export default function SubscriptionForm(props) {
  const form = {
    id: 'primary',
    fields,
    title: 'Inscrição GEDAAM',
    displayTitle: 'Inscreva-se no GEDAAM'
  }

  return <Form form={form} {...props} />
}
