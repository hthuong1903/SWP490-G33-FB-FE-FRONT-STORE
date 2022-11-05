import CardItem from '@/components/CardItem'
import Carousel from '@/components/Carousel'
import Categories from '@/components/Categories'
import CategoryTitle from '@/components/CategoryHeader'
import Feature from '@/components/Feature'
import { Container } from '@mui/material'
import { Box } from '@mui/system'

export default function Home() {
    return (
        <Box>
            <Carousel />
            <Box className="bg-white mb-5">
                <Feature />
                <Categories />
            </Box>
            <Container>
                <CategoryTitle title={'Nội thất phòng khách'} linkNav="do-go" />
                <CardItem />
                <CategoryTitle title={'Nội thất phòng ngủ'} linkNav="do-go" />
                <CardItem />
                <CategoryTitle title={'Đồ thờ cúng'} linkNav="do-go" />
                <CardItem />
            </Container>
        </Box>
    )
}
