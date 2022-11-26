import { Route, Routes } from 'react-router-dom'
import CartLayout from './assets/layout/CartLayout'
import MainLayout from './assets/layout/MainLayout'
import CreateCarts from './pages/Carts/CreateCart'
import DetailCarts from './pages/Carts/DetailCart'
import Home from './pages/Home'
import ListingProduct from './pages/ListingProduct'
import ProductDetails from './pages/ProductDetails'
import ContractInformation from './pages/InformationDetail/Contract'
import ShoppingGuide from './pages/InformationDetail/Guide'
import IntroductionPage from './pages/InformationDetail/introduce'
import PaymentInfo from './pages/InformationDetail/payment'
import SalePolicy from './pages/InformationDetail/salePolicy'
import ShippingPolicy from './pages/InformationDetail/shippingPolicy'
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products/:categoryId" element={<ListingProduct />} />
                    <Route path="products/details" element={<ProductDetails />} />
                    <Route path="contract" element={<ContractInformation />} />
                    <Route path="guide" element={<ShoppingGuide />} />
                    <Route path="introduce" element={<IntroductionPage />} />
                    <Route path="paymentInfo" element={<PaymentInfo />} />
                    <Route path="salePolicy" element={<SalePolicy />} />
                    <Route path="shippingPolicy" element={<ShippingPolicy />} />
                </Route>
                <Route path="/cart/" element={<CartLayout />}>
                    <Route index element={<DetailCarts />} />
                    <Route path="create" element={<CreateCarts />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
