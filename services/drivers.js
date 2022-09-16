import api from './api'

// export const fetchDrivers = async (params) => {
export const fetchDrivers = async () => {
  // console.log("params", params)
  // let reqParams = params ? params : { search: 'nic'};
  // let reqParams = params ? params : {search: 'ale',,season: '2019'}
  // console.log("reqParams",reqParams)
  // const response = await api.get('/drivers', { params: reqParams })
  const response = await api.get('/rankings/drivers?season=2021')
  console.log(response);
  return response.data;
}

export const searchDrivers = async (query) => {
  return fetchDrivers({search: query});
}