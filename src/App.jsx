import { Route, Routes } from 'react-router-dom'
import CartLayout from './assets/layout/CartLayout'
import EmptyLayout from './assets/layout/EmptyLayout'
import MainLayout from './assets/layout/MainLayout'
import CreateCarts from './pages/Carts/CreateCart'
import DetailCarts from './pages/Carts/DetailCart'
import Home from './pages/Home'
import ListingProduct from './pages/ListingProduct'
import LoginPage from './pages/Login'
import ProductDetails from './pages/ProductDetails'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products/:categoryId" element={<ListingProduct />} />
                    <Route path="products/details" element={<ProductDetails />} />
                </Route>
                <Route path="/cart/" element={<CartLayout />}>
                    <Route index element={<DetailCarts />} />
                    <Route path="create" element={<CreateCarts />} />
                </Route>
                <Route path="/login" element={<EmptyLayout />}>
                    <Route index element={<LoginPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
