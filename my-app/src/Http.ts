import axios from "axios";

export default axios.create({

    baseURL:'https://mge7656sme.execute-api.us-east-1.amazonaws.com',
    headers:{
        "content-type":"application/json"
    }
})
