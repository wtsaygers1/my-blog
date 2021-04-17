import React, { useState, useEffect } from "react"
import axios from "axios";

function Image(){
    const [imageData, setImageData] = useState({})
    
    const axiosGet = () => {
        let apiURL = "https://api.unsplash.com"
        axios.get(apiURL + "/photos/random" + "/?client_id=svE0EXf_AAIAfNA7wxkZPOADF8UlYZP12NmMyyoGses")
            .then(function (response) {
                // handle success
                setImageData(response.data)
    })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(axiosGet, [])

        return (
            <div className="row">
            <div className="col">
                {(Object.keys(imageData).length > 0)
                    ? <img className="image-fluid" src={imageData.urls.small} />
                    : <div>image loading...</div>
                }
            </div>
            </div>
        )
    }

export default Image