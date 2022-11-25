import { Route, Routes } from 'react-router-dom'
import MainLayout from './assets/layout/MainLayout'
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
                    <Route path="products" element={<ListingProduct />} />
                    <Route path="products/details" element={<ProductDetails />} />
                    <Route path="contract" element={<ContractInformation />} />
                    <Route path="guide" element={<ShoppingGuide />} />
                    <Route path="introduce" element={<IntroductionPage />} />
                    <Route path="paymentInfo" element={<PaymentInfo />} />
                    <Route path="salePolicy" element={<SalePolicy />} />
                    <Route path="shippingPolicy" element={<ShippingPolicy />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
