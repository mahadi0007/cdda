import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  setProduct,
  selectProduct,
  selectCartBagdeUpdate,
} from "../redux/cartProductSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar(props) {
  const productData = useSelector(selectProduct);
  const cartBadgeQuan = useSelector(selectCartBagdeUpdate);

  const [productList, setProductList] = useState(useSelector(selectProduct));

  useEffect(() => {
    setProductList(productData);
  }, [cartBadgeQuan]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light mt-1">
        <div className="container-fluid px-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-between">
              <li>
                <NavLink
                  to="/"
                  className="text-dark fw-bold fs-18 text-decoration-none"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className="text-dark fw-bold fs-18 text-decoration-none position-relative"
                >
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-cart-badge">
                    {productList.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
