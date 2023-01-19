import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import {
  selectProduct,
  deleteProduct,
  setProduct,
} from "../redux/cartProductSlice";
function ThanksPage() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState(useSelector(selectProduct));
  let totalPrice = 0;

  {
    productList.length > 0 &&
      productList.map((item, index) => {
        totalPrice = parseFloat(totalPrice + item.asking_price);
      });
    console.log(totalPrice);
  }
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h3>Thank you for your purchase.</h3>
          <p>
            You have purchased {productList.length} properties for ${totalPrice}
          </p>
          <NavLink to="/">
            <button
              type="button"
              className="btn btn-dark mt-5"
              style={{ borderRadius: "0" }}
              onClick={() => {
                dispatch(deleteProduct([]));
              }}
            >
              Go to back to Store
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ThanksPage;
