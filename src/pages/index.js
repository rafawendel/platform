import { useRouter } from 'next/router'
import Ektelesi from './ektelesi'
import PlainModal from '../components/common/Modals/PlainModal'

export default function Home() {
  const router = useRouter()
  return (
    <>
      {/* <PlainModal
        buttons={['Ir até lá', 'Mais tarde']}
        redirect={() => {
          router.push('/ektelesi')
        }}
      >
        <p>O evento já começou! Entre já na página inicial!</p>
      </PlainModal> */}
      <Ektelesi />
    </>
  )
}
