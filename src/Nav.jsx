import appLogo from './assets/logo.png'
import './style.css'

function Nav() {
  return (
    <>
       <nav>
            <img src={appLogo} className="nav--logo" alt='Logo' />
        </nav>
    </>
  )
}

export default Nav
