import axios from 'axios'
import { isNumber, pick } from 'lodash'

const DB_URL = `https://script.google.com/macros/s/${process.env.DB_ID}/exec`

let cachedGroups = []

async function updateCachedGroups() {
  const dbRequestConfig = {
    params: {
      operation: 'groups'
    }
  }

  if (!cachedGroups[0]) {
    const {
      data: { groups: dbGroups }
    } = await axios.get(DB_URL, dbRequestConfig)

    const groups = dbGroups
      .filter(g => isNumber(g.id))
      .map(g =>
        pick(g, [
          'id',
          'vacancies',
          'openVacancies',
          'leaders',
          'title',
          'specialty',
          'description',
          'weekDay',
          'startsAt',
          'endsAt',
          'lang',
          'preferenceByYear',
          'preferenceByCollege'
        ])
      )

    cachedGroups = [...groups]
  } else {
    // makes an asynchronous update
    axios
      .get(DB_URL, dbRequestConfig)
      .catch(console.error)
      .then(({ data: { groups: dbGroups } }) => {
        console.log('Updating groups asynchronously...')
        cachedGroups = [...dbGroups]
      })
  }
}
export default async (req, res) => {
  if (req.method === 'GET') {
    const {
      query: { gid }
    } = req

    await updateCachedGroups()
      .then(() => {
        const groupIds = cachedGroups.map(g => String(g.id))
        const groups =
          gid && groupIds.includes(gid)
            ? cachedGroups.filter(g => String(g.id) === gid)
            : cachedGroups

        res.status(200).json({ groups })
      })
      .catch(err => {
        console.error(err)
        res.status(500).json({ error: err.message || err, groups: cachedGroups })
      })
  } else {
    res.status(400).json({ message: `there is nothing to ${req.method.toLowerCase()} here` })
  }
}
