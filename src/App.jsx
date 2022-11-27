import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import CartLayout from './assets/layout/CartLayout'
import EmptyLayout from './assets/layout/EmptyLayout'
import MainLayout from './assets/layout/MainLayout'
import RequireAuth from './auth'
import { ROLES } from './constants'
import useAuth from './hooks/useAuth'
import CreateCarts from './pages/Carts/CreateCart'
import DetailCarts from './pages/Carts/DetailCart'
import Home from './pages/Home'
import ContractInformation from './pages/InformationDetail/Contract'
import ShoppingGuide from './pages/InformationDetail/Guide'
import IntroductionPage from './pages/InformationDetail/introduce'
import PaymentInfo from './pages/InformationDetail/payment'
import SalePolicy from './pages/InformationDetail/salePolicy'
import ShippingPolicy from './pages/InformationDetail/shippingPolicy'
import ListingProduct from './pages/ListingProduct'
import LoginPage from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Registor from './pages/Register'
import ConfirmEmailCode from './pages/Register/components/ConfirmEmailCode'
function App() {
    const { setAuth } = useAuth()
    let { pathname } = useLocation()
    let navigate = useNavigate()
    console.log('pathname', pathname)
    const userAuthen = JSON.parse(localStorage.getItem('fbm-user'))

    useEffect(() => {
        if (userAuthen !== null) {
            const username = userAuthen.username
            const pwd = userAuthen.pwd
            const name = userAuthen.name
            const roles = [userAuthen.roles[0].authority]
            const accessToken = userAuthen.token

            console.log('ok')

            setAuth({ username, pwd, roles, accessToken, name })
            navigate(pathname)
        }
    }, [])
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products/:categoryId" element={<ListingProduct />} />
                    <Route path="products/details/:productId" element={<ProductDetails />} />
                    <Route path="contact" element={<ContractInformation />} />
                    <Route path="guide" element={<ShoppingGuide />} />
                    <Route path="introduce" element={<IntroductionPage />} />
                    <Route path="paymentInfo" element={<PaymentInfo />} />
                    <Route path="salePolicy" element={<SalePolicy />} />
                    <Route path="shippingPolicy" element={<ShippingPolicy />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.CUSTOMER]} />}>
                    <Route path="/cart/" element={<CartLayout />}>
                        <Route index element={<DetailCarts />} />
                        <Route path="create" element={<CreateCarts />} />
                    </Route>
                </Route>

                <Route element={<EmptyLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registor" element={<Registor />} />
                    <Route path="registor/confirm" element={<ConfirmEmailCode />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
