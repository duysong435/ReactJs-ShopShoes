import React, { useEffect } from 'react'
import { path } from '../../utils/constant'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../../utils/Format'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/actions'
import { convertImg } from '../../utils/Convert'

const Woman = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const { arrProduct } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getAllProduct())
  }, [])

  return (
    <div>
      <div className='mx-[22%] mb-8 pb-4 mt-5'>
        <div className='flex gap-2'>
          <span className='hover:text-blue-300'>
            Trang chủ
          </span>
          <span>/</span>
          <span>Giày nữ</span>
        </div>
      </div>
      <div className='h-[530px] '>
        <div className='mx-[22%] h-full flex flex-wrap justify-between '>
          {
            arrProduct && arrProduct.length > 0 &&
            arrProduct.map((item, index) => {
              return (
                <div key={index} className='w-[247px] h-[252px]  shadow shadow-[#878282]'>
                  <div className='h-[75%] cursor-pointer'
                    onClick={() => navigate(`/${path.DETAIL}${item.id}`)}
                  // to={`${path.DETAIL}${item.id}`}
                  >
                    <img
                      src={`${convertImg(item.image)}`} alt='as'
                      className='h-full w-full '
                    />
                    {/* <div className='h-full w-full'
                                            style={{ backgroundImage: `url(${convertImg(item.image)})` }}></div> */}
                  </div>
                  <div className='h-[25%] text-center text-black-text bg-white'>
                    <span>{item.name}</span><br />
                    <span className='text-red-price font-semibold'>{formatPrice(item.price) + '₫'}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Woman