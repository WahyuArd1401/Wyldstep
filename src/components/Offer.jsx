import OfferCard from './OfferCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import Subtitle from './Subtitle'

const Offer = () => {
  const content = [
    {
      icon: <FontAwesomeIcon icon={faHourglassHalf} />,
      title: "24/7 support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }, {
      icon: <FontAwesomeIcon icon={faHourglassHalf} />,
      title: "cash back",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }, {
      icon: <FontAwesomeIcon icon={faHourglassHalf} />,
      title: "monthly offer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }, {
      icon: <FontAwesomeIcon icon={faHourglassHalf} />,
      title: "membership",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
  ]
  return (
    <div className='w-full px-20 py-10 bg-[#EFEFEF] flex flex-col justify-center items-center'>
      <Subtitle>What we <span className='text-custom-secondary'>offer</span></Subtitle>
      <div className='w-3/4 flex justify-center gap-8'>
        {content.map((item, index) => {
          return (
            <OfferCard key={index} title={item.title} description={item.description} />
          )
        })}
      </div>
    </div>
  )
}

export default Offer