import React, { useState, useEffect } from "react";
import brands from './makeup.json';
import categories from './categories.json';
function MakeUp() {
    const [base, setBase] = useState([]);
    const [brand, setBrand] = useState('nyx');
   const [category, setCategory] = useState('');
    const baseurlapi = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=";
    const searchebybrand = baseurlapi + brand;

    const fetchData = async () => {
        const response = await fetch(searchebybrand);
        const data = await response.json();
        setBase(data);
    }

    useEffect(() => {
        fetchData()
    }, [])
 

  return (
      <>
      
         
          {base.length > 0 && (
              <ul className="flex-articles">
                  <li className="first-list-item">

                      <select onChange={(event) => {
                          setBrand(event.target.value);
                          fetchData();
                      }} >
                          <option value={' '}>All</option>
                          {brands.map(item =>
                              <option value={item.brand}> {item.brand}</option>
                          )}

                      </select>
                      <button className="btn" onClick={fetchData}>Get Brand</button>

                  </li>

                  {base.map(item => (
                      <li>
                          <h2>{item.name}</h2>
                          <p>Price: {item.price} {item.price_sign}</p>

                          <p>Brand: {item.brand}, category:{item.category} <a target="_blank" href={item.product_link}>Link</a></p>
                          <figure>
                              <img alt="Makeup " src={item.image_link} />
                          </figure>
                          <p className="description">
                              {item.description}
                          </p>
                      </li>
                  ))}

              </ul>

          )}
        
          </>
  );

}


export default MakeUp;