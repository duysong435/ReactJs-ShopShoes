import { Route, Routes } from "react-router-dom";
import { path } from './utils/constant'
import {
  Contact,
  Home,
  Login,
  Men,
  Woman,
  Introduce,
  Register
} from './containers/public'

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
        <Route path={path.HOME} element={<Home />} />
        {/* <Route path={path.LOGIN} element={<Login />} /> */}
        <Route path={path.INTRODUCE} element={<Introduce />} />
        <Route path={path.MEN} element={<Men />} />
        <Route path={path.WOMAN} element={<Woman />} />
        <Route path={path.CONTACT} element={<Contact />} />
        <Route path={path.SYSTEM} element={<Dashboard />} />
        <Route path={path.REGISTER} element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
