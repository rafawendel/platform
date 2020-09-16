import fs from 'fs'

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const groups = await new Promise((resolve, reject) => {
        fs.readFile('./groups.json', null, (err, data) => {
          if (err) reject(err)
          resolve(data)
        })
      }).then(g => JSON.parse(g))
      res.status(200).json({ groups })
    } catch (err) {
      res.status(500).json({ error: err.message || err })
    }
  } else {
    res.status(400).json({ message: 'there is nothing to see here' })
  }
}
