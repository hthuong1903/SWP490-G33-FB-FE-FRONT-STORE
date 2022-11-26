import productApi from '@/api/productApi'
import BreadCrumb from '@/components/BreadCrumb'
import CardItem from '@/components/CardItem'
import { Button } from '@mui/material'
import { Container } from '@mui/system'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import FilterArea from './components/FilterArea'

export default function ListingProduct() {
    const [productList, setProductList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const price_from = searchParams.get('price_from')
    const price_to = searchParams.get('price_to')
    const wood_type = searchParams.getAll('wood_type')
    const search = searchParams.getAll('search')[0]
    let { categoryId } = useParams()

    useEffect(() => {
        const getAllProductList = async () => {
            const payload = {
                categoryId: categoryId,
                listIdMaterial: wood_type,
                name: search,
                pageNo: 0,
                pageSize: 3,
                priceMax: price_to,
                priceMin: price_from,
                sortBy: 'id'
            }

            try {
                const response = await productApi.getAllProductByFilter(payload)
                setProductList(response.data.data)
                console.log('getAllProductList', response)
            } catch (error) {
                console.log('fail at getAllProductList', error)
            }
        }
        getAllProductList()
    }, [searchParams])
    return (
        <Container>
            <BreadCrumb routers={[{ link: '/products', label: 'Sản phẩm' }]} />
            <div className="grid grid-cols-4 gap-10">
                <div className="col-span-1">
                    <FilterArea />
                </div>
                <div className="col-span-3 relative">
                    <div
                        className={clsx(
                            'grid',
                            'grid-cols-1',
                            `gap-y-${10}`,
                            `gap-x-${6}`,
                            'sm:grid-cols-2',
                            'lg:grid-cols-3',
                            `xl:grid-cols-${4}`,
                            'xl:gap-x-8',
                            `mt-${7}`,
                            'pb-10'
                        )}>
                        {productList.map((product) => {
                            return (
                                <CardItem
                                    key={product.id}
                                    img={product.photoMainURl}
                                    title={product.name}
                                    price={product.priceOut}
                                    discount={product.discount}
                                    afterDiscount={
                                        ((product.priceOut * (100 - product.discount)) / 100).toLocaleString('vi-vn')
                                    }
                                />
                            )
                        })}
                    </div>
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
