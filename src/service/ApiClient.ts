import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2d7bc271fd384ad5abe471f18b071e69'
    }
})