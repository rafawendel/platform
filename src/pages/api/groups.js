import axios from 'axios'

const DB_URL = `https://script.google.com/macros/s/${process.env.DB_ID}/exec`
export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const {
        data: { groups }
      } = await axios.get(DB_URL)
      res.status(200).json({ groups })
    } catch (err) {
      res.status(500).json({ error: err.message || err })
    }
  } else {
    res.status(400).json({ message: `there is nothing to ${req.method.toLowerCase()} here` })
  }
}
