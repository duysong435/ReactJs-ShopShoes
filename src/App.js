import { Route, Routes } from "react-router-dom";
import { path } from './utils/constant'
import {
  Contact,
  Home,
  Login,
  Men,
  Woman,
  Introduce,
  Register,
  Header,
  Cart,
  CheckOut,
  Detail,
  NotFound
} from './containers/public'

import {
  ManageUser,
  ManagerProduct,
  ManagerOrder
} from "./containers/system";

import Dashboard from "./containers/system/Dashboard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="bg-white">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path={path.HOME} element={<Header />} >
          <Route index element={<Home />} />
          <Route path={path.INTRODUCE} element={<Introduce />} />
          <Route path={path.MEN} element={<Men />} />
          <Route path={path.WOMAN} element={<Woman />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.DETAILS} element={<Detail />} />
          <Route path={path.CART} element={<Cart />} />
          <Route path={path.CHECKOUT} element={<CheckOut />} />
        </Route>
        {/* <Route path={path.LOGIN} element={<Login />} /> */}
        <Route path={path.SYSTEM} element={<Dashboard />} >
          <Route path={path.MANAGER_USER} element={<ManageUser />} />
          <Route path={path.MANAGER_PRODUCT} element={<ManagerProduct />} />
          <Route path={path.MANAGER_ORDER} element={<ManagerOrder />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
