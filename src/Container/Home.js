import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Addwishlist } from "../Redux/action/Wishlist.action";

function Home(props) {
  const [data, setData] = useState([]);
  const [onceUpdate, setOnceUpdate] = useState(false);

  const dispatch = useDispatch();
  const select = useSelector((state) => state);

  const GetData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        if (res.data.products.length > 0) {
          for (let index = 0; index < res.data.products.length; index++) {
            res.data.products[index]["check"] = false;
          }
          setData(res.data.products);
        } else {
          alert("No data Found");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    if (!onceUpdate) {
      GetData();
      setOnceUpdate(true);
    }
  }, [onceUpdate]);

  const handleWishlist = (item, i) => {
    dispatch(Addwishlist(item));
  };

  return (
    <div className="container">
      <h2>Home</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ProductID</th>
            <th scope="col">Title</th>
            <th scope="col">Price($)</th>
            <th scope="col">Discount(%)</th>
            <th scope="col">Rating</th>
            <th scope="col">Add Wishlist</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, i) => {
              for (let index = 0; index < select.item.length; index++) {
                if (select.item[index]["id"] === item.id) {
                  item.check = true;
                }
              }
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.discountPercentage}</td>
                  <td>{item.rating}</td>
                  <td>
                    {item.check!==true?
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleWishlist(item, i)}
                    >
                      Add Wishlist +
                    </button>:
                    <button
                      type="button"
                      className="btn btn-success"
                    >
                      Added
                    </button>

                    }
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No Record Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
