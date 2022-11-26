import { Container } from '@mui/system'
export default function ShippingPolicy() {
    return (
        <div className='font-serif mt-6'>
            <Container>
                <header className='mt-4 mb-4'>
                    <h1 className="text-xl font-bold text-green-600">Chính sách vận chuyển</h1>
                </header>
                <p className='mb-4'>
                    Xưởng Đồ Gỗ Giá Gốc vận chuyển hàng, giao hàng đến tận nhà quý khách trên toàn quốc 64 tỉnh thành. Kể cả quý khách có ở ngõ xóm, vùng sâu vùng xa, chỉ cần trên lãnh thổ Việt Nam chúng tôi đều có thể giao hàng đến tận nơi.
                </p>
                <p className='mb-4'>Dưới đây là chính sách vận chuyển hàng của cửa hàng:</p>
                <p className='mb-3'>
                    <strong>– Đơn hàng dưới 10 triệu: </strong>
                    Miễn phí vận chuyển 30km, tính từ vị trí của xưởng.
                </p>
                <p className='mb-3'>
                    <strong>– Đơn hàng từ 50 triệu: </strong>
                    miễn phí vận chuyển 200km, tính từ vị trí của Xưởng.
                </p>
                <p className='mb-4'>
                    <strong>– Đơn hàng trên 100 triệu:</strong>
                    Miễn phí vận chuyển toàn quốc dọc theo quốc lộ 1A.
                </p>
                <p className='mb-4'>
                    Đối với quý khách hàng ở xa hơn: Chuyển hàng dọc tuyến quốc lộ 1A từ Hà Nội – Sài Gòn – Tiền Giang. Hàng (nhỏ 500k, Hàng lớn bàn ghế phòng khách 2 triệu) xe tăng bo từ quốc lộ 1A vào tận nhà tính 12.000vnđ/km.
                </p>
                <p>
                    Quý khách có câu hỏi vui lòng liên hệ: <a href='' className='text-blue-700 visited:text-blue-700'>https://xuongdogogiagoc.com/lien-he</a>
                </p>
            </Container>
        </div>
    )
}