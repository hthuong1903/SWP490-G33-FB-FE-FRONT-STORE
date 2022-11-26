import { Container } from '@mui/system'
export default function ContractInformation() {
    return (
        <div className='font-serif mt-6'>
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
                        Địa chỉ: Làng Nghề Châu Phong, Liên Hà, Đông Anh, Hà Nội.
                    </p>
                    <p className='mt-4'>
                        Liên hệ: <strong>
                            0342322957(Zalo/FaceBook)
                        </strong>
                    </p>
                    <ul className="marker:text-black-400 list-disc pl-5 space-y-3 mt-3">
                        <li>
                            Fanpage chính thức: <a href="https://www.facebook.com/ntphamgia/" className="text-blue-600 visited:text-blue-600" target="_blank" rel="noopener noreferrer">https://www.facebook.com/ntphamgia</a>
                        </li>
                        <li>
                            Website: <a href="https://www.facebook.com/ntphamgia/" className="text-blue-600 visited:text-blue-600" target="_blank" rel="noopener noreferrer">https://www.facebook.com/ntphamgia</a>
                        </li>
                    </ul>
                </div>
                
            </Container>
            
        </div>
    )
}