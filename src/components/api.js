import React, { useState, useEffect } from "react";
//const gitHubUrl = "https://api.github.com/users/deekshasharma";
//import axios from "axios"
function Api() {
    const [base, setBase] = useState([])


    const fetchData = async () => {
        const response = await fetch("https://izrada-sajta.rs/api/")
        const data = await response.json()

        setBase(data)

    }


    useEffect(() => {

        fetchData()

    }, [])

  return (

      <section style={{ padding: '5px' }}>
          <h2>API from My website </h2>
          <p>The falowing list represents nothing. It is just </p>
          {base.length > 0 && (
              <ul>
                  {base.map(item => (
                      <li key={item.base_id}>
                          <h3>Page: {item.menu_title_en } - {item.title_en}</h3>
                          <p>Description {item.description_en}</p>
                          <p>Base: {item.base_en}</p>
                          <p>img: 
                              (item.image){
                                  item.image
                              }
                          </p>
                      </li>

                  ))}

              </ul>

          )}
         
</section>
  );

}


export default Api;