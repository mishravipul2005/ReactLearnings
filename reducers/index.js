import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_SERVICE, FETCH_PROVIDERS
} from '../actions/index';

const initialState = {
    items: []   
};

export default function serviceReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN:
            return {
                ...state          
            };

        case FETCH_SERVICE:
            return {
                ...state,
                loading: false,
                items: action.result
            }

        case FETCH_PROVIDERS:
            return {
                ...state,
                loading: false,
                providersList: action.result
            }
        default:            
            return state;
    }
}