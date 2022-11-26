import productApi from '@/api/productApi'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Banner() {
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
        <>
            <Container className="">
                <div className="bg-white px-3 pt-3 rounded-t pb-3">
                    <div className="flex">
                        <div className="group inline-block relative">
                            <button className="bg-ming text-white font-semibold py-2 px-4 rounded inline-flex items-center gap-2">
                                <MenuIcon />
                                <span className="">Danh mục sản phẩm</span>
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </button>
                            <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block z-[100] w-72">
                                {categoryList.map((category) => {
                                    return (
                                        <li className="" key={category.id}>
                                            <a
                                                className=" bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#">
                                                {category.name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="ml-4">
                            <Link
                                to="/introduce"
                                className="font-semibold py-2 px-4 rounded inline-flex items-center mr-4 hover:bg-ming hover:text-white transition ease-in-out duration-400">
                                Giới thiệu
                            </Link>
                            <Link
                                to="/guide"
                                className="font-semibold py-2 px-4 rounded inline-flex items-center mr-4 hover:bg-ming hover:text-white transition ease-in-out duration-400">
                                Hướng dẫn mua hàng
                            </Link>
                            <Link
                                to="/contract"
                                className="font-semibold py-2 px-4 rounded inline-flex items-center mr-4 hover:bg-ming hover:text-white transition ease-in-out duration-400">
                                Liên hệ
                            </Link>
                        </div>
                        <div className="group/cart hover:bg-ming hover:text-white ml-auto rounded transition ease-in-out duration-400">
                            <Link
                                to="/cart"
                                className="font-semibold py-2 px-4 inline-flex items-center gap-2">
                                <ShoppingCartOutlinedIcon className="origin-bottom group-hover/cart:-rotate-6 group-hover/cart:translate-x-2 transition-transform" />
                                Giỏ hàng (123)
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Banner
