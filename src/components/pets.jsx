import React, { useState, useEffect } from "react";
//const gitHubUrl = "https://api.github.com/users/deekshasharma"
//import axios from "axios"
//const pet = https://api.publicapis.org/entries
import "./articles.scss";
function Pets() {
 
    const [randomDog, setRandomDog] = useState([]);


    const fetchData = async () => {
        let data = [];
        for (let i = 0; i < 33; i++) {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const datajson = await response.json();
            data.push(datajson);           
        }
        setRandomDog(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
        <>  
          {randomDog.length > 0 && (
              <ul id="other" className="flex-articles">
                  {randomDog.map(item => (
                        <li> 
                            <figure>
                                <img alt="random Dog " src={item.message} />
                            </figure>
                        </li>
                  ))}

              </ul>

          )}        
        </>
  );

}

export default Pets;