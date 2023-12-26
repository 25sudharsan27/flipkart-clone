import axios from 'axios';
import React,{useState,useEffect} from 'react';



function Navbar(){
    return (
        <div className="navbr">
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
          <span><a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" /></a></span>
          
          <div className="ss">
            <span><a className="accountbutton" href="#">Account</a></span>
          <div className="dropdown-content">
              <div className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">My Profile</a>
              </div>
              <div className="accountdropdown1">
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/supercoin-ce8408.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">SuperCoin Zone</a>
              </div>
              <div className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Flipkart Zone</a>
              </div>
              <div className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Orders</a>
              </div>
              <div className="accountdropdown1">               
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Wishlist</a>
              </div>
              <div className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/coupons-083172.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Coupons</a>
              </div>
              <div className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Gift Cards</a>
              </div>
              <div className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Notifications</a>
              </div>
              
              <div className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logout-e63ddf.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Login | Signin</a>
              </div>
              
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
          <div className="ss">
            <span>
              <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" /></a>
            </span>
          <div id="more" className="dropdown-content">
              
              <div id="moredrop" className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Notification Preferences</a>
              </div>
              <div id="moredrop" className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">24x7 Customer Care</a>
              </div>
              <div className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Advertise</a>
              </div>
              <div className="accountdropdown1"> 
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg" height="20px" width="20px" alt="" />
                <a className="accountdropdown1a" href="#">Download App</a>
              </div>
              
              
              
          </div>
          </div>
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
      </div>
    );
   
}


export default Navbar;