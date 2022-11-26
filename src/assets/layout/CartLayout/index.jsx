import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'

function CartLayout() {
    return (
        <Box>
            <Header />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default CartLayout
