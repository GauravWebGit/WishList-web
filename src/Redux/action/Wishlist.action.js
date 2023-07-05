import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST } from "../ActionType"


export const Addwishlist=(item)=>(dispatch)=>{
    dispatch({type:ADD_TO_WISHLIST,payload:item})
}

export const RemoveInlist =(item)=>(dispatch)=>{
    dispatch({type:REMOVE_TO_WISHLIST,payload:item.id})
}