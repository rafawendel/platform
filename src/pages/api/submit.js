import axios from 'axios'
import { getFormSchemaByName, getValidationSchema } from '../../lib/forms'
// import { getValidationSchema, getFormSchemaByName } from '../../components/Forms/Subscription/utils'

const DB_URL = `https://script.google.com/macros/s/${process.env.DB_ID}/exec`
export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { formId, id, ...payload } = req.body
      const schema = getValidationSchema(getFormSchemaByName(formId))

      const isValid = await schema.isValid(payload)
      if (!isValid) throw new Error('Invalid data format')

      const dbRes = await axios.post(DB_URL, { ...payload, id, formId, operation: 'submit' })

      if (dbRes.error) throw new Error(dbRes.error)
      if (dbRes.data.error) {
        res.status(404).json(dbRes.data)
      } else {
        res.status(200).json(dbRes.data)
      }
    } catch (error) {
      res.status(400).json({ message: 'error', error: error && error.message })
    }
  } else {
    res.status(200).json({ message: 'hello there' })
  }
}
