import axios from "axios";

axios.defaults.baseURL = 'https://api.openweathermap.org';

export const fetchWeather = async () => {

    const params = new URLSearchParams(
        {
            appid: '2f5a3fbbff93a659c84e24cce7f2fbf8',
        }
    )

    const response = await axios.get(`/data/2.5/weather?lat=44.34&lon=10.99&${params}`);
    const dates = await response.data;
    console.log(dates);
    const docs = await dates.results;
    return docs
};

fetchWeather()