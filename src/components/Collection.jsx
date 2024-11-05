import CollectionCard from "./CollectionCard"
import Subtitle from "./Subtitle"

const Collection = () => {
  return (
    <section className="w-full px-20 py-10 flex flex-col items-center" 
    style={{ 
      backgroundImage: 'url("../images/background.jpg")',
      backgroundPosition: 'center', 
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat', 
      backgroundBlendMode: 'overlay'}}>
      <Subtitle>Our <span className='text-custom-secondary'>collection</span></Subtitle>
      <ul className="w-3/4 flex justify-between font-monument text-md mb-8">
        <li className="hover:text-custom-primary">Boots</li>
        <li className="hover:text-custom-primary">Shoes</li>
        <li className="hover:text-custom-primary">Slips</li>
        <li className="hover:text-custom-primary">Sandal</li>
        <li className="hover:text-custom-primary">Sports Shoe</li>
      </ul>
      <div className="w-3/4 grid grid-cols-3 gap-8 justify-between">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </section>
  )
}

export default Collection