const axios = require('axios')

const getWeather = async (lat,lng)=>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=407841297f6d5308dcdfc4d27edfeba0&units=metric`)
    
    return resp.data.main.temp
}

module.exports={
    getWeather
}