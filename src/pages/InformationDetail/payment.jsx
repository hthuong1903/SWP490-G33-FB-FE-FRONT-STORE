import { Container } from '@mui/system'
export default function PaymentInfo(){
    return (
        <div className='font-serif mt-6'>
            <Container>
                <header className='mt-4 mb-4'>
                    <h1 className="text-xl font-bold text-green-600">Thông Tin Thanh Toán</h1>
                </header>
                <p>
                – Thanh toán trực tiếp tại Xưởng sản xuất hoặc văn phòng, showroom của Xưởng Đồ Gỗ Mỹ Nghệ Hoàng Sơn.
                </p>
                <p>
                – Thanh toán qua hệ thống ngân hàng trực tuyến, chuyển khoản…
                </p>
                <p className='mt-4 mb-4'>
                    <strong>Ngân Hàng Đầu Tư và phát triển (BIDV)</strong>
                </p>
                <ul class="marker:text-black-400 list-disc pl-5 space-y-3 mt-3">
                    <li>
                        Chủ tài khoản : Nguyễn Văn A
                    </li>
                    <li>
                        Số tài khoản : 21410000880060
                    </li>
                    <li>
                        Chi Nhánh : Đông Hà Nội
                    </li>
                </ul>
                <p className='mt-4 mb-4'>
                    <strong>Ngân Hàng ngoại thương Vietcombank (VCB)</strong>
                </p>
                <ul class="marker:text-black-400 list-disc pl-5 space-y-3 mt-3">
                    <li>
                        Chủ tài khoản : Nguyễn Văn A
                    </li>
                    <li>
                        Số tài khoản : 21410000880060
                    </li>
                    <li>
                        Chi Nhánh : Đông Hà Nội
                    </li>
                </ul>
            </Container>
        </div>
    )
}