import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  cart: [],
  isModalCart: false,
  modalDetail: [],
  isModalDetail: false,
}

const btShoeSlice = createSlice({
  name: 'btShoe',
  initialState,
  reducers: {
    addToCart: (state , {payload})=> {
      const index = state.cart.findIndex((item)=> item.id === payload.id)
      if(index === -1) {
        state.cart.push({...payload,cartQuantity:1})
        console.log("cart: ", state.cart);
      }else {
        state.cart[index].cartQuantity += 1
      }
    },
    isModalCart: (state,{payload})=>{
      state.isModalCart = payload
    },
    modalDetail: (state,{payload})=>{
      state.modalDetail = payload
    },
    isModalDetail:(state,{payload})=> {
      state.isModalDetail = payload
    },
    changeQuantityCart: (state,{payload})=> {
      const index = state.cart.findIndex((item)=>item.id === payload.idItem)
      if(index !== -1) {
        state.cart[index].cartQuantity = state.cart[index].cartQuantity + payload.quantity || 1
      }
    },
    deleteItemCart: (state, {payload})=> {
      state.cart = state.cart.filter((item)=> item.id !== payload.idItem)
    }
  }
})

export const {reducer : btShoeReducer , actions : btShoeAction} = btShoeSlice