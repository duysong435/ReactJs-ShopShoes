import { Route, Routes } from "react-router-dom";
import { path } from './utils/constant'
import {
  Contact,
  Home,
  Login,
  Men,
  Woman,
  Introduce
} from './containers/public'

import {
  ManageUser
} from './containers/system'

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.INTRODUCE} element={<Introduce />} />
        <Route path={path.MEN} element={<Men />} />
        <Route path={path.WOMAN} element={<Woman />} />
        <Route path={path.CONTACT} element={<Contact />} />
        <Route path={path.SYSTEM} element={<ManageUser />} />
      </Routes>
    </div>
  );
}

export default App;
