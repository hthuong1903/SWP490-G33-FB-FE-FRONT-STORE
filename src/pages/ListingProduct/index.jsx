import BreadCrumb from '@/components/BreadCrumb'
import CardItem from '@/components/CardItem'
import { Button } from '@mui/material'
import { Container } from '@mui/system'
import FilterArea from './components/FilterArea'

export default function ListingProduct() {
    return (
        <Container>
            <BreadCrumb routers={[{ link: '/products', label: 'Sản phẩm' }]} />
            <div className="grid grid-cols-4 gap-10">
                <div className="col-span-1">
                    <FilterArea />
                </div>
                <div className="col-span-3 relative">
                    <CardItem cols="3" mt="0" />
                    <div className="flex justify-center">
                        <Button variant="contained" className="m-0 w-60">
                            Xem thêm
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
