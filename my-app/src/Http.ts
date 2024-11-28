import axios from "axios";

export default axios.create({

    baseURL:'https://2k6v9kjqyl.execute-api.us-east-1.amazonaws.com',
    headers:{
        "content-type":"application/json"
    }
})
