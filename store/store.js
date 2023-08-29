import { configureStore } from "@reduxjs/toolkit";

import globalReducer from './redusers/globalOptionsSlice';

export default configureStore({
    reducer:{
        global: globalReducer,
    }
})