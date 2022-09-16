import api from './api'

export const fetchTeams = async (params) => {
  let reqParams = params ? params : {search: 'amg'};
  const response = await api.get('/teams', { params: reqParams })
  return response.data;
}

export const searchTeams = async (query) => {
  return fetchTeams({search: query});
}