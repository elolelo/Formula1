import axios from 'axios'

export default axios.create({
  baseURL: 'https://v1.formula-1.api-sports.io/',
  headers: {
    'x-rapidapi-key': '52aded364ed9998c8634382a76e8406c',
    'x-rapidapi-host': 'v1.formula-1.api-sports.io'
  }
})