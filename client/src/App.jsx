import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';

function App() {
  const [categor,setcategories]=useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:3000")  // Change the URL to your server endpoint
      .then(result => setcategories(result.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="body">
      <div className="navbar">
        <div className="menu">
        ☰
        </div>
        <div className="image">      
          <img src="../Mediamodifier-Design.svg" height="80px" alt=""/>
        </div>
        <div className="engine">
          <a className="engine1" href="#" >
            <svg width="24" height="24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          <input className="search" type="text" placeholder="Search for Producs, Brands and More"></input>
        </div>
        <div className="account" >
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" /></a>
          <div className="ss">
            <span><a className="accountbutton" href="#">Account</a></span>
          <div className="accountdropdown">
              <a className="accountdropdown1a" href="#">Orders</a>
              <br/>
              <a className="accountdropdown1a" href="#">Wishlist</a>
              <br/>
              <a className="accountdropdown1a" href="#">Rewards</a>
              <br/>
              <a className="accountdropdown1a" href="#">Gift Cards</a>
              <br/>
              <a className="accountdropdown1a" href="#">Notifications</a>
              <br/>
              <a className="accountdropdown1a" href="#">My Chats</a>
              <br/>
              <a className="accountdropdown1a" href="#">Coupons</a>
              <br/>
              <a className="accountdropdown1a" href="#">My Profile</a>
              <br/>
              <a className="accountdropdown1a" href="#">SuperCoin Zone</a>

          </div>
          </div>
          <a className="accountbutton1" href="#">You</a>
        </div>
        <div className="cart" width="70px">
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" /></a>
          <a className="cartbutton" href="#">Cart</a>
        </div>
        <div className='seller'>
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" /></a>
          <a className="sellerbutton" href="#">Become a seller</a>
        </div>
        <div className="more">
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" /></a>
        </div>
      </div>
      <div className="secondnavbar">
      <div className="secondengine">
          <a className="secondengine1" href="#" >
            <svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          <input className="secondsearch" type="text" placeholder="Search for Producs, Brands and More"></input>
      </div>
      </div>

      <div className="categories">
      {categor.map((category) => {
        return (
          <div className="cate" key={category._id}>
            <img className="cateimg" src={category.image} alt="" />
            <a className="cateline" href="#">{category.name}</a>
          </div>
        );
      })}
      </div>

    </div>

  );

    
}

export default App;
