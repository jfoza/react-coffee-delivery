import {
  BadgeCartIcon,
  BadgeLocationIcon,
  CartWithLocation,
  HeaderContainer,
  HeaderLogo,
  CartItemCount,
} from './styles.ts'
import headerLogo from '../../assets/img/header-logo.svg'
import { HiMapPin } from 'react-icons/hi2'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext.tsx'

export function Header() {
  const { cartItems } = useContext(OrdersContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <HeaderLogo src={headerLogo} />
      </NavLink>

      <CartWithLocation>
        <BadgeLocationIcon>
          <HiMapPin />
          Porto Alegre, RS
        </BadgeLocationIcon>

        <NavLink to="/checkout" title="Checkout">
          <BadgeCartIcon>
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <CartItemCount>{cartItems.length}</CartItemCount>
            )}
          </BadgeCartIcon>
        </NavLink>
      </CartWithLocation>
    </HeaderContainer>
  )
}
