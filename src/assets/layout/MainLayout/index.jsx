import FloatContact from '@/components/FloatContact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { Provider } from '@/contexts/Cart/contexts'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
function MainLayout() {
    return (
        <Box>
            <Provider>
                <FloatContact />
                <Header />
                <Navbar />
                <Outlet />
                <Footer />
            </Provider>
        </Box>
    )
}

export default MainLayout
