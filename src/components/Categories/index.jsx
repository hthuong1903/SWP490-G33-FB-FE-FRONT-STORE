import { Container, Divider } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useEffect, useState } from 'react'
import productApi from '@/api/productApi'

function Categories() {
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        const getAllCategory = async () => {
            try {
                const response = await productApi.getAllCategory()
                setCategoryList(response.data.data)
                console.log('all category', response)
            } catch (error) {
                console.log('fail at getAllCategory', error)
            }
        }
        getAllCategory()
    }, [])
    return (
        <Container>
            <div>
                <Divider className="border-gray-400">
                    <div className="flex border p-4 font-bold">
                        <ExpandMoreIcon />
                        <div className="">DANH MỤC SẢN PHẨM</div>
                    </div>
                </Divider>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-7 pb-7">
                    {categoryList.map((category) => {
                        return (
                            <a
                                key={category.id}
                                href="#"
                                className="group bg-cultured rounded-b drop-shadow-md rounded-t">
                                <div className="aspect-square w-full overflow-hidden rounded-t bg-gray-200">
                                    <img
                                        src={category.urlImage}
                                        alt="123"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="p-2 pl-3 text-lg font-medium text-gray-900">
                                    {category.name} ({category.quantity})
                                </h3>
                            </a>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Categories
