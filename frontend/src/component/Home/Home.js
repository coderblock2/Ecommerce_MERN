import React, { Fragment, useEffect } from "react";
import { CgScrollV } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "react-alert";

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(   // the data which is in state, if we want to get that data then we use useSelector..
    (state) => state.products
  );

  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());  
    }
    dispatch(getProduct()); // yaha dispatch ka use isliye hua hai ki jab bhi hmm Home.js ka route use kare tab tab dispatch ke andr jo action hai getProducts() usse call kr de ya trigger kr de ..
  }, [dispatch,error,alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title=" ECOMMERCE " />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
                Scroll <CgScrollV />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
