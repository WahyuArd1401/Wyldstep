import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'


const OfferCard = ({ title, description }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center rounded-sm bg-[#F9F9F9] p-8 gap-3 hover:bg-[#141414] transition duration-200 ease-in group">
      <FontAwesomeIcon icon={faHourglassHalf} size='2x' className='rounded-full bg-[#EFEFEF] p-10'/>
      <h3 className="text-md text-center capitalize font-monument text-custom-primary group-hover:text-custom-secondary">{title}</h3>
      <p className="text-xs font-medium text-center text-gray-600 group-hover:text-custom-third">{description}</p>
    </div>
  )
}

export default OfferCard