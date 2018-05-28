import axios from 'axios';

const API_KEY = 'aa655f836d0a22d5a11b3a12bb32fa28';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // Axios returns a promise

  //console.log("Request from action creator", request);

  return {
    type: FETCH_WEATHER,
    payload: request // return promise as payload, then after the promise resolves create a new action and send the data to the reducer
  };
}
