import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  selectProduct,
  deleteProduct,
  setProduct,
} from "../redux/cartProductSlice";
import { NavLink } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState(useSelector(selectProduct));

  let totalPrice = 0;

  {
    productList.length > 0 &&
      productList.map((item, index) => {
        totalPrice = parseFloat(totalPrice + item.asking_price);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid px-5">
        <div className="row">
          {productList.length > 0 &&
            productList.map((item, index) => {
              return (
                <div className="col-6 pt-4 offset-3">
                  <div className="card w-100 h-100 border-rounded-5">
                    <div className="row">
                      <div className="col-4">
                        <a href="#" target="_blank" rel="noreferrer">
                          <img
                            src={item.image}
                            className="card-img-top img-fluid w-100"
                            alt="..."
                            style={{
                              borderRadius: "5%",
                              height: "250px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>

                      <div className="row col-8">
                        <div className="col-10">
                          <p
                            className="text-dark fw-bold"
                            style={{ fontSize: "1.3rem" }}
                          >
                            ${item.asking_price}
                          </p>
                        </div>
                        <div className="col-2 text-end">
                          <RiDeleteBinLine
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => {
                              const temp = [...productList];
                              temp.splice(productList.indexOf(item), 1);

                              setProductList(temp);
                              dispatch(deleteProduct(temp));
                            }}
                          />
                        </div>
                        <p className="text-dark fw-bold line-clamp">
                          {item.name}
                        </p>
                        <p className="text-dark">{item.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="fixed-bottom bg-white">
            <hr className="mt-3 mb-1" />
            <div className="d-flex justify-content-between p-0 my-2 fw-bold">
              <p>Total ${totalPrice}</p>
              <NavLink to="/thanks">
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{ borderRadius: "0" }}
                >
                  Checkout
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
