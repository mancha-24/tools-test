import { useState } from 'react'
import { FiChevronLeft, FiHome, FiInfo, FiMail, FiMenu } from 'react-icons/fi' // importar los iconos de react-icons
const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPushed, setIsPushed] = useState(false)

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsPushed(!isPushed)
  }
  return (
    <div className={`flex ${isPushed ? 'overflow-hidden' : ''}`}>
    <div className={`w-64 bg-gray-800 text-white h-screen fixed top-0 left-0 transform ${isMenuOpen ? '' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Menu</h1>
        <ul className="mt-4">
          <li className="py-2">Home</li>
          <li className="py-2">About</li>
          <li className="py-2">Contact</li>
        </ul>
      </div>
    </div>
    <div className="flex-1 p-8">
      <div className="mb-4">
        <button className="bg-gray-800 text-white p-2 rounded-lg" onClick={handleMenuOpen}>
          <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`} viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
          <svg className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 6H5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2zM19 11H5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2zM5 16h9a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2z" />
          </svg>
        </button>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id pharetra quam. Nunc eu nunc diam. Etiam scelerisque sodales velit quis pretium. Nam ac posuere neque. Sed porta mi at lectus fermentum sagittis. Fusce suscipit, nibh sit amet pharetra vehicula, massa libero rhoncus elit, at consequat velit velit ut purus. </p>
    </div>
  </div>
  )
}

export default Menu
