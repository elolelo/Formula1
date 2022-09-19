import api from './api'

export const fetchDrivers = async () => {

  const response = await api.get('/rankings/drivers?season=2021')
// getting all my favorite player - it's all those who played in 2021 season
  return response.data;
}
export const Driver = async (name) => {
  const response = await api.get(`/drivers?search=${name}`)
 // name = params ? params : { search: 'nic'};
  // let reqParams = params ? params : {search: 'ale',,season: '2019'}
  // console.log("reqParams",reqParams)



  console.log(response.data.response);
  return response.data.response[0];
}

export const searchDrivers = async (query) => {
  return fetchDrivers({search: query});
}