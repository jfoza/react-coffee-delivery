import {
  BadgeCartIcon,
  BadgeLocationIcon,
  CartWithLocation,
  HeaderContainer,
  HeaderLogo,
} from './styles.ts'
import headerLogo from '../../assets/img/header-logo.svg'
import { HiMapPin } from 'react-icons/hi2'
import { FaShoppingCart } from 'react-icons/fa'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={headerLogo} />

      <CartWithLocation>
        <BadgeLocationIcon>
          <HiMapPin />
          Porto Alegre, RS
        </BadgeLocationIcon>

        <BadgeCartIcon>
          <FaShoppingCart />
        </BadgeCartIcon>
      </CartWithLocation>
    </HeaderContainer>
  )
}
