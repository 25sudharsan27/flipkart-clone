import axios from 'axios';
import React,{useState,useEffect} from 'react';




function Categories(){
    const [categor,setcategories]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000")  // Change the URL to your server endpoint
          .then(result => {
            // Assuming the API response has a structure like { categories: [], products: [], sliders: [] }
            setcategories(result.data[0].categories);
            console.log(result.data[0].categories);
            
          })
          .catch(err => console.log(err));
      }, []);

    return (
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
    )
}

export default Categories;