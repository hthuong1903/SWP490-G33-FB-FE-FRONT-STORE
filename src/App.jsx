import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import CartLayout from './assets/layout/CartLayout'
import EmptyLayout from './assets/layout/EmptyLayout'
import MainLayout from './assets/layout/MainLayout'
import RequireAuth from './auth'
import { ROLES } from './constants'
import useAuth from './hooks/useAuth'
import CreateCarts from './pages/Carts/CreateCart'
import DetailCarts from './pages/Carts/DetailCart'
import Home from './pages/Home'
import ListingProduct from './pages/ListingProduct'
import LoginPage from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import ContractInformation from './pages/InformationDetail/Contract'
import ShoppingGuide from './pages/InformationDetail/Guide'
import IntroductionPage from './pages/InformationDetail/introduce'
import PaymentInfo from './pages/InformationDetail/payment'
import SalePolicy from './pages/InformationDetail/salePolicy'
import ShippingPolicy from './pages/InformationDetail/shippingPolicy'
function App() {
    const { auth, setAuth } = useAuth()
    const userAuthen = JSON.parse(localStorage.getItem('fbm-user'))
    let navigate = useNavigate()

    useEffect(() => {
        if (userAuthen !== null) {
            const username = userAuthen.username
            const pwd = userAuthen.pwd
            const roles = [userAuthen.roles[0].authority]
            const accessToken = userAuthen.token
            setAuth({ username, pwd, roles, accessToken })

            if (roles[0] === 'CUSTOMER') {
                navigate('/')
            }
        }
        console.log(auth)
    }, [])
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products/:categoryId" element={<ListingProduct />} />
                    <Route path="products/details/:productId" element={<ProductDetails />} />
                    <Route path="contract" element={<ContractInformation />} />
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
                <Route path="/login" element={<EmptyLayout />}>
                    <Route index element={<LoginPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
