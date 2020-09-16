import fs from 'fs'

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { headers, payload: groups } = req.body
      if (!headers.Authorization.includes(process.env.FORM_SERVER_KEY)) {
        res.status(403).json({ message: 'you are not authorized to perform this operation' })
      }

      await new Promise((resolve, reject) => {
        fs.writeFile('./groups.json', JSON.stringify(groups, null, 2), err => {
          if (err) reject(err)
          resolve()
        })
      })
      res.status(200).json({ message: 'OK' })
    } catch (err) {
      res.status(500).json({ error: err.message || err })
    }
  } else {
    res.status(400).json({ message: 'hello there' })
  }
}
