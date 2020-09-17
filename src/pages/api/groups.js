import axios from 'axios'

const DB_URL = `https://script.google.com/macros/s/${process.env.DB_ID}/exec`

let GROUPS = []
export default async (req, res) => {
  if (req.method === 'GET') {
    const {
      query: { gid }
    } = req
    // const schema = Yup.array().of(Yup.object(GroupType))
    // const areCachedGroupsValid = await schema.isValid(GROUPS)
    try {
      if (!GROUPS[0]) {
        const {
          data: { groups: dbGroups }
        } = await axios.get(DB_URL)

        // await schema.isValid(groups).then(isValid => {
        //   if (!isValid) throw new Error('Invalid data format')
        // })

        GROUPS = [...dbGroups]
      } else {
        // makes an asynchronous update
        axios
          .get(DB_URL)
          .catch(err => console.error(err))
          .then(({ data: { groups: dbGroups } }) => {
            console.log('Updating groups asynchronously...')
            GROUPS = [...dbGroups]
          })
      }
      const groupIds = GROUPS.map(g => String(g.id))
      const groups =
        gid && groupIds.includes(gid) ? GROUPS.filter(g => String(g.id) === gid) : GROUPS
      res.status(200).json({ groups })
    } catch (err) {
      res.status(500).json({ error: err.message || err, groups: GROUPS })
    }
  } else {
    res.status(400).json({ message: `there is nothing to ${req.method.toLowerCase()} here` })
  }
}
