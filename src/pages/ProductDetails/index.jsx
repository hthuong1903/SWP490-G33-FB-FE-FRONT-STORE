import BreadCrumb from '@/components/BreadCrumb'
import { Container } from '@mui/system'
import ThumbGalerry from './components/ThumbGalerry'

function ProductDetails() {
    return (
        <Container>
            <BreadCrumb
                routers={[
                    { link: '/products', label: 'Sản phẩm' },
                    { link: '/products/details', label: 'Chi tiết sản phẩm xyz' }
                ]}
            />
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6">
                    <div className="w-full">
                        <ThumbGalerry />
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="bg-white rounded h-full p-4 drop-shadow">
                        <div className="text-2xl font-bold">Bàn thờ sang chảnh</div>
                        <div className="">Danh mục: đồ thờ cúng</div>
                        <div className="">Mã sản phẩm: H123AB</div>
                        <div className="">Chất liệu: Gỗ Hương</div>
                        <div className="">Mô tả: cao to</div>
                        <div className="text-sm line-through">20.000.000 đ</div>
                        <div className="text-2xl">20.000.000 đ</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductDetails
