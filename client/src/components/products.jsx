import axios from 'axios';
import React,{useState,useEffect} from 'react';



function Products(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000")  // Change the URL to your server endpoint
          .then(result => {
            // Assuming the API response has a structure like { categories: [], products: [], sliders: [] }
            setProducts(result.data[0].productcat);
            console.log(result.data[0].productcat);
          })
          .catch(err => console.log(err));
      }, []);
    return(
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
      )

}


export default Products;