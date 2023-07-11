import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "132ec1019dcc47ad847b14671c1f4f27"
    }
})