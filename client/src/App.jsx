import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Navbar from './navbar.jsx';

function App() {
  const [categor,setcategories]=useState([]);
  const [products, setProducts] = useState([]);
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000")  // Change the URL to your server endpoint
      .then(result => {
        // Assuming the API response has a structure like { categories: [], products: [], sliders: [] }
        setcategories(result.data[0].categories);
        console.log(result.data[0].categories);
        setProducts(result.data[0].productcat);
        console.log(result.data[0].productcat);
        setSliders(result.data[0].imgslider);
        console.log(result.data[0].imgslider);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div id="body">
      <Navbar/>
      
      <div className="categories">
      {categor.map((category) => {
        return (
          <div className="cate" key={category._id}>
            <img className="cateimg" src={category.image} alt="" />
            <a id="catext" className="cateline" href="#">{category.name}</a>
          </div>
        );
      })}
      </div>
      <section className="container">
        <div className="slider-wrapper">

          <div className="slider">
            {sliders.map((slider)=>{
              return(
                <img className={`${slider.name}`} src={slider.image} alt=""/>
              )
            })}
          </div>
          <div className="slider-nav">
            {sliders.map((slider)=>{
              return(
                <a href={`#${slider.name}`} key={slider.name}></a>
              )
            })}
          </div>
        </div>
      </section>
      {
        products.map((product)=>{
          return(
            <div className="product">
              <div className="productcategory">
                <h1 id="protext">{product.name}</h1></div>
              <div className="productcategory1">
              <div id="products">
              {product.products.map((product1)=>{
                return(
                  
                    <div id="singleproduct" className="">
                      <div id="productimage1" className="productimg1"> 
                        <img className="productimg" src={product1.image} alt=""/>
                      </div>
                      <h1 id="productname">{product1.name}</h1>
                      <h1 id="productprice">{product1.price}</h1>
                    </div>
                  
                )}
              )}
              </div>
              </div>
              
            </div>
          )
        })
      }
      <div id="footer">

      </div>

    </div>
    

  );

    
}

export default App;
