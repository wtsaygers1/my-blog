import React, { Component } from "react"
import axios from "axios";

export class Image extends Component {
    constructor(props) {
        super();
        this.state = {
            imageData: {}
        }
    }

    componentDidMount() {

        let apiURL = "https://api.unsplash.com"

        let this_ = this;
        // const axiosData = 
        axios.get(apiURL + "/photos/random" + "/?client_id=svE0EXf_AAIAfNA7wxkZPOADF8UlYZP12NmMyyoGses")
            .then(function (response) {
                // handle success
                // return response.data
                console.log(response.data)
                this_.setState({ imageData: response.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {
        return (
            <div className="row">
            <div className="col">
                {(Object.keys(this.state.imageData).length > 0)
                    ? <img className="image-fluid" src={this.state.imageData.urls.small} />
                    : <div>image loading...</div>
                }
            </div>
            </div>
        )
    }
}

export default Image