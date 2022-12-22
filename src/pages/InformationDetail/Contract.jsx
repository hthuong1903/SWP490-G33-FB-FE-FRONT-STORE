import { Container } from '@mui/system'
export default function ContractInformation() {
    return (
        <div className='mt-6'>
            <Container>
                <div>
                    <header>
                        <h1 className="text-xl font-bold text-green-600">Liên Hệ</h1>
                    </header>
                    <h3 className='mt-4 mb-4'>
                        <strong>
                        CÔNG TY TNHH ĐỒ GỖ NỘI THẤT HOÀNG SƠN
                        </strong>
                    </h3>
                    <p>
                        Địa chỉ: Làng Nghề Vạn Điểm, huyện Thường Tín, Hà Nội.
                    </p>
                    <p className='mt-4'>
                        Liên hệ: <strong>
                        0989.887.300(Zalo/FaceBook)
                        </strong>
                    </p>
                    <ul className="marker:text-black-400 list-disc pl-5 space-y-3 mt-3">
                        <li>
                            Fanpage chính thức: <a href="https://www.facebook.com/DoGoHoangSon201" className="text-blue-600 visited:text-blue-600" target="_blank" rel="noopener noreferrer">https://www.facebook.com/DoGoHoangSon201</a>
                        </li>
                        <li>
                            Website: <a href="https://www.noithathoangson.live" className="text-blue-600 visited:text-blue-600" target="_blank" rel="noopener noreferrer">https://www.noithathoangson.live</a>
                        </li>
                    </ul>
                </div>
                
            </Container>
            
        </div>
    )
}