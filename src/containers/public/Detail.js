import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import { detailProduct, fetchGender } from '../../store/actions';

const Detail = (props) => {
  let { id } = useParams();

  const convertImg = (base64) => {
    let imageBase64 = ''
    if (base64) {
      imageBase64 = new Buffer(base64, 'base64').toString('binary')
    }
    return imageBase64
  }

  useEffect(() => {
    props.detailProduct(id)
    props.fetchGender()
  }, [id])

  return (
    <div>
      <div className='h-[500px] flex justify-center mx-[22%] mt-10'>
        <div className=' h-full w-full'>
          <div className='h-full relative'>
            <img
              src={`${convertImg(props.product.image)}`} alt='as'
              className='h-full w-full absolute '
            />
          </div>
        </div>
        <div className=' h-full w-full'>
          <div className='mx-2'>
            <div className=''>
              <span className='text-3xl font-semibold'>KoBe Xi</span>
            </div>
            <div>
              <span className='text-red-500 text-3xl font-semibold'>50000 ₫</span>
            </div>
            <div>
              <p>
                Thiết bị Bật tắt đèn thông minh SH-D2 hoạt động bằng công nghệ cảm ứng hồng ngoại thân nhiệt. Khi người sử dụng trong vùng cảm ứng, thiết bị sẽ tự động bật đèn và tắt đèn khi không có người. Thiết bị được tích hợp tính năng cảm…
              </p>
              <p className='text-green-text font-semibold'>
                Thêm vào giỏ hàng để tiến hành mua hàng online:
              </p>
              <div className=''>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Màu sắc
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="mt-1 block w-full  rounded-2xl border border-gray-300 bg-white py-2 px-3 shadow-sm 
                                            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  // value={}
                  // onChange={(e) => setProduct({ ...product, genderId: e.target.value })}
                  >
                    {
                      props.arrGender && props.arrGender.length > 0 &&
                      props.arrGender.map((item, index) => {
                        return (
                          <option key={index} value={item.keyMap}>
                            {item.valueVi}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Kích thước
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="mt-1 block w-full  rounded-2xl border border-gray-300 bg-white py-2 px-3 shadow-sm 
                                            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  // value={}
                  // onChange={(e) => setProduct({ ...product, genderId: e.target.value })}
                  >
                    {
                      props.arrGender && props.arrGender.length > 0 &&
                      props.arrGender.map((item, index) => {
                        return (
                          <option key={index} value={item.keyMap}>
                            {item.valueVi}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className='flex gap-10'>
                  <div className='flex mt-4'>
                    <input
                      className='w-8 h-10 outline-none border-[1px] bg-[#f7f7f7] rounded-l-2xl cursor-pointer'
                      type={'button'}
                      value={'-'} />
                    <input
                      className='w-10 h-10 outline-none bg-[#f7f7f7] border-[1px] text-center'
                      type={'number'} step='1' max={'9999'} />
                    <input
                      className='w-8 h-10 outline-none border-[1px] bg-[#f7f7f7] rounded-r-2xl cursor-pointer'
                      type={'button'}
                      value={'+'} />
                  </div>
                  <div className='mt-4'>
                    <button
                      className=' h-10 bg-[#78abd8] py-2 px-4 rounded-lg'
                    >
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
                <p className='text-green-text font-semibold mt-10'>
                  Hoặc quý khách cũng có thể liên hệ trực tiếp để được tư vấn:
                </p>
                <div>
                  <div className='flex gap-2'>
                    <b>Địa chỉ:</b>
                    <p>335 Cầu Giấy, Hà Nội</p>
                  </div>
                  <div className='flex gap-2'>
                    <b>Số điện thoại:</b>
                    <p>0986.989.626</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-[22%]'>
        <span className='text-2xl font-semibold'>Sản phẩm liên quan</span>
        <div></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    arrGender: state.auth.arrGender,
    product: state.auth.detailProduct
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGender: () => dispatch(fetchGender()),
    detailProduct: (id) => dispatch(detailProduct(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
