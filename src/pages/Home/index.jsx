import productApi from '@/api/productApi'
import CardItem from '@/components/CardItem'
import Carousel from '@/components/Carousel'
import Categories from '@/components/Categories'
import CategoryTitle from '@/components/CategoryHeader'
import Feature from '@/components/Feature'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'

export default function Home() {
    const [categoryList, setCategoryList] = useState([])
    const [productList, setProductList] = useState([])

    const getAllProduct = async () => {
        try {
            const response = await productApi.getAllProduct()
            setProductList(response.data.data)
            console.log('getListProduct', response)
        } catch (error) {
            console.log('fail at getListProduct', error)
        }
    }
    useEffect(() => {
        const getAllCategory = async () => {
            try {
                const response = await productApi.getAllCategory()
                setCategoryList(response.data.data)
            } catch (error) {
                console.log('fail at getAllCategory', error)
            }
        }

        getAllCategory()
        getAllProduct()
    }, [])

    const filterProduct = (categoryId) =>
        productList?.filter((product) => product.category.id === categoryId).slice(0, 4)

    return (
        <Box>
            <Carousel />
            <Box className="bg-white mb-5">
                <Feature />
                <Categories />
            </Box>
            <Container>
                {categoryList.map((category) => {
                    return (
                        <Fragment key={category.id}>
                            <CategoryTitle title={category.name} linkNav={`/products/${category.id}`} />
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
                                {filterProduct(category.id).map((product) => {
                                    return (
                                        <CardItem
                                            productId={product.id}
                                            key={product.id}
                                            title={product.name}
                                            img={product.photoMainURl}
                                            price={product.priceOut.toLocaleString('vi-vn')}
                                            discount={product.discount}
                                            afterDiscount={(
                                                product.priceOut *
                                                ((100 - product.discount) / 100)
                                            ).toLocaleString('vi-vn')}
                                        />
                                    )
                                })}
                            </div>
                        </Fragment>
                    )
                })}
            </Container>
        </Box>
    )
}
