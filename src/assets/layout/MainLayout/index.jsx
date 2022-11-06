import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <Box>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default MainLayout
