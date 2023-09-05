import { configureStore } from "@reduxjs/toolkit";

import globalReducer from './redusers/globalOptionsSlice';
import dataReducer from './redusers/dataSlice';
import cardReduser from './redusers/cardSlice';

export default configureStore({
    reducer:{
        global: globalReducer,
        data: dataReducer,
        card: cardReduser,
    }
})