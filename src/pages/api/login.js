import axios from 'axios'
import * as yup from 'yup'
import { getVideoData, validateVideoPremieres } from '../../lib/videos'
import { getEventProps } from '../../lib/event'

const DB_URL = `https://script.google.com/macros/s/${process.env.DB_ID}/exec`
export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const schema = yup.object().shape({
        email: yup.string().email().required(),
        register: yup
          .string()
          .matches(/^[0-9]{4,20}$/)
          .required()
      })

      const isValid = await schema.isValid(req.body)
      if (!isValid) throw new Error('Invalid data format')

      const dbRes = await axios.post(DB_URL, {
        ...req.body
      })

      if (dbRes.error) throw new Error(dbRes.error)
      if (dbRes.data.error) {
        res.status(404).json(dbRes.data)
      } else {
        const workshops = {
          time_management: '13',
          clinical: '9',
          presentation: '11',
          study: '12',
          public_speak: '10'
        }

        const { user } = dbRes.data
        // res.setHeader('Set-Cookie', [`gedaamId=`])
        const workshopIndices = [1, 3]
        const videoIds = ['1', workshops[user.fst_opt], '2', workshops[user.snd_opt], '3', '4']
        const extraVideoId =
          user.course !== 'Medicina'
            ? '6'
            : user.college === 'Unipam'
            ? '5'
            : user.college === 'UFVJM'
            ? '7'
            : ''

        const { day0TimeInMs } = getEventProps()
        const videos = validateVideoPremieres(
          videoIds.map((videoId, i) => {
            const videoData = getVideoData(videoId)
            return workshopIndices.includes(i)
              ? { ...videoData, premiereDay: i.toString() }
              : videoData
          }),
          day0TimeInMs
        )
        const currentVideo = videos.reverse().find(({ isPremiered }) => isPremiered)

        res.status(200).json({
          user: {
            ...user,
            events: null,
            videos,
            extraVideo:
              extraVideoId && validateVideoPremieres(getVideoData(extraVideoId), day0TimeInMs)[0],
            currentVideo
          }
        })
      }
    } catch (error) {
      res.status(400).json({ message: 'error', error: error && error.message })
    }
  } else {
    res.status(200).json({ message: 'hello there' })
  }
}
