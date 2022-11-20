import axios from '../api/http'

export function getNowWeather(){
    return axios.get('https://devapi.qweather.com/v7/weather/now?location=101010100&key=203e75f7fc8f4b6b93069b79c3dadf69')
}




