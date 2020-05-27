const initialState = {
    subs: [],
    loading:true,
    error:null,
    subscribeTotal: 220
};


const  updateSubsItems=(subItems,item,idx)=>{
    if(item.count===0){

       return [ ...subsItems.slice(0,idx),
        ...subsItems.slice(idx+1)
    ];
    }

    if (idx === -1) {
        return [
            ...subsItems,
            item
        ];
    }

    return [
        ...subsItems.slice(0, idx),
        item,
        ...subsItems.slice(idx + 1)
    ];
};

const updateSubsItem = (subscribe, item = {}, quantity) => {

    const {
        id = sub.id,
        count = 0,
        title = book.title,
        total = 0 } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    };
};

const updateOrder = (state, bookId, quantity) => {
    const { books, cartItems } = state;

    const book = books.find(({id}) => id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);
    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
};

const reducer = (state= initialState,action) => {

   switch (action.type) {
       case 'FETCH_BARBERS_REQUEST':
           return {
             ... state,
               subs:[],
               loading: true,
               error:null

           };
       case 'FETCH_BARBERS_SUCCESS':
           return {
               ... state,
               subs: action.payload,
               loading: false,
                error:null

            };

       case 'FETCH_BARBERS_FAILURE':
           return {
               ... state,
               subs: [],
               loading: false,
               error: action.payload
           };

           default:
           return state;
   }


};

export  default reducer;

