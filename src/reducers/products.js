const products = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return state;
        case 'ADD_PRODUCT':
            return [
                ...state,
                {
                    name: action.name,
                    price: action.price
                }
            ]
        default:
            return state;
    }
}

export default products;