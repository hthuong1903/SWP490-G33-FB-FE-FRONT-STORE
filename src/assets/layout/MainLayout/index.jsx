import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <Box>
            <Header />
            <Navbar />
            <Outlet/>
            <Container>
                <Footer />
            </Container>
        </Box>
    )
}

export default MainLayout
