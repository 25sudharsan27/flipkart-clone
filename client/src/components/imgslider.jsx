import axios from 'axios';
import React,{useState,useEffect} from 'react';


function ImgSlider(){
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3000")  // Change the URL to your server endpoint
        .then(result => {
          // Assuming the API response has a structure like { categories: [], products: [], sliders: [] }
          setSliders(result.data[0].imgslider);
          console.log(result.data[0].imgslider);
        })
        .catch(err => console.log(err));
    }, []);

    return (
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
    )
}

export default ImgSlider;