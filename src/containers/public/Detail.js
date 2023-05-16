import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import {
  detailProducts,
  fetchColor,
  fetchSize
} from '../../store/actions';
import { path } from '../../utils/constant';
import { convertImg } from '../../utils/Convert';
import { addCart } from '../../store/actions/appAction';


const Detail = (props) => {
  let { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { detailProduct, arrSize, arrColor } = useSelector(state => state.auth)


  const [cart, setCart] = useState({
    product_id: id,
    size: 35,
    amount: 1,
  })

  const handleAddCart = () => {
    dispatch(addCart(cart))
  }

  const sumPrice = () => {
    return detailProduct?.price ? cart.amount * detailProduct.price : 0
  }

  const handleChange = event => {
    const value = Math.max(1, Math.min(999, Number(event.target.value)));
    setCart({ ...cart, amount: value });
  };

  useEffect(() => {
    dispatch(detailProducts(id))
    dispatch(fetchSize())
    dispatch(fetchColor())
  }, [id])

  useEffect(() => {
    setCart(prevCart => ({
      ...prevCart,
      price: detailProduct?.price || 0,
    }));
  }, [detailProduct?.price]);

  console.log(cart)
  console.log(detailProduct)
  return (
    <div>
      <div className='h-[500px] flex justify-center mx-[22%] mt-10'>
        <div className=' h-full w-full'>
          <div className='h-full relative'>
            <img
              src={`${convertImg(detailProduct.image)}`} alt='as'
              className='h-full w-full absolute '
            />
          </div>
        </div>
        <div className=' h-full w-full'>
          <div className='mx-2'>
            <div className=''>
              <span className='text-3xl font-semibold'>{detailProduct?.title}</span>
            </div>
            <div>
              <span className='text-red-500 text-3xl font-semibold'>{detailProduct.price} ₫</span>
            </div>
            <div>
              <p>
                {detailProduct?.description}
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
                      arrColor && arrColor.length > 0 &&
                      arrColor.map((item, index) => {
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
                    onChange={(e) => setCart({ ...cart, size: +e.target.value })}
                  >
                    {
                      arrSize && arrSize.length > 0 &&
                      arrSize.map((item, index) => {
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
                    <span onClick={() => {
                      if (cart.amount === 0) {
                        setCart({ ...cart, amount: 0 })
                      } else {
                        setCart({ ...cart, amount: cart.amount - 1 })
                      }
                    }}>
                      <input
                        className='w-8 h-10 outline-none border-[1px] bg-[#f7f7f7] rounded-l-2xl cursor-pointer'
                        type={'button'}
                        value={'-'} />
                    </span>
                    <input
                      className='w-10 h-10 outline-none bg-[#f7f7f7] border-[1px] text-center'
                      type={'number'} step={1} min={1} max={999}
                      value={cart.amount}
                      onChange={(e) => {
                        handleChange(e)
                      }}
                    />
                    <span onClick={() => {
                      if (cart.amount >= 999) {
                        setCart({ ...cart, amount: 999 })
                      } else {
                        setCart({ ...cart, amount: cart.amount + 1 })
                      }
                    }}>
                      <input
                        className='w-8 h-10 outline-none border-[1px] bg-[#f7f7f7] rounded-r-2xl cursor-pointer'
                        type={'button'}
                        value={'+'} />
                    </span>
                  </div>
                  <div className='mt-4'>
                    <button
                      className=' h-10 bg-[#78abd8] py-2 px-4 rounded-lg'
                      onClick={() => {
                        handleAddCart()
                      }}
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

export default Detail
