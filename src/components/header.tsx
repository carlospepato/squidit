import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className='w-full mx-auto flex items-center justify-center' >
      <img src={logo} alt="" className='w-80 h-20' />
    </header>
  )
}