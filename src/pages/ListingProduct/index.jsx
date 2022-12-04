import productApi from '@/api/productApi'
import BreadCrumb from '@/components/BreadCrumb'
import CardItem from '@/components/CardItem'
import NotFoundPage from '@/components/NotFoundPage'
import { Button, MenuItem, Pagination, TextField } from '@mui/material'
import { Container } from '@mui/system'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import FilterArea from './components/FilterArea'

export default function ListingProduct() {
    const [productList, setProductList] = useState([])
    const [searchParams] = useSearchParams()
    const [totalPage, setTotalPage] = useState(0)
    const [sortType, setSortType] = useState('name')
    const [pageNo, setPageNo] = useState(0)

    const price_from = searchParams.get('price_from')
    const price_to = searchParams.get('price_to')
    const wood_type = searchParams.getAll('wood_type')
    const search = searchParams.getAll('search')[0]
    let { categoryId } = useParams()

    const sortBy = [
        { label: 'Theo giá', value: 'price_out' },
        { label: 'Theo tên', value: 'name' }
    ]

    useEffect(() => {
        const getAllProductList = async () => {
            const payload = {
                categoryId: categoryId === 'all' ? null : categoryId,
                listIdMaterial: wood_type,
                ...(search ? { name: search } : { name: '' }),
                pageNo: pageNo,
                pageSize: 15,
                priceMax: price_to,
                priceMin: price_from,
                sortBy: sortType
            }

            try {
                const response = await productApi.getAllProductByFilter(payload)
                setProductList(response.data.data)
                setTotalPage(response.data.totalPage)
                console.log('getAllProductList', response)
            } catch (error) {
                console.log('fail at getAllProductList', error)
            }
        }
        if (price_from) {
            getAllProductList()
        }
    }, [searchParams, sortType, pageNo])

    const handleChangePageNo = (event, value) => {
        console.log(value)
        setPageNo(value - 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Container>
            <div className="flex justify-between items-center my-2">
                <BreadCrumb routers={[{ link: `/products/${categoryId}`, label: 'Sản phẩm' }]} />
                <div className="">
                    <TextField
                        id="outlined-select-currency"
                        className="bg-white"
                        select
                        label="Sắp xếp theo"
                        size="small"
                        value={sortType}
                        onChange={(e) => {
                            setSortType(e.target.value)
                        }}>
                        {sortBy.map((type) => (
                            <MenuItem key={type.value} value={type.value}>
                                {type.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-10">
                <div className="col-span-1">
                    <FilterArea />
                </div>
                <div className="col-span-3 relative">
                    {!productList.length ? (
                        <NotFoundPage />
                    ) : (
                        <>
                            <div
                                className={clsx(
                                    'grid',
                                    'grid-cols-1',
                                    `gap-y-${10}`,
                                    `gap-x-${6}`,
                                    'sm:grid-cols-2',
                                    'lg:grid-cols-3',
                                    `xl:grid-cols-${3}`,
                                    'xl:gap-x-8',
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
                                            productId={product.id}
                                            afterDiscount={(
                                                (product.priceOut * (100 - product.discount)) /
                                                100
                                            ).toLocaleString('vi-vn')}
                                        />
                                    )
                                })}
                            </div>
                            <div className="flex justify-end">
                                <Pagination
                                    count={totalPage}
                                    shape="rounded"
                                    color="primary"
                                    onChange={handleChangePageNo}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Container>
    )
}
