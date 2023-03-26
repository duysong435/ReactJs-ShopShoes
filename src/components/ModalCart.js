import React from 'react'
import { connect } from 'react-redux'

export const ModalCart = (props) => {
    return (
        <React.Fragment>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto 
            fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-[40%] my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}


                        
                        <div className='text-right mr-6 my-2'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCart)

