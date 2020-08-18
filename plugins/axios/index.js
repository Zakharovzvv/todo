const Axios = require('axios')

const axios = Axios.create({
  baseURL:'/api/todo',
  headers: {
    'Content-Type': 'application/json'
  }
})
module.exports = axios
