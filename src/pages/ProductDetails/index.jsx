import productApi from '@/api/productApi'
import BreadCrumb from '@/components/BreadCrumb'
import { Button } from '@mui/material'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ThumbGalerry from './components/ThumbGalerry'

function ProductDetails() {
    const [product, setProduct] = useState()

    let { productId } = useParams()

    const getProductById = async (id) => {
        try {
            const response = await productApi.getProductById(id)
            console.log('product by id', response.data.data[0])
            setProduct(response.data.data[0])
        } catch (error) {
            console.log('fail at getProduct id', error)
        }
    }

    useEffect(() => {
        getProductById(productId)
        console.log(product)
    }, [productId])

    if (product)
        return (
            <Container>
                <BreadCrumb
                    routers={[
                        { link: '/products/all', label: 'Sản phẩm' },
                        { link: '/products/details', label: `${product?.name}`, disabled: true }
                    ]}
                />
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-6">
                        <div className="w-full">
                            <ThumbGalerry
                                photoMainURl={product?.photoMainURl}
                                photoOnceURL={product?.photoOnceURL}
                                photoSecondURL={product?.photoSecondURL}
                                photoThirdURL={product?.photoThirdURL}
                            />
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="bg-white rounded h-full p-4 drop-shadow flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="text-2xl font-bold">{product?.name}</div>
                                <div className="">Danh mục: {product?.category.name}</div>
                                <div className="">Mã sản phẩm: {product?.productCode}</div>
                                <div className="">Chất liệu:{product?.material}</div>
                                <div className="">Mô tả: {product?.description}</div>
                            </div>
                            <div className="mb-5">
                                <div className="text-sm font-bold">
                                    <span className="line-through">
                                        {product?.priceOut.toLocaleString('vi-vn')} đ
                                    </span>{' '}
                                    <span className="ml-3">{product?.discount}%</span>
                                </div>

                                <div className="text-2xl font-bold">
                                    {((product?.priceOut * (100 - product?.discount)) / 100).toLocaleString('vi-vn')} đ
                                </div>
                            </div>
                            <div className="w-full">
                                <Button variant="contained" className="w-full">
                                    THÊM VÀO GIỎ HÀNG
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
}

export default ProductDetails
