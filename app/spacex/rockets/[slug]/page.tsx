import Rocket from "@/app/lib/components/pins/Rocket";
import falcon9 from '@/app/lib/mocks/contents/falcon9.json'

const RocketPage = () => {
  return <Rocket rocket={falcon9} />
}

export default RocketPage