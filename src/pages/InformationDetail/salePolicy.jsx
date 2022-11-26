import { Container } from '@mui/system'
export default function SalePolicy() {
    return (
        <div className='font-serif mt-6'>
            <Container>
                <header className='mt-4 mb-4'>
                    <h1 className="text-xl font-bold text-green-600">Chính sách bán hàng</h1>
                </header>
                <p className='mb-3'> – Với sản phẩm không có sẵn, quý khách có thể đặt theo yêu cầu tối thiểu 7 ngày, tùy theo yêu cầu của khách hàng.</p>
                <p className='mb-3'>– Hàng có sẵn đặt cọc trước 10% giá trị sản phẩm trước khi chuyển hàng.</p>
                <p className='mb-3'>– Hàng không có sẵn đặt sản xuất theo yêu cầu, khách hàng đặt cọc trước tối thiểu 30% giá trị đơn hàng.</p>
                <p className='mb-3'>Xem thêm: </p>
                <ul class="marker:text-black-400 list-disc pl-5 space-y-3 mt-3 text-blue-500 visited:text-blue-300">
                    <li>
                        <a href=''>Hướng dẫn mua hàng</a>
                    </li>
                    <li>
                        <a href=''>Thông tin thanh toán</a>
                    </li>
                    <li>
                        <a href=''>Chính sách vận chuyển</a>
                    </li>
                    <li>
                        <a href=''>Chính sách bảo hành, đổi tra hàng hóa</a>
                    </li>
                </ul>
            </Container>
        </div>
    )
}