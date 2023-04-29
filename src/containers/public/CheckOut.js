import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";

import { TfiAngleDoubleRight } from "react-icons/tfi";
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { clearCart, getAllCart } from '../../store/actions';

import { path, payment } from '../../utils/constant';
import paypal from '../../assets/icon/paypal.png'
import * as paymentService from '../../services/paymentService';
import { createOrder, createOrderDetailService } from '../../services/orderService';
import { useDispatch, useSelector } from 'react-redux';
import { getNameService } from '../../services/productService';


export const CheckOut = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { idUser } = useSelector(state => state.auth)
    const { arrCart } = useSelector(state => state.app)

    // const [order, setOrder] = useState({
    //     user_id: '',
    //     payment_method: '',
    //     status: '',
    //     total_moeny: '',
    //     is_paid: '',
    //     paidAt: ''
    // })
    const [totalMoney, setTotalMoney] = useState(0)
    const [arrCarts, setArrCarts] = useState([{
        name: '',
        size: '',
        price: '',
        amount: ''
    }])



    const [checkButton, setCheckButton] = useState(payment.CASH)
    const [sdkReady, setSdkReady] = useState(false)

    const addPaypalScript = async () => {
        const data = await paymentService.getPaymentService()
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `https://www.paypal.com/sdk/js?client-id=${data.errMessage}`
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
        // console.log(data)
    }

    const onSuccessPaypal = async (details, data) => {
        const res = await createOrder({
            user_id: idUser,
            payment_method: payment.PAYPAL,
            status: 'S1',
            total_money: totalMoney,
            is_paid: true,
            paidAt: details.update_time
        })
        const order_id = res.order_id
        arrCart.map((cartItem) => createOrderDetailService({
            order_id: order_id,
            product_id: cartItem.product_id,
            size: cartItem.size,
            amount: cartItem.amount,
            price: cartItem.price,
        }));
        dispatch(clearCart())
        setTimeout(() => {
            navigate(path.ORDERCOMPLETE, { state: { order_id: order_id } });
        }, 2000);
    }

    const handlePayment = async () => {
        const res = await createOrder({
            user_id: idUser,
            payment_method: payment.CASH,
            status: 'S1',
            total_money: totalMoney,
            is_paid: false,
            paidAt: null
        })
        const order_id = res.order_id
        arrCart.map((cartItem) => createOrderDetailService({
            order_id: order_id,
            product_id: cartItem.product_id,
            size: cartItem.size,
            amount: cartItem.amount,
            price: cartItem.price,
        }));
        dispatch(clearCart())
        setTimeout(() => {
            navigate(path.ORDERCOMPLETE, { state: { order_id: order_id } });
        }, 2000);
    }

    const getCart = async () => {
        const promises = arrCart.map(cartItem => getNameService(cartItem.product_id));
        const cartItems = await Promise.all(promises);
        const updatedArrCart = cartItems.map((cartItem, index) => {
            const { name, price } = cartItem.data;
            const { amount, size } = arrCart[index];
            const total = amount * price
            return { name, size, price, amount, total };
        });
        const totalMoney = updatedArrCart.reduce((sum, item) => sum + item.total, 0);
        setTotalMoney(totalMoney);
        setArrCarts(updatedArrCart);
    }

    useEffect(() => {
        // addPaypalScript()
        getCart()
        if (!props.isLogin) {

        } else {

        }
    }, [])

    useEffect(() => {
        if (!window.paypal) {
            addPaypalScript()
        } else {
            setSdkReady(true)
        }
    }, [])
    // console.log(arrCarts)
    console.log('arrCart', arrCart)
    return (
        <div>
            <div className='mx-[18%]'>
                <div className='flex justify-center items-center text-2xl gap-3 mt-10'>
                    <span>Shopping Cart</span>
                    <TfiAngleDoubleRight />
                    <span>Checkout Details</span>
                    <TfiAngleDoubleRight />
                    <span>Order Complete</span>
                </div>
                <div className='grid grid-cols-5 mt-10'>
                    <div className="flex flex-col pb-10 col-span-3">
                        <div className='grid grid-cols-6 gap-2'>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Họ *
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full h-10  px-2 border-2 outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // value={user.email}
                                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                                // disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Tên *
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full h-10  px-2 border-2 outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // value={user.email}
                                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                                // disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Địa chỉ *
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full h-10  px-2 border-2 outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // value={user.email}
                                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                                // disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Mã bưu điện
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full h-10  px-2 border-2 outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // value={user.email}
                                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                                // disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Tỉnh thành phố
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full h-10  px-2 border-2 outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // value={user.email}
                                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                                // disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Số điện thoại *
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full h-10  px-2 border-2 outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // value={user.email}
                                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                                // disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Địa chỉ email *
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full h-10  px-2 border-2 outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // value={user.email}
                                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                                // disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                />
                            </div>
                        </div>
                    </div>
                    {/* End table */}
                    <div className='col-span-2 ml-4 text-base'>
                        <h2 className='uppercase font-medium text-xl'>Đơn hàng của bạn</h2>
                        <div className='flex w-[70%] justify-between border-b-[3px] uppercase'>
                            <b>Sản phẩm</b>
                            <b>Tổng cộng</b>
                        </div>
                        {
                            arrCarts && arrCarts.length > 0 &&
                            arrCarts.map((item, index) => {
                                return (
                                    <div className='flex w-[70%] justify-between  border-b-[1px] mt-3 '
                                        key={index}
                                    >
                                        <p>{item.name} <b className='text-xs'>x{item.amount}</b>
                                        </p>
                                        <span>{item.total}</span>
                                    </div>
                                )
                            })

                        }
                        <div className='flex w-[70%] justify-between  border-b-[1px] mt-3 uppercase'>
                            <b>Tổng phụ</b>
                            <span>0</span>
                        </div>
                        <div className='flex w-[70%] justify-between border-b-[3px] mt-3 uppercase'>
                            <b>Tổng cộng</b>
                            <span>{totalMoney}</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='radio' name='check' defaultChecked
                                onClick={() => setCheckButton(payment.CASH)}
                            />
                            <FaRegMoneyBillAlt size={40} className='mx-6' />
                            <p>Thanh toán khi nhận hàng</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='radio' name='check'
                                onClick={() => setCheckButton(payment.PAYPAL)}
                            />
                            <img src={paypal} alt={paypal} />
                            <p>Thanh toán qua paypal</p>
                        </div>
                        {
                            checkButton === payment.PAYPAL && sdkReady ?
                                <div className='w-[70%] mt-4'>
                                    <PayPalButton
                                        amount={`${(totalMoney / 23000).toFixed(2)}`}
                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onSuccess={(details, data) => {
                                            // alert("Transaction completed by " + details.payer.name.given_name);

                                            // OPTIONAL: Call your server to save the transaction
                                            // return fetch("/paypal-transaction-complete", {
                                            //     method: "post",
                                            //     body: JSON.stringify({
                                            //         orderId: data.orderID
                                            //     })
                                            // });
                                            return onSuccessPaypal(details, data)
                                        }}
                                        // options={{
                                        //     clientId: "PRODUCTION_CLIENT_ID"
                                        // }}
                                        onError={() => {
                                            alert('error')
                                        }}
                                    />
                                </div>
                                :
                                <div className='mt-4'>
                                    <button
                                        type="button"
                                        className="inline-flex w-[70%] justify-center rounded-md border border-transparent bg-[#ffc439] py-2 px-4 text-sm font-medium text-white shadow-sm
                                     hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => handlePayment()}
                                    >
                                        Đặt hàng
                                    </button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut