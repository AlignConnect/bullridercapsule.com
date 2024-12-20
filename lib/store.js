import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './service/productApi'
import productSlice from './slice/Productinfo'

// export const store = () => {
//     return configureStore({
//         reducer: {}
//     })
// }


export const store = configureStore({
    reducer: {

        [productsApi.reducerPath]: productsApi.reducer,
        [productSlice.name]: productSlice.reducer


    },
    middleware: (defaultmiddleware) => {

        return defaultmiddleware().concat(productsApi.middleware)

    }
})