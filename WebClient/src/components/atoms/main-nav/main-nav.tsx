import { Link } from 'react-router-dom'
import { MainNavProps } from './main-nav.types'
import logo from './../../../assets/images/logo-light.png'

export const MainNav = (props: MainNavProps) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link className="text-white no-underline hover:text-white hover:no-underline" to="/">
          <img src={logo} alt="brand logo" className="block max-h-20" />
        </Link>
      </div>

      {props.userName && <div className="block text-white">Hello, {props.userName}</div>}

      <div className="block lg:hidden">
        <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 hidden" id="nav-content">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          {props.children.map((c, i) => {
            return (
              <li key={i} className="mr-3">
                <Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" to={c.path}>
                  {c.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
