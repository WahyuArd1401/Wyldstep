import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <footer>
      <div className="w-full px-20 py-10 bg-[#FAFAFA] flex flex-col justify-center items-center">  
        <div className="w-3/4 flex justify-between gap-10">  
          <div className="w-1/2 flex flex-col gap-6">
            <h1 className="font-monument text-2xl">Wyldstep</h1>
            <p className="text-sm text-gray-400 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quibusdam nisi ea, perferendis qui veritatis est dolorem quos similique. Similique, ipsum libero! Maiores aliquid eum hic! Tempora sequi iste minima?</p>
            <ul className="flex gap-6">
              <li><a href=""><FontAwesomeIcon icon={faInstagram} className="aspect-square bg-custom-secondary p-2 text-[#FAFAFA]" size="lg"/></a></li>
              <li><a href=""><FontAwesomeIcon icon={faFacebookF} className="aspect-square bg-custom-secondary p-2 text-[#FAFAFA]" size="lg"/></a></li>
              <li><a href=""><FontAwesomeIcon icon={faLinkedinIn} className="aspect-square bg-custom-secondary p-2 text-[#FAFAFA]" size="lg"/></a></li>
              <li><a href=""><FontAwesomeIcon icon={faXTwitter} className="aspect-square bg-custom-secondary p-2 text-[#FAFAFA]" size="lg"/></a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 capitalize ">
            <p className="font-monument">quick links</p>
            <ul className="text-sm text-gray-400 font-medium flex flex-col gap-4">
              <li className="hover:text-black"><a href="">Home</a></li>
              <li className="hover:text-black"><a href="">About</a></li>
              <li className="hover:text-black"><a href="">Shop</a></li>
              <li className="hover:text-black"><a href="">Testimonial</a></li>
              <li className="hover:text-black"><a href="">Collections</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 capitalize ">
            <p className="font-monument">find products</p>
            <ul className="text-sm text-gray-400 font-medium flex flex-col gap-4">
              <li className="hover:text-black"><a href="">about us</a></li>
              <li className="hover:text-black"><a href="">contact us</a></li>
              <li className="hover:text-black"><a href="">return policy</a></li>
              <li className="hover:text-black"><a href="">privacy policy</a></li>
              <li className="hover:text-black"><a href="">pacyment policy</a></li>
            </ul>
          </div>
        </div>  
      </div>  
    </footer>
  )
}

export default Footer