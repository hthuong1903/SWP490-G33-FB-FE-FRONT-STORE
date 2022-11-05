import { Container, Divider } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Categories() {
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
                    <a href="#" className="group bg-cultured rounded-b drop-shadow-md rounded-t">
                        <div className="aspect-square w-full overflow-hidden rounded-t bg-gray-200">
                            <img
                                src="https://source.unsplash.com/random"
                                alt="123"
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="p-2 pl-3 text-lg font-medium text-gray-900">
                            Tủ để rượu (3)
                        </h3>
                    </a>
                    <a href="#" className="group bg-cultured rounded-b drop-shadow-md rounded-t">
                        <div className="aspect-square w-full overflow-hidden rounded-t bg-gray-200">
                            <img
                                src="https://source.unsplash.com/random"
                                alt="123"
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="p-2 pl-3 text-lg font-medium text-gray-900">
                            Tủ để rượu (3)
                        </h3>
                    </a>
                    <a href="#" className="group bg-cultured rounded-b drop-shadow-md rounded-t">
                        <div className="aspect-square w-full overflow-hidden rounded-t bg-gray-200">
                            <img
                                src="https://source.unsplash.com/random"
                                alt="123"
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="p-2 pl-3 text-lg font-medium text-gray-900">
                            Tủ để rượu (3)
                        </h3>
                    </a>
                    <a href="#" className="group bg-cultured rounded-b drop-shadow-md rounded-t">
                        <div className="aspect-square w-full overflow-hidden rounded-t bg-gray-200">
                            <img
                                src="https://source.unsplash.com/random"
                                alt="123"
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="p-2 pl-3 text-lg font-medium text-gray-900">
                            Tủ để rượu (3)
                        </h3>
                    </a>
                    <a href="#" className="group bg-cultured rounded-b drop-shadow-md rounded-t">
                        <div className="aspect-square w-full overflow-hidden rounded-t bg-gray-200">
                            <img
                                src="https://source.unsplash.com/random"
                                alt="123"
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="p-2 pl-3 text-lg font-medium text-gray-900">
                            Tủ để rượu (3)
                        </h3>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Categories
