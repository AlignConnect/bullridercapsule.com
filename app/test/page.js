"use client"
import { store } from '@/lib/store';
import React from 'react'
import { Provider } from 'react-redux';
import Redux from './component/redux';

const page = ({ children }) => {


    // because this is not supported redux ---




    return (
        <Provider store={store}>
            <Redux>
                {children}
            </Redux>
        </Provider>
    )
}

export default page
