import axios from 'axios'

export default axios.create({
  baseURL: 'https://v1.formula-1.api-sports.io/',

  // baseURL: 'https://api-formula-1.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '7f2253b5987063a23d99388bf28b422d',
    'x-rapidapi-host': 'v1.formula-1.api-sports.io'
  }
})