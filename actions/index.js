import axios from "axios";
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_SERVICE = 'FETCH_SERVICE';
export const FETCH_PROVIDERS = 'FETCH_PROVIDERS';

 

export function fetchRecords(type,response){
    return {
        type: type,
        result: response
    }
}

export const fetchProductsBegin = (payloadMethod) => ({
    type: FETCH_PRODUCTS_BEGIN,
    payload: { payloadMethod }
});



export function loadService() {
    return dispatch => {
        dispatch(fetchProductsBegin(loadService));
        return fetch('http://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services')          
            .then(res => res.json())
            .then(json => {
                dispatch(fetchRecords('FETCH_SERVICE',json.data));
                return json.data;
            })
            
    };
}

export function loadProviders() {
    return dispatch => {
        dispatch(fetchProductsBegin(loadProviders));
        return fetch('http://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10')
            .then(res => res.json())
            .then(json => {
                dispatch(fetchRecords('FETCH_PROVIDERS',json.data));
                return json.data;
            })

    };
}

// Handle HTTP errors since fetch won't.
