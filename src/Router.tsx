import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/Index.tsx'
import { Home } from './pages/Home/Index.tsx'
import { Checkout } from './pages/Checkout/Index.tsx'
import { OrderSuccess } from './pages/OrderSuccess/Index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Route>
    </Routes>
  )
}
