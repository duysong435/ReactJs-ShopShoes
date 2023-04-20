import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";


const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token', 'role', 'idUser']
}

const userConfig = {
    ...commonConfig,
    key: 'user',
    whitelist: ['userData']
}

const appConfig = {
    ...commonConfig,
    key: 'app',
    whitelist: ['arrCart']
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: persistReducer(userConfig, userReducer),
    app: persistReducer(appConfig, appReducer)
})

export default rootReducer