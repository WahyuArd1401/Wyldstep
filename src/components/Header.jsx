import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faMagnifyingGlass, faCartShopping, faUserLarge } from "@fortawesome/free-solid-svg-icons"
import { NavButton } from "./NavButton"

const Header = () => {
  return (
    <header className="flex justify-between items-center px-36 py-4">
      <h1 className="text-2xl font-monument"><a href="#">Wyldstep</a></h1>
      <nav>
        <ul className="flex gap-8 font-medium">
          <li><NavButton>Home</NavButton></li>
          <li><NavButton>About</NavButton></li>
          <li><NavButton>Shop</NavButton></li>
          <li><NavButton>Testimonial</NavButton></li>
        </ul>
      </nav>
      <nav>
        <ul className="flex gap-4">
          <li><NavButton><FontAwesomeIcon icon={faMagnifyingGlass} /></NavButton></li>
          <li><NavButton><FontAwesomeIcon icon={faCartShopping} /></NavButton></li>
          <li><NavButton><FontAwesomeIcon icon={faUserLarge} /></NavButton></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header