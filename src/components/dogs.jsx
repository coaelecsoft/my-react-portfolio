import React, { useState, useEffect } from "react";
//const gitHubUrl = "https://api.github.com/users/deekshasharma"
//import axios from "axios"
//const pet = https://api.publicapis.org/entries
import "./articles.scss";
function Dogs() {
 
    const [randomDog, setRandomDog] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random/14");
        const data = await response.json();
        setRandomDog(data);
    }
    /*
    const fetchData = async () => {
        let data = [];
        for (let i = 0; i < 33; i++) {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const datajson = await response.json();
            data.push(datajson);           
        }
        setRandomDog(data);
    }
    */

    useEffect(() => {
        fetchData();
    }, []);

  return (
      <>  
          <p>{randomDog.message.length}</p>
          {randomDog.message.length > 0 && (
              <ul className="flex-articles">
                  {randomDog.message.map(item => (
                        <li> 
                            <figure>
                                <img alt="random Dog " src={item} />
                            </figure>
                        </li>
                  ))}

              </ul>

          )}        
        </>
  );

}

export default Dogs;