import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} width={60} height={60} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
