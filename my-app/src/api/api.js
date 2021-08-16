import axios from "axios";

class jsonApi {
    constructor() {
        this.api= axios.create({
            baseURL: "http://localhost:8000"
        }) 
    }
    getBeers = () => {
        return this.api.get("/beers")
    }
    
}

export default new jsonApi()