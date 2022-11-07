import { Route, Routes } from 'react-router-dom'
import MainLayout from './assets/layout/MainLayout'
import Home from './pages/Home'
import ListingProduct from './pages/ListingProduct'
import ProductDetails from './pages/ProductDetails'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<ListingProduct />} />
                    <Route path="products/details" element={<ProductDetails />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
