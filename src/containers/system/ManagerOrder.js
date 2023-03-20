import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer';
import { connect } from "react-redux";

import {
    FaEdit,
    FaRegWindowClose,
    FaTrashAlt
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import CommonUtils from '../../utils/CommonUtils';
import {
    authAddProduct,
    deleteProduct,
    editProduct,
    fetchBrand,
    fetchGender,
    getAllProduct
} from '../../store/actions';
import { CRUD_ACTIOND } from '../../utils/constant';

const ManageOrder = (props) => {
  
    return (
      <div>
        manager order
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // arrProduct: state.auth.arrProduct,
        // arrBrand: state.auth.arrBrand,
        // arrGender: state.auth.arrGender
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // authGetAllProduct: () => dispatch(getAllProduct()),
        // fetchBrand: () => dispatch(fetchBrand()),
        // fetchGender: () => dispatch(fetchGender()),
        // editProduct: (data) => dispatch(editProduct(data)),
        // deleteProduct: (id) => dispatch(deleteProduct(id)),
        // authAddProduct: (product) => dispatch(authAddProduct(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrder);