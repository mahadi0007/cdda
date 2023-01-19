import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  setProduct,
  selectProduct,
  selectCartBagdeUpdate,
  setCartQuanUpdate,
} from "../redux/cartProductSlice";

import { BiBed, BiBath, BiRuler } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";

function Card(props) {
  const dispatch = useDispatch();
  const cartBadgeQuan = useSelector(selectCartBagdeUpdate);
  const [productList, setProductList] = useState(useSelector(selectProduct));

  const [allProperty, setAllProperty] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_PROPERTY_API).then((res) => {
      setAllProperty(res.data);
    });
  }, []);

  const handleCartProduct = (item) => {
    if (!productList.includes(item)) {
      dispatch(setProduct(item));
      setProductList((oldArray) => [...oldArray, item]);
      dispatch(setCartQuanUpdate(!cartBadgeQuan));
    }
  };
  return (
    <div>
      <div className="container-fluid px-5">
        <p className="mb-0 mt-4">Properties</p>

        <div className="row vh-87 overflow-auto">
          {allProperty.length > 0 &&
            allProperty.map((item, key) => {
              return (
                <div className="col-12 col-md-4 pt-2 mb-5 d-flex flex-column align-items-stretch">
                  <div className="card w-100 h-100 border-0">
                    <div className="position-relative">
                      <img
                        src={item.image}
                        className="card-img-top img-fluid w-100"
                        alt="..."
                        style={{
                          borderRadius: "5%",
                          height: "250px",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          props.setCenter({
                            lat: parseFloat(item.coordinates.lat),
                            lng: parseFloat(item.coordinates.lng),
                          });
                        }}
                      />
                      <span
                        className="position-absolute top-0 mt-3 me-3 text-white p-2 rounded-end"
                        style={{
                          left: "-12px",
                          backgroundColor: "#4FDC90",
                        }}
                      >
                        {item.house_type}
                      </span>
                      <div class="triangle-with-shadow"></div>

                      <div
                        className="d-flex px-2 text-white justify-content-evenly"
                        style={{ marginTop: "-2.5rem" }}
                      >
                        <span className="">
                          <BiBed style={{ fontSize: "22px" }} />{" "}
                          {item.house_info.bed}
                        </span>
                        <span className="">
                          <BiBath style={{ fontSize: "22px" }} />{" "}
                          {item.house_info.bath}
                        </span>
                        <span className="">
                          <GiHomeGarage style={{ fontSize: "22px" }} />{" "}
                          {item.house_info.garage}
                        </span>
                        <span className="">
                          <BiRuler style={{ fontSize: "22px" }} />{" "}
                          {item.house_info.sqft}
                          <sup className="ps-1">sqft</sup>
                        </span>
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="col-7">
                        <p
                          className="text-dark mb-0"
                          style={{ fontSize: ".8rem" }}
                        >
                          Asking price
                        </p>
                        <span
                          className="text-dark fw-bold"
                          style={{ fontSize: "1.4rem" }}
                        >
                          ${item.asking_price}
                        </span>
                      </div>
                      <div className="col-5 text-end">
                        <button
                          type="button"
                          className="btn btn-dark px-3 py-1"
                          onClick={() => handleCartProduct(item)}
                        >
                          buy
                        </button>
                      </div>
                    </div>
                    <span className="text-dark fw-bold line-clamp my-2">
                      {item.name}
                    </span>
                    <span className="text-dark">{item.address}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Card;
