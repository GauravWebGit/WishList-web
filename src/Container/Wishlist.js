import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveInlist } from "../Redux/action/Wishlist.action";

function Wishlist(props) {
  const dispatch =useDispatch()
  const selector = useSelector(state=>state)
  const data =selector.item

  const handleRemove= (data) =>{
     dispatch(RemoveInlist(data))
  }

  return (
    <div className="container">
      <h2 className="text-center">Wishlist</h2>
      <div className="col-12">
        <div className="row">
            { data !== null ? data.map((item,i)=>{
                return(
                    <div className="card" style={{ width: "18rem" ,padding:"0 0",margin:"10px 20px" }} key={i} >
                        <img src={item.thumbnail} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{item.brand}</h5>
                        <p className="card-text">{item.description} </p>
                        <p className="card-text">Price : {item.price} $</p>
                        <p className="">Available stock : {item.stock}</p>
                        <p className="">Rating : {item.rating}</p>

                        <a className="btn btn-primary" onClick={()=>handleRemove(item)}>
                            Remove In List
                        </a>
                        </div>
                    </div>
                )
            }):  <div className="py-2">No Data Found</div> }
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
