import { useAppDispatch } from '@/lib/hooks/Hooks';
import { useFetchProductsQuery } from '@/lib/service/productApi';
import { getStoreProductInfo } from '@/lib/slice/Productinfo';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const Redux = ({ children }) => {


    const { data: products, error, isLoading, } = useFetchProductsQuery({ id: "9565097296187" });

    const dispatch = useDispatch();


    useEffect(() => {
        if (products) {
            dispatch(getStoreProductInfo({
                productsdata: products,
                allVariants: products?.variants?.slice().reverse(),
                selectProducts: products?.variants[1]
            })
            );
        }
    }, [products]);

    useEffect(() => {
        if (error) {
            return
        }
    }, [error]);


    console.log(products)

    return (
        <div>
            {children}
        </div>
    )
}

export default Redux
