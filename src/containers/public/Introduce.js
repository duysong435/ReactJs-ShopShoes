import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Introduce = () => {
    return (
        <div>
            <Header />
            <div className='flex-col mx-[22%] mt-8'>
                <div>
                    Topweb được thành lập với sứ mệnh giúp doanh nghiệp nhỏ và vừa có một công cụ sắc bén để cạnh tranh sòng phẳng với những doanh nghiệp lớn, doanh nghiệp nước ngoài trên môi trường internet. Với kinh nghiệm tự triển khai những dự án kinh doanh online hiệu quả và tiết kiệm chi phí, chúng tôi tự tin sẽ cung cấp cho khách hàng dịch vụ thiết kế web tốt nhất để phục vụ cho việc phát triển công ty trở lên lớn mạnh.
                </div>
                <div className='mt-2'>
                    <span className='text-xl font-bold'>Về chất lượng website</span>
                    <p className='mt-3'>Trong từng dự án, chúng tôi đều tích hợp cho quý khách hàng những công nghệ mới và tiên tiến nhất như: Tối ưu chuẩn SEO, Tối ưu cache, tối ưu tài nguyên, tối ưu dữ liệu,…Chất lượng website hoàn hảo là nền tảng tin tưởng của mọi khách hàng và là mục đích luôn thường trực gắn liền với quá trình phát triển thương hiệu của Topweb.</p>

                </div>
                <div className='mt-1'>
                    <span className='text-xl font-bold'>Trên nền tảng đa thiết bị</span>
                    <p className='mt-3'>Với xu hướng thiết kế hiện nay, chúng tôi áp dụng công nghệ Reponsive Web Design, web mobile được thiết kế phải có khả năng tự động điều chỉnh để hiện thị trên những thiết bị có kích thước màn hình khách nhau ! . Với sự phát triển của Công Nghệ html5 & css3, cùng với sự phát triển của thị trường di động, máy tính bảng, web đa thiết bị sẽ là xu hướng thiết kế website mới.</p>
                </div>
                <div className='mt-1'>
                    <span className='text-xl font-bold mt-2'>Đến với chúng tôi, quý khách hàng sẽ được cung cấp dịch vụ thiết kế website tốt nhất:</span>
                    <ul className='flex flex-col gap-y-3 list-disc text-[16px] mt-3'>
                        <li>Được sở hữu một website chuyên nghiệp với đầy đủ các tính năng.</li>
                        <li>Được quản lý toàn bộ mã nguồn để có thể tự quản lý và phát triển về sau.</li>
                        <li>Kho giao diện web đẹp và sang trọng được thiết kế chuyên nghiệp, hiện đại theo phong cách nước ngoài, theo chuẩn W3C.</li>
                        <li>Tốc độ truy cập nhanh, bảo mật cao sẽ mang đến những cơ hội kinh doanh, tăng lợi thế cạnh tranh với các doanh nghiệp khác.</li>
                        <li>Trang quản trị chuyên nghiệp, bạn không cần phải am hiểu về lĩnh vực CNTT cũng có thể dễ dàng quản trị.</li>
                        <li>Chi phí thiết kế và duy trì luôn thấp nhất.</li>
                    </ul>
                </div>
                <div className='text-xl font-bold mt-4'>Trân trọng!</div>
            </div>
            <Footer />

        </div>
    )
}

export default Introduce