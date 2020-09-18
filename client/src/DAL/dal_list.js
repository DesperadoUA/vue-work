import axios from 'axios'

class DAL_List {
    static getPosts(limit, offset) {
        const API_URL = 'http://localhost:3000/api'
        return axios.post(API_URL, {limit, offset})
    }
}
export default DAL_List