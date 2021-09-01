import React from "react";
import "./Read.css";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";

const Read = () => {
  const [users, setUser] = useContext(UserContext);
  const {length} = useParams();
  const user = users.filter((user) => user.length === length);

  return (
    <div >
      <div className = "products">
   
        <div className = "containerRea">
            <h1 className = "lg-title">SKI is Really Fun</h1>
            <div className = "">Skiing is such an adrenalin rush at all ability levels.If you’re a beginner, just putting on the skis for the first time can be a fun challenge. And when they start to glide and you don’t know what to do – except maybe throwing yourself in the snow – it’s such a thrill. And when you try to make your first turn on a green slope, your heart will be pumping for sure.</div>
      
            <div className = "product-items">
                
                <div className = "product">
                    <div className = "product-content">
                        <div className = "product-img">
                          <img src="https://i.ibb.co/vxnKZF3/ski.jpg" alt="ski" border="0"></img>
                        </div>
                        <div className = "product-btns bg cont Link">
                                <Link   to="/">
                                  <div>
                                    Back to Home
                                    <span><i className = "fas fa-backward"></i></span>
                                  </div>
                                </Link>
                        </div>
                    </div>
      
                    <div className = "product-info">
                        <div className = "product-info-top">
                            <h2 className = "sm-title">SKI DETAILS</h2>
                            <div className = "rating">
                                <span><i className = "fas fa-star"></i></span>
                                <span><i className = "fas fa-star"></i></span>
                                <span><i className = "fas fa-star"></i></span>
                                <span><i className = "fas fa-star"></i></span>
                                <span><i className = "far fa-star"></i></span>
                            </div>
                        </div>
                        <a href className = "product-name">AGE:{user[0].age_group1}years and Body Length {user[0].length}CM</a>
                        <p className = "product-price">SKI LENGTH: {parseInt(user[0].length)+parseInt(user[0].age_group1)}CM</p>
                        <p className = "product-price">LENGTH: {user[0].length}CM</p>
                    </div>
      
                    <div className = "off-info">
                          <h2 className = "sm-title">100% FUN</h2>
                    </div>
                </div> 
                
              </div>
          
            </div>
      </div>
  </div>   
  );
};

export default Read;
