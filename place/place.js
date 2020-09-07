const axios = require("axios");

const getPlaceLatLng = async (direction) => {
  const instance = axios.create({
    baseURL: "https://geocode.xyz",
    params: {
      auth: "12014697099913877229x106983",
      json: "1",
      locate: `${direction}`,
    },
  });

  const resp = await instance.get();
  if (resp.data.error) {
    throw new Error(`No result for ${direction}`);
  }

  const { city,countryname } = resp.data.standard;
  const { longt, latt } = resp.data;

  return {
    city,
    countryname,
    latt,
    longt,
  };
};

module.exports = {
  getPlaceLatLng
};
