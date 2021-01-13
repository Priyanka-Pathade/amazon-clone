  export const initialState = {
    basket: [],
    user:null
  }; 

  // Selector
  export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);  //initial amount is 0

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case "REMOVE_FROM_BASKET":
        //if more than one item in basket have same id then find
        // index n use below code
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) { // find the item index
          newBasket.splice(index, 1); //removes item of that index
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }

      case "SET_USER":
          return {
            ...state,
            user: action.user
          }
          
      default:
      return state;
    }

  }

export default reducer;
