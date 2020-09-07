const { getPlaceLatLng } = require("./place/place");
const { getWeather } = require("./weather/weather");

const argv = require("yargs").options({
  direction: {
    alias: "d",
    desc: "Direction of the city",
    demand: true,
  },
}).argv;


const getInfo = async (direction)=>{

    try {
        const coords = await getPlaceLatLng(direction)
        const temp = await getWeather(coords.latt, coords.longt)
        return `The weather of '${coords.city}, ${coords.countryname}' is ${temp}°C`
    } catch (error) {
        return `The weather of '${coords.city}' could not be determined`
    }

}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log)