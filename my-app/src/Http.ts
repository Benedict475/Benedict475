import axios from "axios";

export default axios.create({

    baseURL:'https://gvpghysah6.execute-api.us-east-1.amazonaws.com/Movies',
    headers:{
        "content-type":"application/json"
    }
})
